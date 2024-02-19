export default function Contact({ children, href }) {
  return (
    <div>
      <a
        href={href}
        className="block px-[1vmax] transition text-black hover:bg-black hover:text-white font-thin text-[clamp(1.5rem,5vmin,5rem)]"
      >
        {children}
      </a>
    </div>
  );
}
