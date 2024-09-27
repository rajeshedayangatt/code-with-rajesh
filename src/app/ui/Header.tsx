export function Header() {
  return (
    <header className="border-b border-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Codecraft:webdev Tech Blog</h1>
      <nav>
        <a href="#" className="text-gray-400 hover:text-white ml-4">
          Home
        </a>
        <a href="#" className="text-gray-400 hover:text-white ml-4">
          About
        </a>
        <a href="#" className="text-gray-400 hover:text-white ml-4">
          Contact
        </a>
      </nav>
    </header>
  );
}
