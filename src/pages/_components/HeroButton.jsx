import LocomotiveScroll from 'locomotive-scroll';

export default function HeroButton({ children, scrollTo }) {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div
      className="sm:block hidden border-l my-2 border-white"
      data-scroll
      data-scroll-speed="-0.01"
    >
      <button
        className="block h-[3.5vmin] font-light text-[clamp(0.9rem,1.7vmin,1.5rem)] transition px-[1vmin] hover:bg-white hover:text-black uppercase"
        onClick={() => {
          locomotiveScroll.scrollTo(document.getElementById(scrollTo));
        }}
      >
        {children}
      </button>
    </div>
  );
}
