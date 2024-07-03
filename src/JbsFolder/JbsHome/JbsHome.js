import React from "react";
import FeaturedProjectjbs from "./Components/FeaturedProjectjbs/FeaturedProjectjbs";
import JbsCard from "./Components/JbsCard/JbsCard";
import JbsForm from "./Components/JbsForm/JbsForm";

export default function JbsHome() {
  return (
    <div>
      <FeaturedProjectjbs />
      <JbsCard />
      <JbsForm />
    </div>
  );
}
