"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/animated-grid-pattern";

export function SetupBackground() {
  return (
    <div className="relative flex h-[22rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white">
        Mi Setup
      </p>
      <GridPattern
        numSquares={100}
        maxOpacity={0.2}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
