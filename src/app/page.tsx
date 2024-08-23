"use client";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Braces, FileJson } from "lucide-react";
export default function Home() {
  const circleRef = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const pathRef = useRef<any>(null);
  const pathRef2 = useRef<any>(null);
  const boxRef = useRef<any>(null);
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    const ctx = gsap.context(() => {
      const createMotionPathAnimation = (
        circle: HTMLDivElement | null,
        path: SVGPathElement | null
      ) => {
        if (!circle || !path || !boxRef.current) return;

        gsap.to(circle, {
          duration: 5,
          yoyo: true,
          ease: "power1.inOut",
          motionPath: {
            path: path,
            align: path,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
          scrollTrigger: {
            trigger: boxRef.current,
            pin: true,
            start: "top top",
            end: "+=1000",
            scrub: 1,
            markers: true,
          },
        });
      };

      createMotionPathAnimation(circleRef.current, pathRef.current);
      createMotionPathAnimation(circleRef2.current, pathRef2.current);
    }, [circleRef, pathRef, boxRef]);

    return () => ctx.revert(); // Membersihkan animasi ketika komponen unmount
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full ">
      <div className="fixed top-20 w-full">
        <div ref={circleRef} className="w-16 h-16">
          <FileJson className="w-16 h-16" />
        </div>
        <div ref={circleRef2} className="w-16 h-16">
          <Braces className="w-16 h-16" />
        </div>
        <svg
          className="w-full absolute top-0 opacity-0"
          height="109"
          viewBox="0 0 1204 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M1.74719 39.5155C2.23711 35.5961 11.3264 30.4903 14.1521 27.8739C23.7436 18.9929 38.8946 15.2538 51.5578 13.8468C78.7847 10.8216 104.875 1.72815 132.667 1.72815C175.762 1.72815 219.107 3.97505 261.869 9.45738C295.259 13.7382 328.935 19.3885 362.444 22.4348C380.888 24.1115 398.542 30.5776 416.74 33.4084C445.692 37.912 472.255 46.622 500.235 54.9739C537.289 66.0351 571.116 85.9428 608.157 97.0553C644.325 107.906 676.926 107.103 714.172 106.502C725.917 106.313 736.399 101.349 747.188 101.349C758.651 101.349 769.857 94.4789 780.681 94.4789C792.265 94.4789 804.164 83.1072 815.892 82.4556C831.105 81.6105 845.615 72.15 861.313 72.15C870.774 72.15 882.688 67.6461 891.849 64.8979C904.487 61.1063 920.261 57.8525 933.453 56.5961C965.316 53.5616 996.386 42.9507 1028.88 42.9507C1041.6 42.9507 1054.32 42.9507 1067.04 42.9507C1080.85 42.9507 1099.66 41.3156 1113.13 45.5271C1127.67 50.0707 1145.79 48.1035 1161.13 48.1035C1168.6 48.1035 1198.99 47.9549 1202.35 41.2331"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>

        <svg
          className="w-full absolute top-[30rem] opacity-0 "
          height="143"
          viewBox="0 0 1205 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef2}
            d="M1.92325 43.5782C-0.780243 43.9644 17.1153 64.6951 19.1947 66.8613C27.3458 75.352 35.4437 84.2247 44.8634 91.2894C66.8816 107.803 95.1862 118.107 122.156 123.351C151.111 128.982 180.638 132.031 209.754 136.711C236.161 140.955 268.222 143.559 294.68 138.81C338.132 131.011 382.392 120.642 424.073 106.748C438.249 102.022 451.843 95.2008 465.581 89.1901C472.506 86.1604 478.547 80.5158 484.57 75.831C492.097 69.9767 500.308 65.1301 507.281 58.6549C522.09 44.904 546.635 42.8301 564.344 34.6084C575.391 29.4795 587.108 24.0418 598.791 20.4859C611.837 16.5153 625.266 10.1329 639.06 9.32147C650.121 8.67078 660.578 4.48847 671.789 4.07323C687.979 3.47363 703.987 2.35563 720.264 2.35563C738.962 2.35563 757.783 1.73241 776.468 2.45105C797.549 3.26187 818.134 9.08308 839.065 10.9437C857.175 12.5534 875.506 14.4415 893.361 17.8141C907.824 20.5461 922.506 24.3941 937.064 26.4021C955.494 28.9441 971.78 37.2653 989.165 43.1965C1005.81 48.8748 1022.42 50.4557 1039.36 54.2655C1054.86 57.7525 1070.92 57.3619 1086.59 59.8C1107.11 62.9924 1127.42 61.6505 1148.04 62.5672C1166.3 63.3785 1185 66.5988 1202.53 60.7542"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="h-screen" ref={boxRef}></div>
    </main>
  );
}
