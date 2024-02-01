export default function HeroRow({ children }) {
  return (
    <div data-scroll data-scroll-speed="-0.07" className="flex flex-col">
      {children}
    </div>
  );
}
