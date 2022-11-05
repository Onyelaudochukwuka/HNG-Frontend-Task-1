import  React from 'react';
import { Github, Slack } from "../assets/icon";

const Socials = (props) => {
  return (
    <div className="flex gap-3">
      <Slack className="w-6 h-6" />
      <a href="https://github.com/Onyelaudochukwuka">
        <Github className="w-6 h-6" />
      </a>
    </div>
  );
}
export default Socials;