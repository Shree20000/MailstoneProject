import React from "react";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import OurProject from "./OurProject/OurProject";
import StunningInteriors from "./StunningInteriors/StunningInteriors";

export default function Project() {
  return (
    <div>
      <OurProject />
      <FeaturedProject />
      <StunningInteriors />
    </div>
  );
}
