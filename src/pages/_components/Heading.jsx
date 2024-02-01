export default function Heading({ children }) {
  return (
    <div
      className="sm:text-[10vmin] text-[13vmin] font-['Viaoda_Libre']"
      data-scroll
      data-scroll-speed="-0.03"
    >
      {children}
    </div>
  );
}
