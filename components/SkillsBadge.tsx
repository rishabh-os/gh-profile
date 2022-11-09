import Image from "next/image";
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
  return (
    <div className="mb-2">
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
    </div>
  );
}
export default SkillBadge;
