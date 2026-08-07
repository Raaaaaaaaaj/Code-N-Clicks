import prisma from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function LeadsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const resolvedParams = await searchParams;
  const page = parseInt(resolvedParams?.page || "1");
  const limit = 10;
  const skip = (page - 1) * limit;

  const total = await prisma.contactLead.count();
  const totalPages = Math.ceil(total / limit) || 1;

  const leads = await prisma.contactLead.findMany({
    orderBy: { createdAt: "desc" },
    skip,
    take: limit,
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Contact Leads</h1>
      
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-neutral-950 border-b border-neutral-800">
            <tr>
              <th className="p-4 text-neutral-400 font-medium">Name</th>
              <th className="p-4 text-neutral-400 font-medium">Email</th>
              <th className="p-4 text-neutral-400 font-medium">Phone</th>
              <th className="p-4 text-neutral-400 font-medium">Company</th>
              <th className="p-4 text-neutral-400 font-medium">Service Needed</th>
              <th className="p-4 text-neutral-400 font-medium">Message</th>
              <th className="p-4 text-neutral-400 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-neutral-500">
                  No leads found yet.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-neutral-800/50 transition-colors">
                  <td className="p-4 font-medium">{lead.name}</td>
                  <td className="p-4 text-neutral-300">{lead.email}</td>
                  <td className="p-4 text-neutral-300">{lead.phone || "-"}</td>
                  <td className="p-4 text-neutral-400">{lead.company || "-"}</td>
                  <td className="p-4 font-medium text-blue-400">{lead.service || "-"}</td>
                  <td className="p-4 text-neutral-300 whitespace-normal min-w-[300px]">
                    {lead.message}
                  </td>
                  <td className="p-4 text-neutral-400">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          {page > 1 ? (
            <Link href={`/admin/leads?page=${page - 1}`}>
              <Button variant="outline" className="bg-neutral-900 border-neutral-700 text-white">Previous</Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="bg-neutral-900 border-neutral-700 text-neutral-600">Previous</Button>
          )}
          
          <span className="text-neutral-400 font-medium">Page {page} of {totalPages}</span>
          
          {page < totalPages ? (
            <Link href={`/admin/leads?page=${page + 1}`}>
              <Button variant="outline" className="bg-neutral-900 border-neutral-700 text-white">Next</Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="bg-neutral-900 border-neutral-700 text-neutral-600">Next</Button>
          )}
        </div>
      )}
    </div>
  );
}
