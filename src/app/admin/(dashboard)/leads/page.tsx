import prisma from "@/lib/prisma";

export default async function LeadsPage() {
  const leads = await prisma.contactLead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Contact Leads</h1>
      
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-neutral-950 border-b border-neutral-800">
            <tr>
              <th className="p-4 text-neutral-400 font-medium">Name</th>
              <th className="p-4 text-neutral-400 font-medium">Contact</th>
              <th className="p-4 text-neutral-400 font-medium">Service Needed</th>
              <th className="p-4 text-neutral-400 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-neutral-500">
                  No leads found yet.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-neutral-800/50 transition-colors">
                  <td className="p-4">
                    <p className="font-medium">{lead.name}</p>
                    {lead.company && <p className="text-sm text-neutral-400">{lead.company}</p>}
                  </td>
                  <td className="p-4 text-sm text-neutral-300">
                    <p>{lead.email}</p>
                    <p>{lead.phone}</p>
                  </td>
                  <td className="p-4 text-sm text-neutral-300">
                    <p className="font-medium text-blue-400">{lead.service}</p>
                    <p className="truncate max-w-xs">{lead.message}</p>
                  </td>
                  <td className="p-4 text-sm text-neutral-400">
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
