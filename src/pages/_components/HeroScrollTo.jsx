import LocomotiveScroll from 'locomotive-scroll';

export default function HeroScrollTo({ children, scrollTo }) {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <button
      className="text-white text-center font-light block transition hover:bg-white hover:text-black px-1.5"
      onClick={() => {
        locomotiveScroll.scrollTo(document.getElementById(scrollTo));
      }}
    >
      {children}
    </button>
  );
}
