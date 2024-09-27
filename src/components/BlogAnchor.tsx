"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

const BlogAnchor = ({
  blog,
  classname,
  textval,
}: {
  blog: any;
  classname: string;
  textval: String;
}) => {
  const router = useRouter();

  return (
    <button
      className={cn(classname, "")}
      aria-label={`Read more:"${blog.title}"`}
      //   href={`blogpost/${blog.slug} `}
      onClick={() => {
        sendGAEvent("event", "buttonClicked", { value: blog.title });
        setTimeout(() => {
          router.push(`blogpost/${blog.slug} `);
        }, 10);
      }}
    >
      {textval}
    </button>
  );
};

export default BlogAnchor;