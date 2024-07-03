import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";

const JbsTopHomePage = lazy(() => import("./JbsTopHomePage/JbsTopHomePage"));
const FeaturedProjectjbs = lazy(() =>
  import("./Components/FeaturedProjectjbs/FeaturedProjectjbs")
);
const JbsCard = lazy(() => import("./Components/JbsCard/JbsCard"));
const JbsForm = lazy(() => import("./Components/JbsForm/JbsForm"));

const JbsHome = () => {
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
