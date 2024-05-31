import React from "react";

export default function PersonalProjects() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">Experience projects</h2>

      <div className="mt-4">
        <h3 className="font-bold">{"1. BidBid - Dating app"}</h3>

        <ul className="mt-2">
          <li>- Manage tasks, estimate tasks and daily meeting with team.</li>
          <li>- Develop and provide API for Mobile App and Web App.</li>
          <li>
            {`- Design and implement backend services, scale up with microservices.`}
          </li>
          <li>
            {`- Build/deploy application, manage production server and client's accounts.`}
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3>
          <span className="font-bold">
            {"2. GarrioCOM - Germany health care product "}
          </span>
          <a href="https://garrio.de/" target="_blank" rel="noreferrer">
            (https://garrio.de/)
          </a>
        </h3>
        <ul className="mt-2">
          <li>{`- Daily meetings with the team and Product Manager in Germany.`}</li>
          <li>{`- Implement application’s features.`}</li>
        </ul>
      </div>
    </div>
  );
}
