import Link from "next/link";
import React from "react";

/**
 * Utility to parse inline markdown links "[Anchor Text](/path)" and replace them with Next.js Link components.
 */
export function renderTextWithLinks(text: string): React.ReactNode | string {
  if (!text) return "";
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, anchorText, url] = match;
    const startIndex = match.index;

    // Add preceding text segment
    if (startIndex > lastIndex) {
      parts.push(text.substring(lastIndex, startIndex));
    }

    // Add Next.js Link component
    parts.push(
      <Link key={startIndex} href={url} className="text-brand-blue hover:underline font-bold transition-all">
        {anchorText}
      </Link>
    );

    lastIndex = regex.lastIndex;
  }

  // Add remaining trailing text segment
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}
