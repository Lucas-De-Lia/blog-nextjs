import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full bg-indigo-700 opacity-98 p-4 text-gray-950 z-[999] fixed top-0 left-0">
      <nav className="flex justify-around items-center">
        <Link href="/">
          <span className="font-bold text-3xl">BlogsPage</span>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/auth/login" className="py-6 px-4 hover:bg-indigo-600">
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link
              href="/auth/register"
              className="py-6 px-4 hover:bg-indigo-600"
            >
              Registrarse
            </Link>
          </li>
          <li>
            <Link href="/contact" className="py-6 px-4 hover:bg-indigo-600">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
