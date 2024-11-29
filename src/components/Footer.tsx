import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>oyugijr&copy; 2024 . All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="https://github.com/oyugijr" aria-label="GitHub" target='blank'><Github /></a>
          <a href="https://www.linkedin.com/in/oyugimourirce" aria-label="LinkedIn" target='blank'><Linkedin /></a>
          <a href="https://x.com/OyugijR1" aria-label="Twitter" target='blank'><Twitter /></a>
        </div>
      </div>
    </footer>
  );