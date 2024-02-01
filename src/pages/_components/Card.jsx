export default function Card({ children }) {
  return (
    <div className="flex flex-col gap-10 border-l border-black p-10">
      {children}
    </div>
  );
}
