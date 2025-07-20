
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function SubmitJob() {
  const { session } = useAuth();
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async () => {
    if (!input) return alert('Enter a job prompt or description.');
    setSubmitting(true);

    const { error } = await supabase.from('jobs').insert({
      user_id: session.user.id,
      input,
      priority,
      status: 'pending'
    });

    setSubmitting(false);
    if (error) {
      alert('Failed to submit job.');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-black text-noxo-primary border border-noxo-accent rounded">
      <h1 className="text-xl font-bold mb-4">🎯 Submit Render Job</h1>

      {submitted ? (
        <p className="text-green-400">✅ Job submitted! You’ll be notified when complete.</p>
      ) : (
        <>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Describe your render request or input prompt"
            rows={4}
            className="w-full p-3 mb-4 bg-[#111] text-sm border border-noxo-accent rounded"
          />

          <label className="block text-sm mb-1">Priority (faster = more Coolbeans)</label>
          <select
            value={priority}
            onChange={e => setPriority(+e.target.value)}
            className="w-full mb-4 p-2 rounded bg-[#111] text-sm border border-noxo-accent"
          >
            <option value={1}>1x - Standard</option>
            <option value={5}>5x - Fast</option>
            <option value={10}>10x - Premium</option>
          </select>

          <button
            disabled={submitting}
            onClick={submit}
            className="bg-noxo-accent text-black px-4 py-2 rounded text-sm"
          >
            {submitting ? 'Submitting...' : 'Submit Job'}
          </button>
        </>
      )}
    </div>
  );
}
