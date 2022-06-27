import React, {useEffect, useRef, useState} from "react";
import request from "umi-request";

const App = () => {
  const ref = useRef(0);
  const [count, setCount] = useState({});
  console.log("render app");

  const createDeepCompareEffect = (hook) => (effect, deps) => {
    hook(effect, [deps]);
  };
  useEffect(() => {
    console.log("render====");
    request
      .post("/api3/test", {
        data: {},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [count]);
  createDeepCompareEffect(useEffect)(() => {
    console.log(1);
  }, [{}]);
  return (
    <h1>
      <div>
        <button
          onClick={() => {
            console.log("click=====", ref.current);
            setCount({});
          }}
        >
          click
        </button>
      </div>
      React App
    </h1>
  );
};
export default App;
