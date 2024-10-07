import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function fetchBlogs(category: string) {
//   const postsDirectory = path.join(process.cwd(), "content", category);

//   const dirContent = fs.readdirSync(postsDirectory, "utf-8");

//   const blogs = dirContent.map((file) => {
//     const postsDirectory = path.join(process.cwd(), "content", category, file);

//     const content = fs.readFileSync(postsDirectory, "utf-8");

//     // console.log(content);

//     const { data } = matter(content);
//     return data as BlogType;
//   });

//   return blogs;
// }
