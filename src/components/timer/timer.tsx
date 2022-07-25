import React, { useEffect } from "react";
import { FC } from "react";
import "./timer.less";
interface Props {}

const Timer: FC<Props> = () => {
  useEffect(() => {
    console.log("1");
  }, []);
  return <div className={"timer flex"}>timer</div>;
};

export default Timer;
