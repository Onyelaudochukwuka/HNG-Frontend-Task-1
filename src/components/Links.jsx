import React from 'react';
import { Link } from "./atom";

const links = [
  {
    id: "twitter_link",
    to: "https://twitter.com/FUMUDUKUS",
    text: "Twitter Link"
  },
  {
    id: "btn__zuri",
    to: "https://training.zuri.team/",
    text: "Zuri Team"
  },
  {
    id: "books",
    to: "http://books.zuri.team",
    text: "Zuri Books"
  },
  {
    id: "book__python",
    to: "https://books.zuri.team/python-for-beginners?ref_id=ONYELA%20UDOCHUKWUKA",
    text: "Python Books"
  },
  {
    id: "Python Books",
    to: "https://background.zuri.team",
    text: "Background Check for Coders"
  },
  {
    id: "book__design",
    to: "https://books.zuri.team/design-rules",
    text: "Design Books"
  },
  {
    id: "contact",
    to: "/contact",
    text: "Contact Me",
    internal: true
  }
];

const Links = () => {
  return (
    <div className="flex flex-col gap-6 w-full items-center">
      {
        links.map((props)=> <Link {...props} />)
        }
      </div>
  )
}

export default Links