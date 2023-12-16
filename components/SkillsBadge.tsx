import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
interface SkillProps {
  icon: any;
  name: string;
  classNames: string;
  exp: number;
}
function SkillBadge({ icon, name, classNames, exp }: SkillProps) {
  const buttonClasses =
    "m-4 flex h-12 w-40 content-center items-center justify-center rounded-lg px-2 py-2.5 text-center shadow-lg ";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="mb-2 font-inter"
      style={{
        scale: isInView ? 1 : 2,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.6,0,.56,1) 0.2s",
      }}
    >
      <button type="button" className={buttonClasses + classNames} disabled>
        {/* //? You can set the width directly but doing it through CSS is better */}
        <Image src={icon} alt="Skill image" className="w-6" />
        <p className="prose ml-2 font-[500] text-white">{name}</p>
      </button>
      {exp > 0 && (
        <p className="prose text-center dark:prose-invert">{exp} years</p>
      )}
    </motion.div>
  );
}
export default SkillBadge;
