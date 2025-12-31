"use client";
import { useState, useEffect } from 'react';
import { Download, Lock, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simple "Hardcoded" Security for MVP
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "novus123") { // CHANGE THIS PASSWORD!
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert("Wrong Password");
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  // Excel/CSV Export Function
  const downloadCSV = () => {
    const headers = ["Name,Email,Message,Date,IP\n"];
    const csv = leads.map(lead => {
      return `"${lead.name}","${lead.email}","${lead.message.replace(/"/g, '""')}","${new Date(lead.createdAt).toLocaleDateString()}","${lead.ip || ''}"`;
    });
    
    const blob = new Blob([...headers, ...csv.join("\n")], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `novus-leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <form onSubmit={handleLogin} className="glass-card p-10 rounded-2xl flex flex-col gap-4 w-80">
          <div className="mx-auto bg-white/10 p-4 rounded-full mb-2">
            <Lock className="text-secondary" size={32} />
          </div>
          <h2 className="text-center text-xl font-bold text-white mb-4">Admin Access</h2>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-black/50 border border-white/20 p-3 rounded-lg text-white focus:outline-none focus:border-secondary"
            placeholder="Enter PIN"
          />
          <button type="submit" className="bg-secondary text-black font-bold py-3 rounded-lg hover:scale-105 transition">
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Leads <span className="text-secondary">Dashboard</span></h1>
          <button 
            onClick={downloadCSV}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            <Download size={20} /> Download Excel
          </button>
        </div>

        <div className="glass-card rounded-xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 text-gray-400 uppercase text-sm">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">IP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {leads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-white/5 transition">
                    <td className="p-4 text-gray-400 whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 font-bold text-white">{lead.name}</td>
                    <td className="p-4 text-secondary">{lead.email}</td>
                    <td className="p-4 text-gray-300 max-w-md truncate">{lead.message}</td>
                    <td className="p-4 text-gray-500 text-xs font-mono">{lead.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {leads.length === 0 && (
              <div className="p-8 text-center text-gray-500">No leads found yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}