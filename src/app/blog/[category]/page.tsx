import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { commonPageMetadata } from "@/config/site";
import PostTags from "@/components/PostTags";
import * as fs from "fs";
import path from "path";

import matter from "gray-matter";
import { BlogType } from "@/config/types";

export const metadata: Metadata = commonPageMetadata;
function fetchBlogs(category: string) {
  const postsDirectory = path.join(process.cwd(), "content", category);

  const dirContent = fs.readdirSync(postsDirectory, "utf-8");

  const blogs = dirContent.map((file) => {
    const postsDirectory = path.join(process.cwd(), "content", category, file);

    const content = fs.readFileSync(postsDirectory, "utf-8");

    // console.log(content);

    const { data } = matter(content);
    return data as BlogType;
  });

  return blogs;
}

const BlogList = ({ params }: { params: { category: string } }) => {
  const data = fetchBlogs(params.category);
  const blogs = data;
  return (
    <main className="mb-auto">
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              <h3 className="font-bold uppercase text-primary-500">
                All Posts
              </h3>
              <PostTags />
            </div>
          </div>
          <div>
            <ul>
              {blogs &&
                blogs.map((blog, index) => (
                  <li className="py-5" key={index}>
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime="2024-09-01T00:00:00.000Z">
                            {blog.time}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              className="text-gray-900 dark:text-gray-100"
                              href={`${blog.url} `}
                            >
                              {blog.title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {blog.tags &&
                              blog.tags.map((tag: string) => (
                                <a
                                  key={tag}
                                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                                  href="#"
                                >
                                  {tag}
                                </a>
                              ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {blog.blogintro}
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
            </ul>
            {blogs.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400">
                No posts found.
              </p>
            )}
            {/* <div className="space-y-2 pb-8 pt-6 md:space-y-5">
              <nav className="flex justify-between">
                <button
                  className="cursor-auto disabled:opacity-50"
                  disabled={false}
                >
                  Previous
                </button>
                <span>1 of 2</span>
                <a className="break-words" rel="next" href="/blog/page/2">
                  Next
                </a>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogList;
