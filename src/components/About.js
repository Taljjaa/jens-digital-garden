import React from "react"
import { Link } from "gatsby"
import Emoji from "./Emoji"

const About = () => {
  return (
    <>
      <h1 className="text-3xl mb-5 text-green-900 dark:text-green-400">
        Hello and welcome to my digital garden!{" "}
        <Emoji symbol="👩‍🌾" label="farmer emoji" />
      </h1>
      <p className="mb-5">
        My name is Jen Kennedy and I'm a frontend developer. I currently live in
        Seattle, WA <Emoji symbol="🌲" label="pine tree emoji" />! I love
        frontend development and enjoy working on interesting products with
        unique challenge. Making designs and features come to life is my
        favorite part. Some of my favorite technologies are React, TypeScript,
        GraphQL, and Redux. I also enjoy leveling up my skills in CSS and
        testing. When I'm not programming I enjoy playing with my dog, reading
        manga, teaching myself Japanese, and playing video games. And to learn
        more about me, feel free to read my{" "}
        <Link
          className="linkUnderline dark:darkUnderline"
          to="/blog/my-journey-into-tech"
        >
          article about my journey into tech
        </Link>{" "}
        or{" "}
        <Link
          className="linkUnderline dark:darkUnderline"
          to="https://docs.google.com/document/d/1jg6qBShEtZ4OMEPJe33Pr2EEyi7ctY4AkveQI9DGIpg/edit?usp=sharing"
        >
          check out my resume.
        </Link>
      </p>
      <p className="mb-5">
        This digital garden is a place where I can take notes, share what I'm
        learning, and document my programming progress. The articles here are
        either finished (
        <Emoji symbol="🌻" label="sunflower emoji" />
        ), or in progress (
        <Emoji symbol="👩‍🌾" label="farmer emoji" />) and are being pruned and
        updated as I learn more! Check out my{" "}
        <Link
          className="linkUnderline dark:darkUnderline"
          to="/blog/digital-garden"
        >
          article about digital gardens
        </Link>
        !
      </p>
    </>
  )
}

export default About
