import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-100 text-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;