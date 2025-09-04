const NavBar = () => {
  return (
    <header className="w-full bg-indigo-700 p-4 text-gray-950">
      <nav className="flex justify-around items-center">
        <span className="font-bold text-3xl">BlogsPage</span>
        <ul className="flex gap-4">
          <li>Iniciar sesión</li>
          <li>Registrarse</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
