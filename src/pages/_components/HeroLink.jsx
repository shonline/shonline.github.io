export default function HeroLink({ children, href }) {
  return (
    <a
      href={href}
      className="text-white text-center font-light block transition hover:bg-white hover:text-black px-1.5"
    >
      {children}
    </a>
  );
}
