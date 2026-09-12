export const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream-texture px-6 py-16 text-brown">
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: 'url("/texturas/278759-egg-shell.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <img
          src="/logo-ameli/logotipo01.png"
          alt="Ameli Pastoreo"
          className="mb-10 h-20 w-auto object-contain sm:h-24"
        />

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-green-dark">
          Ameli Pastoreo
        </p>
        <h1 className="max-w-lg text-4xl font-bold leading-tight text-brown sm:text-5xl">
          Parece que este huevo se rompió antes de llegar.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-brown-mid sm:text-lg">
          La página que buscás no existe o cambió de lugar.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-green-dark px-8 py-4 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-dark"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  )
}
