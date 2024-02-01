import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

export default function HeroButton({ children, scrollTo }) {
  return (
    <div
      className="sm:block hidden border-l my-2 border-white"
      data-scroll
      data-scroll-speed="-0.01"
    >
      <button
        className="block h-[3.5vmin] font-light text-[1.7vmin] transition px-[1vmax] hover:bg-white hover:text-black uppercase"
        onClick={() => {
          locomotiveScroll.scrollTo(document.getElementById(scrollTo));
        }}
      >
        {children}
      </button>
    </div>
  );
}
