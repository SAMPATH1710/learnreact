import React from "react";
import Sidebar1 from "./Sidebar1";
import Body from "./Body";
import Sidebar2 from "./Sidebar2";
const MainBody = () => {
  return (
    <div className="bodymain_1">
      <Sidebar1 />
      <Body />
      <Sidebar2 />
    </div>
  );
};

export default MainBody;
