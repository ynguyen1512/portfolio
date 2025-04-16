"use client";

import { navItems } from "@/data";

import Experience from "@/components/Experience";
import Footer2 from "@/components/Footer2";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <TechStack />
      <RecentProjects />
      <Experience />
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
};

export default Home;
