export default function HeroSection({ children }) {
  return (
    <section className="h-[100svh] flex flex-col justify-center text-white overflow-hidden">
      {children}
    </section>
  );
}
