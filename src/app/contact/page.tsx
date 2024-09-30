export default function Contact() {
  return (
    <main className="mb-auto">
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact Me
          </h1>
        </div>
        <div className="flex sm:space-x-24"></div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfdEV5CL5B3msK96stiE0Y876hQsUQXADVfQgMP-2D8Abh-2Q/viewform?embedded=true"
          width="600"
          height="500"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}
