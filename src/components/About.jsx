import React from 'react';
import ReactMarkdown from 'react-markdown';
import content from '../content/About.md?raw';

export default function About() {
  return (
    <div className="prose mx-auto p-8 text-noxo-primary max-w-3xl">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
