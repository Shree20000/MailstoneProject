import React from "react";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import OurProject from "./OurProject/OurProject";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Project() {
  return (
    <div>
      <OurProject />
      <FeaturedProject />
      <ProjectCard />
    </div>
  );
}
