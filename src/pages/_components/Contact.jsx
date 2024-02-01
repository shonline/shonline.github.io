export default function Contact({ children, href }) {
  return (
    <div>
      <a
        href={href}
        className="text-black transition block px-[1vmax] hover:bg-black hover:text-white"
      >
        {children}
      </a>
    </div>
  );
}
