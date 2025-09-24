import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Transition({ show, onComplete }) {
  const overlayRef = useRef();
  useEffect(() => {
    if (show) {
      gsap.fromTo(
        overlayRef.current,
        { y: "100%" },
        {
          y: 0,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            if (onComplete) onComplete();
          },
        }
      );
    }
  }, [show, onComplete]);

  useEffect(() => {
    if (!show) {
      gsap.to(overlayRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  }, [show]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#5EA4FF] z-[9999]"
      style={{ transform: "translateY(100vh)" }}
    ></div>
  );
}
