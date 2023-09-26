import React from "react";
import Function2 from "./Function2";
import MyName from "./ClassComponent";
const Functional1 = () => {
  let score = 99;
  return (
    <div>
      i am a Functional1 and my score is {score}
      <Function2 score={score} />
      <MyName score={score} />
    </div>
  );
};

export default Functional1;
