import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Title */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">💰</span>
            <h1 className="text-2xl font-bold text-gray-800">
              Invest<span className="text-blue-600">App</span>
            </h1>
          </Link>

          {/* Menu */}
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
