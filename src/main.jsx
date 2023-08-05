import React from "react";
import ReactDOM from "react-dom/client";
//Commponets
import { BarMenu } from "./BarMenu";
import { TargetName } from "./TargetName";
import { TargetGit } from "./TargetGit";
import { TargetCpp } from "./TargetCpp";
import { TargetPython } from "./TargetPython";
//End
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="p-1 bg-gradient-to-br to-gray-950 from-neutral-950">
    <BarMenu />
    <TargetName />
    <div className="grid grid-flow-col">
      <TargetGit />
      <TargetPython />
      <TargetCpp />
    </div>
  </div>
);
