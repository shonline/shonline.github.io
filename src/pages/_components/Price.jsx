export default function Price({ children }) {
  return (
    <div className="font-thin text-[clamp(1.3rem,3.5vmin,2rem)]">
      {children}
    </div>
  );
}
