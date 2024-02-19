export default function CardText({ children }) {
  return (
    <div className="text-[clamp(0.9rem,3vmin,1.5rem)] font-extralight">
      {children}
    </div>
  );
}
