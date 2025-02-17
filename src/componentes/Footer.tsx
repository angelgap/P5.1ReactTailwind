const Footer = () => {

  return (
    <header className="bg-[var(--color-complementary)] border-b-2 border-[var(--color-primary)] px-20 py-2 flex items-center justify-between">
      <div className="text-center w-1/3 font-medium text-secondary text-body-m line-height-body-m">
        <p>
            &copy; 2025 EvolucionaX.
        </p>
        <p> 
            Todos los derechos reservados.
        </p>
      </div>
      <div className="text-center font-medium italic font-body-m text-secondary text-body-m w1/3 line-height-body-m">
        <p>
            Evoluciona tu publicidad
        </p>
      </div>
      <div className="text-center w-1/3 font-medium text-secondary text-body-m line-height-body-m">
        <p>
            contacto@evolucionax.com
        </p>
      </div>
    </header>
  );
};

export default Footer;