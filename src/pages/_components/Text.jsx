export default function Text({ children }) {
  return (
    <div className="font-extralight text-[clamp(0.9rem,3vmin,1.5rem)]">
      {children}
    </div>
  );
}
