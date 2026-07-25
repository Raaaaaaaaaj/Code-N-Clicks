"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  LogOut, 
  Settings,
  Users
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/admin/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col">
        <div className="p-6 border-b border-neutral-800">
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
          <p className="text-sm text-neutral-400 mt-1">{session?.user?.email}</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors">
            <FileText className="w-5 h-5" />
            Blogs
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors">
            <MessageSquare className="w-5 h-5" />
            Leads
          </Link>
          
          {(session?.user as any)?.role === "master" && (
            <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors">
              <Users className="w-5 h-5" />
              Team
            </Link>
          )}
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <button 
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-neutral-950 text-white">
        {children}
      </main>
    </div>
  );
}
