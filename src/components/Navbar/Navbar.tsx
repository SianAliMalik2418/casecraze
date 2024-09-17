import React from "react";
import MaxWidthWrapper from "../utils/MaxWidthWrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-20 border-b border-zinc-700 bg-background backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="h-full py-4">
        <div className="flex h-full w-full items-center justify-between">
          <Link href={"/"} className="text-xl font-bold text-white md:text-3xl">
            case<span className="text-primary">craze</span>
          </Link>

          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center gap-3">
              <Button variant={"ghost"} asChild>
                <Link
                  href={"/login"}
                  className="text-sm font-semibold text-white md:text-base"
                >
                  Login
                </Link>
              </Button>

              <Button variant={"ghost"} asChild>
                <Link
                  href={"/sign-up"}
                  className="text-sm font-semibold md:text-base"
                >
                  Sign Up
                </Link>
              </Button>
            </div>

            <div className="hidden gap-10 lg:flex">
              <Separator className="h-10 text-white" orientation="vertical" />
              <Button>
                Create Case <ArrowRight color="white" className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
