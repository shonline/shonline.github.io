import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

export default function HeaderButton({ children, scrollTo }) {
  return (
    <button
      className="text-white text-center text-[2vmin] font-light block transition hover:bg-white hover:text-black px-[1vmax]"
      onClick={() => {
        locomotiveScroll.scrollTo(document.getElementById(scrollTo));
      }}
    >
      {children}
    </button>
  );
}
