import classnames from "classnames";
import React, { useEffect } from "react";
import { FC } from "react";
import s from "./timer.less";
interface Props {}

const Timer: FC<Props> = () => {
  useEffect(() => {
    console.log("1");
  }, []);
  return <div className={classnames("flex", s.timer)}>timer</div>;
};

export default Timer;
