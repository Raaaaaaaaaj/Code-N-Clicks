"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import imageCompression from "browser-image-compression";
import { useCallback, useRef, useState } from "react";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  Heading1, Heading2, Heading3, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Image as ImageIcon, Link as LinkIcon, Unlink, Loader2, Upload, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface TipTapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none min-h-[400px] p-4 focus:outline-none',
      },
    },
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // 1. Compress & Convert to WebP client-side
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1200,
        useWebWorker: true,
        fileType: "image/webp" as any,
      };
      
      const compressedFile = await imageCompression(file, options);
      
      // 2. Upload to server
      const formData = new FormData();
      formData.append("file", compressedFile, file.name.replace(/\.[^/.]+$/, "") + ".webp");

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setImageUrl(data.url);
      
      // Suggest clean alt text from file name if empty
      if (!imageAlt) {
        const cleanName = file.name
          .replace(/\.[^/.]+$/, "")
          .replace(/[-_]+/g, " ")
          .trim();
        setImageAlt(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
      }

      toast.success("Image uploaded & converted to WebP!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleInsertImage = () => {
    if (!editor || !imageUrl) {
      toast.error("Please provide an image URL or upload an image.");
      return;
    }

    editor
      .chain()
      .focus()
      .setImage({
        src: imageUrl,
        alt: imageAlt.trim() || undefined,
        title: imageAlt.trim() || undefined,
      })
      .run();

    setIsImageModalOpen(false);
    setImageUrl("");
    setImageAlt("");
    toast.success("Image inserted with Alt text!");
  };

  const openImageModal = () => {
    if (!editor) return;
    // Check if an image is currently selected
    if (editor.isActive("image")) {
      const attrs = editor.getAttributes("image");
      setImageUrl(attrs.src || "");
      setImageAlt(attrs.alt || "");
    } else {
      setImageUrl("");
      setImageAlt("");
    }
    setIsImageModalOpen(true);
  };

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  const ToolbarButton = ({ onClick, isActive = false, icon: Icon, disabled = false, title }: any) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-2 rounded-md hover:bg-neutral-800 transition-colors ${isActive ? 'bg-neutral-800 text-blue-400' : 'text-neutral-400'} disabled:opacity-50`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  return (
    <div className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-950">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-neutral-800 bg-neutral-900/50">
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} icon={Bold} title="Bold" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} icon={Italic} title="Italic" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} icon={UnderlineIcon} title="Underline" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')} icon={Strikethrough} title="Strikethrough" />
        
        <div className="w-px h-6 bg-neutral-800 mx-2" />
        
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })} icon={Heading1} title="Heading 1" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} icon={Heading2} title="Heading 2" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })} icon={Heading3} title="Heading 3" />
        
        <div className="w-px h-6 bg-neutral-800 mx-2" />
        
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} icon={AlignLeft} title="Align Left" />
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} icon={AlignCenter} title="Align Center" />
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} icon={AlignRight} title="Align Right" />
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('justify').run()} isActive={editor.isActive({ textAlign: 'justify' })} icon={AlignJustify} title="Align Justify" />
        
        <div className="w-px h-6 bg-neutral-800 mx-2" />
        
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} icon={List} title="Bullet List" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} icon={ListOrdered} title="Numbered List" />
        
        <div className="w-px h-6 bg-neutral-800 mx-2" />
        
        <ToolbarButton onClick={setLink} isActive={editor.isActive('link')} icon={LinkIcon} title="Insert Link" />
        <ToolbarButton onClick={() => editor.chain().focus().unsetLink().run()} disabled={!editor.isActive('link')} icon={Unlink} title="Unlink" />
        
        <div className="w-px h-6 bg-neutral-800 mx-2" />
        
        {/* Insert Image Button with Alt Text Modal */}
        <ToolbarButton 
          onClick={openImageModal} 
          isActive={editor.isActive('image')}
          icon={ImageIcon} 
          title="Insert / Edit Image with Alt Text"
        />
      </div>

      {/* Editor Content */}
      <div className="prose-container">
        <EditorContent editor={editor} />
      </div>

      {/* Image Insertion & Alt Text Dialog */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="bg-neutral-900 border-neutral-800 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-white flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-blue-400" /> Insert Image with Alt Text
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Upload or URL */}
            <div className="space-y-2">
              <Label className="text-xs text-neutral-300 font-medium">Image Source</Label>
              <div className="flex gap-2 items-center">
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://... or upload below"
                  className="bg-neutral-950 border-neutral-800 text-xs flex-1"
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  id="tiptap-image-upload-input"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  disabled={isUploading}
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-xs shrink-0 text-white"
                >
                  {isUploading ? <Loader2 className="w-3.5 h-3.5 animate-spin mr-1" /> : <Upload className="w-3.5 h-3.5 mr-1" />}
                  Upload
                </Button>
              </div>
            </div>

            {/* Image Alt Text Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-neutral-300 font-medium flex items-center gap-1.5">
                  <span>Image Alt Text</span>
                  <span className="text-[10px] text-blue-400 font-mono font-normal flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> SEO Recommended
                  </span>
                </Label>
              </div>
              <Input
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                placeholder="e.g. Dashboard interface showing real-time booking analytics"
                className="bg-neutral-950 border-neutral-800 text-xs"
              />
              <p className="text-[11px] text-neutral-500 leading-tight">
                Search engines and screen readers use this text to understand your image and index it on Google Images.
              </p>
            </div>

            {/* Image Preview if available */}
            {imageUrl && (
              <div className="border border-neutral-800 rounded-lg p-2 bg-neutral-950/60 flex items-center gap-3">
                <div className="w-16 h-16 rounded overflow-hidden border border-neutral-800 shrink-0 bg-neutral-900">
                  <img src={imageUrl} alt={imageAlt || "Preview"} className="w-full h-full object-cover" />
                </div>
                <div className="text-xs space-y-0.5 overflow-hidden">
                  <span className="text-neutral-300 font-semibold truncate block max-w-[280px]">
                    {imageUrl}
                  </span>
                  <span className="text-neutral-500 font-mono text-[10px] block">
                    Alt: {imageAlt ? `"${imageAlt}"` : <span className="text-amber-500">No alt text set</span>}
                  </span>
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setIsImageModalOpen(false)}
              className="text-neutral-400 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="button"
              size="sm"
              disabled={!imageUrl || isUploading}
              onClick={handleInsertImage}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold"
            >
              Insert into Article
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
