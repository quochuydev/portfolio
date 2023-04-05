import React from "react";

export default function TechnicalSkills() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Technical skills</h2>

      <table>
        <tr>
          <td>
            <p>Programming languages</p>
          </td>
          <td>
            <p className="font-bold">
              JavaScript, NodeJS, ReactJS, Typescript{" "}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Database, Storage, Broker</p>
          </td>
          <td>
            <p className="font-bold">
              MongoDB, MySQL, PostgreSQL, Elastic Search, RabbitMQ, NATs{" "}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Framework/Libraries/Platform </p>
          </td>
          <td>
            <p className="font-bold">
              Express.JS, Nest.JS, Redux, Jest, Playwright{" "}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Server/DevOps/Cloud</p>
          </td>
          <td>
            <p className="font-bold">Linux, Docker, Google Cloud Platform</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{`Methodologies & Tools`}</p>
          </td>
          <td>
            <p className="font-bold">
              Git, Github, Gitlab, VSCode, Offices, Miro{" "}
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
