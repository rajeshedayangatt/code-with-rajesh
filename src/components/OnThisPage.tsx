"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface LinkType {
  id: string;
  text: string;
  tagtype: boolean;
}
const OnThisPage = ({
  htmlContent,
  className,
}: {
  htmlContent: string;
  className: string;
}) => {
  const [links, setLinks] = useState<null | LinkType[]>(null);

  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;

    const headings = temp.querySelectorAll("h2");

    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
      let tagtype = true;
      // if (heading.tagName === "H2") {
      //   console.log("h2");
      // }

      if (heading.tagName === "H3") {
        tagtype = false;
      }
      const id = heading.id || "heading-" + index;
      const text = (heading as HTMLElement).innerText;

      generatedLinks.push({ id, text, tagtype });
    });
    setLinks(generatedLinks);
  }, [htmlContent]);
  return (
    <div className={cn("md:block", className)}>
      <div className="table_content not-prose">
        <h3 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
          TABLE OF CONTENTS
        </h3>

        {links?.map((link) => (
          <div key={link.id} className="py-2 px-3">
            <a
              href={`#${link.id}`}
              className={`hover:text-primary-600  dark:hover:text-[hsl(210deg 25% 96%)] no-underline text-[hsl(210deg 9% 40%)] ${
                link.tagtype ? "" : "pl-4 text-[12px]"
              }`}
            >
              {link.text}
            </a>
          </div>
        ))}

        {/* <ul className="not-prose text-xs">
          {links?.map((link) => (
            <li key={link.id} className="pt-1">
              <a href={`#${link.id}`}>
                {link.text.slice(0, 50)}
                {link.text.length > 50 && <span>...</span>}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default OnThisPage;
