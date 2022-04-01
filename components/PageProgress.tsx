import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
export function PageProgress({}) {
  const { scrollYProgress } = useViewportScroll();
  const [isComplete, setIsComplete] = useState(false);
  const yRange = useTransform(scrollYProgress, [0, 0.95], [0, 1]);
  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <div className="fixed top-2 left-4 z-[100] h-10 w-10 md:top-4 ">
      <svg
        className="progress-icon aspect-square stroke-blue-800/80"
        viewBox="0 0 50 50"
      >
        <motion.path
          fill="none"
          strokeWidth="8"
          //   stroke="black"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength: scrollYProgress,
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
