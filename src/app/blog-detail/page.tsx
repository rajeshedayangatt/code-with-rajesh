export default function Page() {
  return (
    <article>
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime="2024-09-01T00:00:00.000Z">
                    Sunday, September 1, 2024
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl dark:text-gray-100">
                Elevate: Global USD Accounts for Freelancers and Digital Nomads
              </h1>
            </div>
          </div>
        </header>

        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
          <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
            <div className="prose dark:prose-invert max-w-none pb-8 pt-10">
              <div>
                <img
                  alt="Elevate"
                  loading="lazy"
                  width="1366"
                  height="906"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet="/_next/image?url=%2Fstatic%2Fimages%2Felevate.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Felevate.png&amp;w=3840&amp;q=75 2x"
                  src="/_next/image?url=%2Fstatic%2Fimages%2Felevate.png&amp;w=3840&amp;q=75"
                />
              </div>
              <p>
                Are you a freelancer or remote worker looking for an easy way to
                manage your international earnings? Elevate offers a solution
                tailored just for you!
              </p>
              <p>Here's how to get started with Elevate:</p>
              <ol>
                <li>
                  <p>
                    Sign up with Elevate: Visit{" "}
                    <a
                      className="break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://elevatepayapp.page.link/4BmHCAFdo7n3t5eP7"
                    >
                      my referral link
                    </a>{" "}
                    to create your account.
                  </p>
                </li>
                <li>
                  <p>
                    Complete the KYC: Take a live selfie, upload your ID, and
                    provide a document containing your address.
                  </p>
                </li>
                <li>
                  <p>
                    Start receiving payments by sharing US account details. You
                    can receive payments from any US bank account and many
                    international accounts. Your account can also receive
                    payments from all the major platforms like Deel, Upwork,
                    Toptal, Ontop, Payoneer, etc…
                  </p>
                </li>
              </ol>
              <p>Key Benefits of Elevate:</p>
              <ul>
                <li>USD bank account (just like Payoneer)</li>
                <li>
                  Low fees and competitive exchange rates (Better rates than
                  Payoneer and Wise)
                </li>
                <li>No annual subscription fee</li>
              </ul>
              <p>
                Remember to check the Elevate website for the most current
                information on features and supported countries.
              </p>
              <p>
                <em>
                  Disclosure: The author may receive a referral bonus for
                  signups through the provided link.
                </em>
              </p>
            </div>
            <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
              <a
                className="break-words"
                target="_blank"
                rel="nofollow"
                href="https://mobile.twitter.com/search?q=https%3A%2F%2Farmujahid.me%2Fblog%2Felevate"
              >
                Discuss on Twitter
              </a>
            </div>
            <div
              className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
              id="comment"
            >
              <button>Load Comments</button>
            </div>
          </div>

          <footer>
            <div className="divide-gray-200 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y dark:divide-gray-700">
              <div className="py-4 xl:py-8">
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Tags
                </h2>
                <div className="flex flex-wrap">
                  <a
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                    href="/tags/finance"
                  >
                    finance
                  </a>
                  <a
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                    href="/tags/freelancing"
                  >
                    freelancing
                  </a>
                  <a
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                    href="/tags/remote-work"
                  >
                    remote-work
                  </a>
                </div>
              </div>
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                <div>
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Previous Article
                  </h2>
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <a className="break-words" href="/blog/payoneer">
                      Payoneer: Your Gateway to Global Financial Transactions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 xl:pt-8">
              <a
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog"
                href="/blog"
              >
                ← Back to the blog
              </a>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
