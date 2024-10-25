import { tags } from "@/config/tags";
import Link from "next/link";
import React from "react";

const PostTags = () => {
  return (
    <ul>
      {tags &&
        tags.map((tag) => (
          <li className="my-3" key={tag.id}>
            <Link
              className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
              aria-label="View posts tagged Next Js"
              href={`/blog/${tag.title}`}
            >
              {tag.title} ({tag.postcount})
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default PostTags;
