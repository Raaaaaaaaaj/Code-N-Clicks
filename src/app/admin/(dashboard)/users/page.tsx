import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function UsersPage() {
  const session = await getServerSession(authOptions);

  if ((session?.user as any)?.role !== "master") {
    redirect("/admin/dashboard");
  }

  const users = await prisma.adminUser.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Team Management</h1>
        {/* Employee creation will be added here later */}
      </div>
      
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-neutral-950 border-b border-neutral-800">
            <tr>
              <th className="p-4 text-neutral-400 font-medium">Email</th>
              <th className="p-4 text-neutral-400 font-medium">Role</th>
              <th className="p-4 text-neutral-400 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-neutral-800/50 transition-colors">
                <td className="p-4">
                  <p className="font-medium text-white">{user.email}</p>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium uppercase ${user.role === 'master' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4 text-sm text-neutral-400">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
