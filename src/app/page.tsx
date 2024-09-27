import React from "react";
import * as fs from "fs";
import matter from "gray-matter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Programming with rajesh",
  description: "test",
};

interface Blog {
  slug: string;
  title: string;
  content: string;
  image: string;
  description: string;
  url: string;
  tags: string[];
  time: string;
}

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map((file) => {
  const content = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(content);
  return data as Blog;
});

console.log(blogs);

export default function Home() {
  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My Random Posts
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {blogs &&
            blogs.map((blog, index) => (
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime="2024-09-01T00:00:00.000Z">
                          {blog.time}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
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
                            {blog.tags &&
                              blog.tags.map((tag: string) => (
                                <a
                                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                                  href="/tags/cryptocurrency"
                                >
                                  {tag}
                                </a>
                              ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          Discover how Elevate provides global USD accounts for
                          freelancers and remote workers worldwide
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label='Read more: "Elevate: Global USD Accounts for Freelancers and Digital Nomads"'
                          href={`blogpost/${blog.slug} `}
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex justify-end text-base font-medium leading-6">
        <a
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="All posts"
          href="/blog"
        >
          All Posts →
        </a>
      </div>
    </main>
  );
}
