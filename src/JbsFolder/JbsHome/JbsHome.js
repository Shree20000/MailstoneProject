import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const JbsTopHomePage = lazy(() => import("./JbsTopHomePage/JbsTopHomePage"));
const FeaturedProjectjbs = lazy(() =>
  import("./Components/FeaturedProjectjbs/FeaturedProjectjbs")
);
const JbsCard = lazy(() => import("./Components/JbsCard/JbsCard"));
const JbsForm = lazy(() => import("./Components/JbsForm/JbsForm"));

const JbsHome = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about-us") {
      setTimeout(() => {
        const aboutUsSection = document.getElementById("about-us");
        if (aboutUsSection) {
          aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <JbsTopHomePage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProjectjbs />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <JbsCard />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <JbsForm />
      </Suspense>
    </>
  );
};

export default JbsHome;
