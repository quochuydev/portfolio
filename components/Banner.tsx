/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/2 lg:w-3/5 md:h-128">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">{`Hi there, I'm Huy Pham`}</h1>

          <div className="text-gray-800">
            <p>
              Learning new languages and technologies is what I am passionate
              about.
            </p>
            <p>------</p>
            <p>
              With passion in learning language and having a good software
              knowledge, I want to become a Senior Software Engineer.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:h-64 md:w-1/2 lg:w-2/5">
        <img
          className="h-full w-full md:w-auto object-cover float-right"
          // src={"./avatar.jpg"}
          src={"#"}
          alt="avatar"
        />
      </div>
    </div>
  );
}
