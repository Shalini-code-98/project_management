import React, { useState } from 'react';
import SideBar from '../components/SideBar';

const Tickets = () => {
  // Dummy Ticket Data
  const [tickets, setTickets] = useState([
    { ref: 'TCK-000001', title: 'Cannot Save Post', assignee: 'Kunj Keshav', project: 'WordPress Theme', status: 'Open' },
    { ref: 'TCK-000002', title: 'Search Engine & Technical Library - Special Support', assignee: 'Chirag Singh', project: 'SEO Optimization', status: 'Resolved' },
    { ref: 'TCK-000003', title: 'Bug:Quotes do not work on custom fields', assignee: 'Anishka Pratap ', project: 'Chain Supply', status: 'Closed' },
    { ref: 'TCK-000004', title: 'Black Friday Sales?', assignee: 'Shalini Singh', project: 'Awesome Support Core', status: 'Open' },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-amber-950">Tickets</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          + New Ticket
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex items-center gap-4 mb-4">
        <select className="p-2 border rounded-lg">
          <option>Open</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>
        <input
          type="text"
          placeholder="Search tickets..."
          className="p-2 border rounded-lg w-1/3"
        />
      </div>

      {/* Tickets Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-amber-500 text-black">
              <th className="py-2 px-4 text-left">Ref #</th>
              <th className="py-2 px-4 text-left">Ticket</th>
              <th className="py-2 px-4 text-left">Assignee</th>
              <th className="py-2 px-4 text-left">Project</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{ticket.ref}</td>
                <td className="py-2 px-4 text-blue-500 cursor-pointer hover:underline">{ticket.title}</td>
                <td className="py-2 px-4">{ticket.assignee}</td>
                <td className="py-2 px-4">{ticket.project}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 text-sm rounded-lg ${
                    ticket.status === 'Open' ? 'bg-yellow-300' :
                    ticket.status === 'Resolved' ? 'bg-green-300' : 'bg-red-500'
                  }`}>
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
