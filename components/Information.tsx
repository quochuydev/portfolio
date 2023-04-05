import React from "react";

export default function Information() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Information</h2>

      <div className="flex">
        <div className="w-full">
          <p>
            Birthday: <span className="font-bold">April 05, 1998</span>
          </p>
          <p>
            Location:{" "}
            <span className="font-bold">Ho Chi Minh city, Vietnam</span>
          </p>
          <p>
            Study/Degree:{" "}
            <span className="font-bold">
              Vocation training college - 3.74/4
            </span>
          </p>
        </div>
        <div className="w-full">
          <p>
            Mail: <span className="font-bold">quochuy.dev@gmail.com</span>
          </p>
          <p>
            Skype: <span className="font-bold">quochuy.dev</span>
          </p>
          <p>
            Github:{" "}
            <a className="font-bold" href="https://github.com/quochuydev">
              https://github.com/quochuydev
            </a>
          </p>
          <p>
            Linkedin:{" "}
            <a
              className="font-bold"
              href="https://www.linkedin.com/in/quochuydev/"
            >
              https://www.linkedin.com/in/quochuydev/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
