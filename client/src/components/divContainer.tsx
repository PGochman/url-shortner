import { ReactElement, ReactNode } from "react";
import { Children } from "@/utils/types";

export default function DivContainer({children}: Children) {
  return <div className={`flex flex-col w-3/5 mx-auto mt-20 bg-background-2`}>
    {children}
  </div>;
}
