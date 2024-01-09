import SkillBadge from "../SkillsBadge";
import python from "../../assets/logos/python.svg";
import flutter from "../../assets/logos/flutter.svg";
import dart from "../../assets/logos/dart.svg";
import tf from "../../assets/logos/tensorflow.svg";
import pytorch from "../../assets/logos/pytorch.svg";
import plotly from "../../assets/logos/plotly.svg";
import vue from "../../assets/logos/vue.svg";
import react from "../../assets/logos/react.svg";
import sklearn from "../../assets/logos/scikit-learn.svg";
import mongo from "../../assets/logos/mongodb.svg";
import aws from "../../assets/logos/aws.svg";
import tailwind from "../../assets/logos/tailwindcss.svg";
import julia from "../../assets/logos/julia.svg";
import rust from "../../assets/logos/rust.svg";
import astro from "../../assets/logos/astro.svg";

const Skills = () => {
  return (
    <section id="Skills">
      <h2 className="sectionheading">Skills</h2>
      <div className="-mt-5">
        <h3 className="subsectionheading">Machine Learning</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-sky-500 to-sky-400 shadow-sky-500"
            icon={python}
            name="Python"
            exp={5}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-[#FF6F00] to-[#FFA800] shadow-orange-500"
            icon={tf}
            name="TensorFlow"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-[#F04B2F] to-[#F05F42] shadow-red-500"
            icon={pytorch}
            name="Pytorch"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-sky-800 to-sky-600 shadow-sky-600"
            icon={plotly}
            name="Plotly"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-orange-600 to-orange-500 shadow-orange-600"
            icon={sklearn}
            name="Scikit-Learn"
            exp={3}
          />
        </div>
        <h3 className="subsectionheading">App Development</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-sky-400 shadow-blue-400"
            icon={flutter}
            name="Flutter"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-sky-400 shadow-blue-400"
            icon={dart}
            name="Dart"
            exp={3}
          />
        </div>
        <h3 className="subsectionheading">Web Development</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-emerald-700 to-emerald-500 shadow-emerald-500"
            icon={vue}
            name="Vue.js"
            exp={2}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-sky-600 to-sky-500 shadow-sky-500"
            icon={react}
            name="React.js"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-[#E03871] to-[#EE40EE] shadow-purple-500"
            icon={astro}
            name="Astro"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-green-700 to-green-600 shadow-green-500"
            icon={mongo}
            name="MongoDB"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-blue-400 shadow-blue-500"
            icon={aws}
            name="AWS"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-slate-900 to-slate-800 shadow-slate-700"
            icon={tailwind}
            name="TailwindCSS"
            exp={2}
          />
        </div>
        <h3 className="subsectionheading">Fleeting Interests</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-gray-600 to-gray-500 shadow-gray-500"
            icon={julia}
            name="Julia"
            exp={0}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-[#CE412B] to-orange-600 shadow-orange-500"
            icon={rust}
            name="Rust"
            exp={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
