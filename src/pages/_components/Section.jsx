export default function Section({ children, id }) {
  return (
    <section
      id={id}
      className="flex flex-col gap-12 py-[5vmax] justify-evenly h-full w-full"
    >
      {children}
    </section>
  );
}
