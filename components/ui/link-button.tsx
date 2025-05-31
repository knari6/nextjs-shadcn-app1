import Link from "next/link";
import React from "react";
import { Button } from "./button";

const LinkButton = ({ label }: { label: string }) => {
  return (
    <Button asChild>
      <Link href="/login">{label}</Link>
    </Button>
  );
};

export default LinkButton;
