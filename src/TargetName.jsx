export function TargetName() {
  return (
    <div className="m-5 group bg-black text-center rounded-lg font-Montserrat">
      <h1 className="mb-1 text-4xl text-white md:text-6xl">
        Hi, I'm <br className="block md:hidden" />
        <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
          Chessmaw .
        </span>
        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
      </h1>
    </div>
  );
}
