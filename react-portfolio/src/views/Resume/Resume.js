import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Oliver Dirker</h2>
          <ul>
            <li>Front-End:</li>
            <li>HTML, CSS, JavaScript, jQuery,</li>
          </ul>

          <p class="mt-5">Linkedin:
            <a href="https://www.linkedin.com/in/oliver-dirker-4210b2239/">Oliver Dirker</a>
          </p>
          <p class="mt-5">Github
            <a href="https://github.com/olliedirker">olliedirker</a>
          </p>

          <a
            href="add my resume website"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
              SDL Tridion, Adobe Experience Manager (6.5, As a cloud Service),
              C#.NET, ASP.NET, JAVA,
              <br />
              HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js,
              IndexedDB,
              <br />
              Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL,
              APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;