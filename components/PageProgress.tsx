import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
export function PageProgress({}) {
  const { scrollYProgress } = useScroll();
  const [isComplete, setIsComplete] = useState(false);
  const yRange = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  useMotionValueEvent(yRange, "change", (v) => setIsComplete(v >= 1));

  return (
    <div className="fixed left-4 top-2 z-[100] h-10 w-10 md:top-4 ">
      <svg
        className="progress-icon aspect-square stroke-gray-800/80"
        viewBox="0 0 50 50"
      >
        <motion.path
          fill="none"
          strokeWidth="8"
          //   stroke="black"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,1"
          style={{
            pathLength: yRange,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          //   stroke="black"
          d="M13,26 L 22,33 L 34,17"
          initial={true}
          strokeDasharray="0 1"
          animate={{
            pathLength: isComplete ? 1 : 0,
          }}
        />
      </svg>
    </div>
  );
}
