"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface LinkType {
  id: string;
  text: string;
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

    const headings = temp.querySelectorAll("h2, h3");

    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || "heading-" + index;
      const text = (heading as HTMLElement).innerText;
      generatedLinks.push({ id, text });
    });
    setLinks(generatedLinks);
  }, [htmlContent]);
  return (
    <div className={cn("hidden md:block", className)}>
      <div className=" ">
        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          On this page
        </h2>

        {links?.map((link) => (
          <div>
            <a
              href={`#${link.id}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {link.text.slice(0, 50)}
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
