export default function HeaderRow({ children }) {
  return (
    <div className="flex justify-between items-center w-[90vw] flex-wrap">
      {children}
    </div>
  );
}
