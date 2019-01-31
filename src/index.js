import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Are you sure?</h4>
        </div>
      </ApprovalCard>
      {/*Components are exempt from needing curly braces*/}
      <ApprovalCard>
      <CommentDetail
        author="Nathan"
        timeAgo="Today at 4:45PM"
        content="True"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Isaac"
        timeAgo="Yesterday at 11:35PM"
        content="I didn't read it"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Adam"
        timeAgo="Thursday at 9:03AM"
        content="this is an offhand comment"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
