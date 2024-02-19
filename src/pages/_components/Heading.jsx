export default function Heading({ children }) {
  return (
    <div
      className="text-[clamp(1.7rem,9vmin,7rem)] font-['Viaoda_Libre']"
      data-scroll
      data-scroll-speed="-0.03"
    >
      {children}
    </div>
  );
}
