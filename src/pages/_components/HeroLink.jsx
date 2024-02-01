export default function HeroLink({ children, href }) {
  return (
    <a
      href={href}
      className="text-white text-center text-[2vmin] font-light block transition hover:bg-white hover:text-black px-[1vmax]"
    >
      {children}
    </a>
  );
}
