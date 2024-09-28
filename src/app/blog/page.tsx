import React from "react";
import * as fs from "fs";
import matter from "gray-matter";
import type { Metadata } from "next";
import path from "path";

export const metadata: Metadata = {
  title: "CodeWithRajesh Blog | React, Node.js, Next.js, and Tailwind Articles",
  description:
    "Browse the latest tutorials and articles on React, Node.js, Next.js, and Tailwind. Stay updated with practical guides, coding tips, and full-stack development resources at CodeWithRajesh.",
};

interface Blog {
  slug: string;
  title: string;
  content: string;
  image: string;
  description: string;
  url: string;
  time: string;
}

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map((file) => {
  const postsDirectory = path.join(process.cwd(), "content", file);

  const content = fs.readFileSync(postsDirectory, "utf-8");

  console.log(content);

  const { data } = matter(content);
  return data as Blog;
});

const BlogList = () => {
  return (
    <main className="mb-auto">
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          {/* <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              <h3 className="font-bold uppercase text-primary-500">
                All Posts
              </h3>
              <ul>
                <li className="my-3">
                  <a
                    className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                    aria-label="View posts tagged cryptocurrency"
                    href="/tags/cryptocurrency"
                  >
                    cryptocurrency (2)
                  </a>
                </li>
                <li className="my-3">
                  <a
                    className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                    aria-label="View posts tagged finance"
                    href="/tags/finance"
                  >
                    finance (2)
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
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
                            <a
                              className="text-gray-900 dark:text-gray-100"
                              href={`blogpost/${blog.slug} `}
                            >
                              {blog.title}
                            </a>
                          </h2>
                          <div className="flex flex-wrap">
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/finance"
                            >
                              finance
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/freelancing"
                            >
                              freelancing
                            </a>
                            <a
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/remote-work"
                            >
                              remote-work
                            </a>
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {blog.description}
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
            </ul>
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
