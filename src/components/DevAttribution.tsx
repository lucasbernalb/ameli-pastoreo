const DevAttribution = () => {
  return (
    <a
      href="https://bernydev.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-brown-light/80 hover:text-brown transition-all duration-200"
      aria-label="Desarrollado por Berny Dev — Portfolio"
    >
      <img
        src="/bernydev/logosinfondo.png"
        alt="Berny Dev logo"
        className="h-5 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-200"
        loading="lazy"
      />
      <span className="text-sm font-medium tracking-wide">
        Desarrollado por <span className="font-semibold uppercase text-berny/75 hover:text-berny transition-colors duration-200">BERNY DEV</span>
      </span>
    </a>
  );
};

export default DevAttribution;
