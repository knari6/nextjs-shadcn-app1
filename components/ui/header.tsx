import clsx from "clsx";
import React from "react";
import { Button } from "./button";

const Header = () => {
  return (
    <header
      className={clsx(
        "border",
        "border-solid",
        "border-black-300",
        "gap-3",
        "flex",
        "p-3"
      )}
    >
      <div className={clsx("ml-auto")}>
        <Button variant={"ghost"}>ログイン</Button>
        <Button variant={"outline"}>新規登録</Button>
      </div>
    </header>
  );
};

export default Header;
