import React from "react";
import { Footer, Links, Profile, Socials } from "../components";

const Home = () => (
    <section className="px-6 flex flex-col items-center py-8 gap-8">
      <Profile />
      <Links />
    <Socials />
    <Footer />
    </section>
);
export default Home;
