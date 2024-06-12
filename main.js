import React from "react";

import Top_header from './top_header';
import Bottom_header from './bottom_header';
import Main_top from './main_top';
import Main_bottom from './main_bottom';


function Main() {
  return (
    <>
    <div className="main">
      <Top_header />
      <Bottom_header />
      <Main_top />
      <Main_bottom />
    </div>
    </>
  );
}

export default Main;