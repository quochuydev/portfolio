import React from "react";

export default function Header() {
  return (
    <header className="mx-auto max-w-4xl">
      <div className="sticky py-6 mb-6">
        <div className="container flex justify-between">
          <a href="#" className="uppercase font-bold">
            quochuydev
          </a>
          <div className="flex space-x-4">
            <a href="#blog">Blog</a>
          </div>
        </div>
      </div>
    </header>
  );
}
