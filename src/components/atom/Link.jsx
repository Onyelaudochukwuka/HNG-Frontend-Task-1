import React from "react";
import { Link as LinkTo } from "react-router-dom";
const Link = ({ to, text, id, internal }) => {
  return (
    <>
      {internal ? (
        <a
          href={to}
          className="bg-primary hover:bg-gray-300 ease-in transition-colors duration-500  lg:w-3/4 w-full  px-6 py-4 text-center font-medium block cursor-pointer rounded-lg"
          id={id}
        >
          {text}
        </a>
      ) : (
        <LinkTo
          to={to}
          className="bg-primary hover:bg-gray-300 ease-in transition-colors duration-500  lg:w-3/4 w-full  px-6 py-4 text-center font-medium block cursor-pointer rounded-lg"
          id={id}
        >
          {text}
        </LinkTo>
      )}
    </>
  );
};
export default Link;
