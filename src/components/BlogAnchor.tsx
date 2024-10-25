"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

interface BlogT {
  title: string;
  slug: string;
  url: string;
}

const BlogAnchor = ({
  blog,
  classname,
  textval,
}: {
  blog: BlogT;
  classname: string;
  textval: string;
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
          router.push(`${blog.url} `);
        }, 10);
      }}
    >
      {textval}
    </button>
  );
};

export default BlogAnchor;
