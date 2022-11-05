import React from "react";
import { Links, Profile, Socials } from "../components";

const Home = () => (
    <section className="px-6 flex flex-col items-center py-8 gap-8">
      <Profile />
      <Links />
      <Socials />
    </section>
);
export default Home;
