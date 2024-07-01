import React, { Suspense, lazy } from "react";
import Footer from "../GlobalComponent/Footer/Footer";

const MordernHouse = lazy(() =>
  import("./Components/MordernHouse/MordernHouse")
);
const OurService = lazy(() => import("./Components/OurService/OurService"));
const CardPage = lazy(() => import("./Components/CardPage/CardPage"));
const Commercial = lazy(() => import("./Components/Commercial/Commercial"));

export default function Service() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MordernHouse />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OurService />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CardPage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Commercial />
      </Suspense>
      <Footer />
    </div>
  );
}
