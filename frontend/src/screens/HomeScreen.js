import React, { useRef } from "react";
import Carousel from "../homepages/Carousel";
import exportAsImage from "../utils/exportAsImage";

function HomeScreen() {
  const exportRef = useRef();
  return (
    <>
      <div className="pt-4 px-24" ref={exportRef}>
        <Carousel />
        <button onClick={() => exportAsImage(exportRef.current, "test")}>
          Capture Image
        </button>
      </div>
    </>
  );
}

export default HomeScreen;
