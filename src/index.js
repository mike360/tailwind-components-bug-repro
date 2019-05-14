import React from "react";
import { render } from "react-dom";
import Button from "./Button";

render(
  <div>
    Hello World! <Button>Hey</Button>
  </div>,
  document.getElementById("root")
);
