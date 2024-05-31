import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl mt-16">
      <div className="container flex justify-between">
        <p>Built with Next.js, Tailwind</p>
        <div className="flex space-x-4">
          <a href="https://github.com/quochuydev">Github</a>
          <a href="https://www.instagram.com/huyphamdev/">Instagram</a>
          <a href="https://www.linkedin.com/in/quochuydev/">Linkedin</a>
        </div>
      </div>
    </footer>
  );
}
