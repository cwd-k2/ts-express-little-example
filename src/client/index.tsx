import * as React    from "react";
import * as ReactDOM from "react-dom";

import "./index.scss";

class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById("root")
);
