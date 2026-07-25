import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await prisma.contactLead.findMany({
    orderBy: { createdAt: "desc" },
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
              <th className="p-4 text-neutral-400 font-medium max-w-xs">Message</th>
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
                  <td className="p-4 text-neutral-300 max-w-xs truncate" title={lead.message}>
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
    </div>
  );
}
