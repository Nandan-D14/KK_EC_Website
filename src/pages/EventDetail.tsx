"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Ticket } from 'lucide-react';

const EventDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/events/id/${id}`);
        const data = await res.json();
        setEvent(data);
      } catch (e) {
        console.error(e);
      } finally { setLoading(false); }
    };
    fetchEvent();
  }, [id]);

  const register = async () => {
    if (!name || !email) { setMsg('Please provide name and email'); return; }
    try {
      const res = await fetch(`/api/events/${id}/register`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      setMsg(data.message || 'Registered successfully');
    } catch (err: any) { setMsg(err.message || 'Registration failed'); }
  };

  if (loading) return <div className="container mx-auto p-8">Loading...</div>;
  if (!event) return <div className="container mx-auto p-8">Event not found</div>;

  return (
    <div className="container mx-auto p-8">
      <button onClick={() => navigate(-1)} className="text-sm mb-4">← Back</button>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <img src={event.images?.[0] ?? `https://placehold.co/800x400?text=Event+${id}`} alt={event.title} className="w-full h-64 object-cover rounded-md" />
          <div className="mt-4">
            <Badge>{event.year}</Badge>
            <p className="mt-2 text-sm text-gray-600"><Calendar className="inline mr-2 h-4 w-4"/>{new Date(event.date).toLocaleString()}</p>
            <p className="text-sm text-gray-600"><MapPin className="inline mr-2 h-4 w-4"/>{event.location ?? 'TBD'}</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
          <p className="mb-4 text-gray-700">{event.description}</p>
          <div className="mb-4">
            <h4 className="font-semibold">Register</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="border p-2 rounded" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Button onClick={register}><Ticket className="mr-2 h-4 w-4"/>Register</Button>
            </div>
            {msg && <div className="mt-2 text-sm text-green-600">{msg}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
