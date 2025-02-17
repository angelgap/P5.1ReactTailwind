import { useState } from 'react';
import { Search } from 'lucide-react';
import Logo from '/Logo.png';


const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <header className="bg-[var(--color-complementary)] border-b-2 border-[var(--color-primary)] px-50 py-2 flex items-center justify-between">
      <div className=" flex items-center">
        <a href="/">
          <img src={Logo} alt="EvolucionaX Logo" width={100} height={100} className="cursor-pointer text-[var(--color-secondary)]" />
        </a>
      </div>
      <nav className="flex space-x-6 font-medium text-secondary text-body-m line-height-body-m">
        <a href="#nosotros" className="hover:underline">Nosotros</a>
        <a href="#servicios" className="hover:underline">Servicios</a>
        <a href="#contactos" className="hover:underline">Contactos</a>
      </nav>
      <div className="relative flex items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border border-[var(--color-primary)] rounded-md px-3 py-1 outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="Buscar..."
        />
        <Search className="text-[var(--color-secondary)] absolute right-2 cursor-pointer" size={18} />
      </div>
    </header>
  );
};

export default Header;