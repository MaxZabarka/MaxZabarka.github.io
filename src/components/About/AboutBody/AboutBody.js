import React from "react";
import "./AboutBody.scss";

const AboutBody = () => {
  return (
    <div className="AboutBody">
      <h1 className="purple">About</h1>
      <h2>
        <span>Hi, I’m Max. Nice to meet you.</span> I am a designer and
        developer with a wide range of experience in various digital and
        artistic disciplines.
      </h2>
      <p>
        I am passionate about making beautiful and functional products that
        improve the lives of those around me. I have skills and experience in
        web development, 3D design, low-level systems, and various other kinds
        of software development. I’m also an athlete, photographer, advisor,
        leader, and more.
      </p>
      <p>
        I don't only define myself by the skills I have or the technologies I
        know. Skills and technologies are easy to teach. I define myself by my
        experience, problem-solving, and creativity.
      </p>
      <p>
        I am a disciplined, passionate, multi-talented human ready to take on
        your ideas, whatever they may be. What would you do if you had an expert
        at your fingertips?
      </p>

      <div className="skills">
        <div>
          <h2>Tech Skills</h2>
          <ul>
            <li>• JavaScript</li>
            <li>• ES6</li>
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• Rest APIs</li>
            <li>• Postman</li>
            <li>• Git</li>
            <li>• CSS</li>
            <li>• Python</li>
            <li>• C</li>
            <li>• x86 Assembly</li>
            <li>• React</li>
            <li>• Node.js</li>
            <li>• SCSS</li>
            <li>• Linux</li>
            <li>• Express</li>
            <li>• MongoDB</li>
            <li>• Arduino</li>
            <li>• Blender</li>
            <li>• Photoshop</li>
          </ul>
        </div>
        <div>
          <h2>Certifications/Courses</h2>
          <ul>
            <li>
              • Building a Modern Computer from First Principles Part I -
              University of Jerusalem
            </li>
            <li>
              • Building a Modern Computer from First Principles Part II -
              University of Jerusalem
            </li>
            <li>• C Programming - TBLPA</li>
            <li>• JavaScript 2021 - Academind</li>
            <li>• NodeJS 2021 - Academind</li>
            <li>• CSS 2021 - Academind</li>
            <li>• React 2021 - Academind</li>
            <li>• Multi-Sport Entry Level Competitive Coaching</li>
            <li>• First Aid and CPR</li>
          </ul>
        </div>
      </div>
      <h2>
        <span>My Philosophy</span>
      </h2>
      <p>
        I pride myself on my ability to understand how the technologies we use
        work under the hood. I don't believe in black boxes. I regularly create
        implementations or read source of the technologies I use. It's why I've
        written my own compiler, operating system, version control system,
        JavaScript framework, and more. I strongly believe, in
        general, knowing how things work under the hood makes you better at
        anything you choose to do.
      </p>
    </div>
  );
};

export default AboutBody;
