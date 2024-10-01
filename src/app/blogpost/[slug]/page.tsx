import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import matter from "gray-matter";
import * as fs from "fs";
import OnThisPage from "@/components/OnThisPage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import type { Metadata } from "next";
import path from "path";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import AccordianDemo from "@/components/AccordianDemo";
import Link from "next/link";
// import { event } from "@/components/GoogleAnalytics";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const processor = unified()
    // Take Markdown as input and turn it into MD syntax tree
    .use(remarkParse)
    // Add support for frontmatter in Markdown
    .use(remarkFrontmatter, ["yaml"])
    // Prase and validate Markdown frontmatter (YAML)
    .use(remarkParseFrontmatter)
    // Switch from MD syntax tree to HTML syntax tree (remakr -> rehype)
    .use(remarkRehype, {
      // Necessary for support HTML embeds (see next plugin)
      allowDangerousHtml: true,
    })
    .use(rehypePrettyCode, {
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    // Support HTML embedded inside markdown
    .use(rehypeRaw)
    // Improve code highlighting
    .use(rehypeHighlight)
    // Serialize syntax tree to HTML
    .use(rehypeStringify)

    .use(rehypeSlug)

    .use(rehypeAutolinkHeadings);

  // And finally, process the input
  //.processSync("# test");

  const filePath = path.join(process.cwd(), "content", params.slug + ".mdx");

  // const filePath = `content/${params.slug}.md`;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <AnalyticsEvents title={data.title as string} />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime="2024-09-01T00:00:00.000Z">{data.time}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl dark:text-gray-100">
                  {data.title}
                </h1>
              </div>
            </div>
          </header>

          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pb-8 pt-10">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                <AccordianDemo faq={data.faq} />
              </div>
            </div>

            <footer className="sticky top-20">
              <div className="divide-gray-200 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y dark:divide-gray-700">
                {/* <div className="py-4 xl:py-8">
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Tags
                  </h2>
                  <div className="flex flex-wrap">
                    {data.tags &&
                      data.tags.map((tag: string) => (
                        <a
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href={`/blogpost/${data.slug} `}
                        >
                          {tag}
                        </a>
                      ))}
                  </div>
                </div> */}
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-20">
                  <div>
                    <OnThisPage
                      htmlContent={htmlContent}
                      className="text-sm w-[100%]"
                    />
                    <div className="pt-4 xl:pt-8">
                      <Link
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="Back to the blog"
                        href="/blog"
                      >
                        {" "}
                        ← Back to the blog
                      </Link>
                    </div>
                    {/* <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Previous Article
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <a className="break-words" href="/blog/payoneer">
                        Payoneer: Your Gateway to Global Financial Transactions
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
      {/* <div className=" flex">
        <div className="px-16">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
        <OnThisPage htmlContent={htmlContent} className="text-sm w-[50%]" />
      </div> */}
    </MaxWidthWrapper>
  );
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params

  const filePath = `content/${params.slug}.mdx`;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
  };
}
