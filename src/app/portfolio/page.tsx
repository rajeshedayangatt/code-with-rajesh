import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio CodeWithRajesh | Web Development Tutorials by Rajesh",
  description:
    "Discover the journey behind CodeWithRajesh. Learn how Rajesh, a seasoned web developer, shares his expertise in React, Node.js, Next.js, and Tailwind, helping developers enhance their skills with clear, practical tutorials.",
};

export default function Page() {
  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl dark:text-gray-100">
            Portfolio
          </h1>
        </div>
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">My Work</h1>
            {/* <p className="text-lg text-gray-600">
              Flowbite helps you connect with friends, family, and communities
              of people who share your interests.
            </p> */}
          </div>


          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="images/track.png"
                  alt="Project Image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Job tracking Application
                </h2>
                <p className="text-gray-600 mb-4">
                  Developed a fullstack web application for tracking job applications , Managing documents and Generating AI Resumes.

                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h3>
                  <ul className="flex space-x-4">
                    <li className="text-blue-600">React</li>
                    <li className="text-blue-600">Node JS</li>
                    <li className="text-blue-600">Redux</li>
                    <li className="text-blue-600">Mysql</li>
                    <li className="text-blue-600">TypeScript</li>

                  </ul>
                </div>
                <div className="flex space-x-4">
           
                  <a
                    href="https://indianjobtracker.xyz/"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="images/1716484242775.jpg"
                  alt="Project Image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Affinity Bands - Custom Product Personalization
                </h2>
                <p className="text-gray-600 mb-4">
                  Developed a 3D customization tool using Three.js, Fabric JS
                  and React, allowing users to personalize products with
                  real-time previews. Designed a user-friendly interface that
                  seamlessly integrates 3D components, enhancing the user
                  experience. Implemented optimization techniques to ensure
                  smooth rendering and interaction within the 3D environment.
                  Integrated with a PHP backend to fetch product data and
                  customization options, ensuring dynamic content updates and
                  real-time personalization.
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h3>
                  <ul className="flex space-x-4">
                    <li className="text-blue-600">React</li>
                    <li className="text-blue-600">Three JS</li>
                    <li className="text-blue-600">Zustand</li>
                    <li className="text-blue-600">Fabric JS</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://www.youtube.com/watch?v=sP96ySKzG3I"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://3dshop.affinitybands.com/"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Victor&apos;s Home Solutions
                </h2>
                <p className="text-gray-600 mb-4">
                  Developed a dynamic, responsive front-end using React.js,
                  improving user experience for service bookings and roof
                  inspections. ● Built and maintained a robust backend API with
                  Node.js and Express, ensuring effi cient data handling and
                  seamless client-server communication. ● Designed and optimized
                  a MySQL database for managing customer information, service
                  requests, and operational data
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h3>
                  <ul className="flex space-x-4">
                    <li className="text-blue-600">React JS</li>
                    <li className="text-blue-600">Next JS</li>
                    <li className="text-blue-600">Node JS</li>
                    <li className="text-blue-600">Mysql</li>
                    <li className="text-blue-600">Redux</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://victors-ssr.thetunagroup.com/"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                  >
                    View SSR Website
                  </a>
                  <a
                    href="https://victors.thetunagroup.com/"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div>
                <img
                  src="images/Screenshot 2024-11-13 135008.png"
                  alt="Project Image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="images/Screenshot 2024-11-13 135447.png"
                  alt="Project Image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  1SimplePhone
                </h2>
                <p className="text-gray-600 mb-4">
                  1SimplePhone offers a Business Class VoIP phone service aimed
                  at simplifying business communications with cost-eff ective,
                  feature-rich solutions. Developed and implemented real-time
                  messaging features for individual users and group chats using
                  Socket.io. Created backend services with Node.js and
                  Express.js to support chat functionalities.. Managed user data
                  and message history through a MySQL database.
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h3>
                  <ul className="flex space-x-4">
                    <li className="text-blue-600">NodeJs</li>
                    <li className="text-blue-600">Mysql</li>
                    <li className="text-blue-600">Socket Io</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  {/* <a
                    href="https://www.youtube.com/watch?v=sP96ySKzG3I"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                  >
                    View Demo
                  </a> */}
                  <a
                    href="https://1simplephone.com/"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  MGM Resorts
                </h2>
                <p className="text-gray-600 mb-4">
                  MGM Resorts provides a platform for visitors to explore hotel
                  routes and areas, enhancing navigation and providing detailed
                  information about various hotel features.. Developed
                  interactive 3D maps using Three.js to enable visitors to
                  navigate between hotels and explore internal areas with
                  detailed information. Enhanced user experience by implementing
                  interactive elements that allow users to access detailed
                  information about routes and hotel features.
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h3>
                  <ul className="flex space-x-4">
                    <li className="text-blue-600">React JS</li>
                    <li className="text-blue-600">Three JS</li>
                    <li className="text-blue-600">Redux</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  {/* <a
                    href="#"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                  >
                    View Case Study
                  </a> */}
                  <a
                    href="https://mgmresorts.thetunagroup.com/"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div>
                <img
                  src="images/Screenshot 2024-11-13 142703.png"
                  alt="Project Image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="images/1707545910330.jpg"
                  alt="Project Image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  AT & T Fiber Experience
                </h2>
                <p className="text-gray-600 mb-4">
                  Interactive game user experience for finding AT & T Fiber
                  products in 3 rooms. In each rooms user can search products in
                  a specific time
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h3>
                  <ul className="flex space-x-4">
                    <li className="text-blue-600">Three JS</li>
                    <li className="text-blue-600">Javascript</li>
                    <li className="text-blue-600">Css</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  {/* <a
                    href="https://www.youtube.com/watch?v=sP96ySKzG3I"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                  >
                    View Demo
                  </a> */}
                  <a
                    href="https://attfiber.boom-api.com/"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Atlantis The Royal - The Royal Unveiling
                </h2>
                <p className="text-gray-600 mb-4">
                  An interactive 3D Card Invitation for Royal Atlantis Hotel
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h3>
                  <ul className="flex space-x-4">
                    <li className="text-blue-600">React Js</li>
                    <li className="text-blue-600">Three JS</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  {/* <a
                    href="#"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                  >
                    View Case Study
                  </a> */}
                  <a
                    href="https://3jsdemo.thetunagroup.com/"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div>
                <img
                  src="images/Screenshot 2024-11-13 144340.png"
                  alt="Project Image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="images/Screenshot 2024-11-13 144847.png"
                  alt="Project Image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Thermatru Doors Virtual Experience
                </h2>
                <p className="text-gray-600 mb-4">
                  The 2023 Therma-Tru & Fypon Virtual Experience will feature
                  new and existing products, styles and trends in a fully
                  immersive, innovative environment. The virtual experience will
                  explore Therma-Tru’s 2023 collection of innovative products
                  and current home aesthetic trends, as well as visit the
                  reimagined Classic Craft premium series of doors. The
                  Navigable 3D World is an immersive and interactive experience
                  built using Three.js and React.js, allowing users to explore a
                  captivating three-dimensional environment. This project was
                  developed with the aim of providing an engaging and seamless
                  3D navigation experience for users.
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h3>
                  <ul className="flex space-x-4">
                    <li className="text-blue-600">Three JS</li>
                    <li className="text-blue-600">React JS</li>
                    <li className="text-blue-600">Bootstrap</li>
                    <li className="text-blue-600">Redux</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  {/* <a
                    href="https://www.youtube.com/watch?v=sP96ySKzG3I"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                  >
                    View Demo
                  </a> */}
                  <a
                    href="https://thermatru2023.thetunagroup.com/"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
