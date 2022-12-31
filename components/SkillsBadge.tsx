import Image from "next/legacy/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
interface Props {
  icon: any;
  img_dim: number;
  name: string;
  classNames: string;
  exp: number;
}
function SkillBadge({ icon, img_dim, name, classNames, exp }: Props) {
  const buttonClasses =
    "m-4 flex w-40  content-center items-center justify-center rounded-lg px-2 py-2.5 text-center shadow-lg ";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="mb-2"
      style={{
        scale: isInView ? 1 : 2,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
      }}
      // initial="hidden"
      // animate="visible"
      // variants={{
      //   hidden: {
      //     scale: 0.8,
      //     opacity: 0,
      //   },
      //   visible: {
      //     scale: 1,
      //     opacity: 1,
      //     transition: {
      //       delay: 0.5,
      //       duration: 1,
      //     },
      //   },
      // }}
    >
      <button type="button" className={buttonClasses + classNames} disabled>
        <Image
          src={icon}
          alt="Profile image"
          height={img_dim}
          width={img_dim}
        />
        <p className=" prose ml-2 font-bold text-white">{name}</p>
      </button>
      {exp > 0 && (
        <p className="prose text-center dark:prose-invert">{exp} years</p>
      )}
    </motion.div>
  );
}
export default SkillBadge;
