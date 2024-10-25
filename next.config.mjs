/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source:
          "/blogpost/how-to-create-a-3d-tesla-car-configurator-with-react-nextjs-threejs-and-typescript-part-1",
        destination:
          "/blog/nextjs/how-to-create-a-3d-tesla-car-configurator-with-react-nextjs-threejs-and-typescript-part-1",
        permanent: true,
      },
      {
        source:
          "/blogpost/how-to-create-a-3d-tesla-car-configurator-with-react-nextjs-threejs-and-typescript-part-2",
        destination:
          "/blog/nextjs/how-to-create-a-3d-tesla-car-configurator-with-react-nextjs-threejs-and-typescript-part-2",
        permanent: true,
      },
      {
        source: "/blogpost/getting-started-with-nodejs",
        destination: "/blog/nodejs/getting-started-with-nodejs",
        permanent: true,
      },

      {
        source:
          "/blogpost/how-to-use-threejs-in-react-nextjs-and-typescript-a-beginners-guide",
        destination:
          "/blog/nextjs/how-to-use-threejs-in-react-nextjs-and-typescript-a-beginners-guide",
        permanent: true,
      },

      // Add more redirects here as needed
    ];
  },
  // Optionally, add any other Next.js config below
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
