import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-screen mx-auto overflow-hidden px-10 py-10 md:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
