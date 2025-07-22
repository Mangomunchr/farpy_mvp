import React from 'react';
import ReactMarkdown from 'react-markdown';
import content from '../content/About.md?raw';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="prose mx-auto p-8 text-noxo-primary max-w-3xl">
      <ReactMarkdown>{content}</ReactMarkdown>
      <div className="mt-6 flex gap-4">
        <Link to="/login" className="text-noxo-accent underline">Login</Link>
        <Link to="/codex" className="text-noxo-accent underline">Codex</Link>
        <Link to="/dashboard" className="text-noxo-accent underline">Dashboard</Link>
      </div>
    </div>
  );
}
