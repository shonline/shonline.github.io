import LocomotiveScroll from 'locomotive-scroll';

export default function HeroRow({ children }) {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div data-scroll data-scroll-speed="-0.07" className="flex flex-col">
      {children}
    </div>
  );
}
