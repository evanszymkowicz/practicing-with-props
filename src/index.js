import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      {/*Components are exempt from needing curly braces*/}
      <CommentDetail />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
