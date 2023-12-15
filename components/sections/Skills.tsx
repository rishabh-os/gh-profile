import SkillBadge from "../SkillsBadge";
import python from "../../assets/Python-logo-notext.svg";
import flutter from "../../assets/logo_flutter_1080px_clr.png";
import dart from "../../assets/logo_dart_1080px_clr.png";
import tf from "../../assets/TF_White_Icon.svg";
import pytorch from "../../assets/PyTorch_logo_icon.svg";
import plotly from "../../assets/logo-plotly.svg";
import vue from "../../assets/Vue.js_Logo_2.svg";
import react from "../../assets/React.svg";
import sklearn from "../../assets/scikit-learn-logo.svg";
import mongo from "../../assets/Logomark_RGB_Spring-Green.png";
import aws from "../../assets/Amazon_Web_Services_Logo.svg";
import tailwind from "../../assets/tailwindcss-mark.svg";
import julia from "../../assets/julia.png";
import rust from "../../assets/rust-logo.svg";

const Skills = () => {
  return (
    <section id="Skills">
      <h2 className="sectionheading">Skills</h2>
      <div className="-mt-5">
        <h3 className="subsectionheading ">Machine Learning</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-sky-600/80 to-sky-500 shadow-sky-700/50"
            icon={python}
            name="Python"
            exp={5}
          />
          <SkillBadge
            classNames="bg-gradient-to-r to-[#FFA800] from-[#FF6F00] shadow-orange-700/50"
            icon={tf}
            name="TensorFlow"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r to-[#F05F42] from-[#F04B2F] shadow-red-700/50"
            icon={pytorch}
            name="Pytorch"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-sky-800 to-sky-600 shadow-sky-800/50"
            icon={plotly}
            name="Plotly"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-orange-600 to-orange-500 shadow-orange-600/50 "
            icon={sklearn}
            name="Scikit-Learn"
            exp={3}
          />
        </div>
        <h3 className="subsectionheading">App Development</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-sky-400 shadow-blue-500/50"
            icon={flutter}
            name="Flutter"
            exp={2}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-sky-400 shadow-blue-500/50"
            icon={dart}
            name="Dart"
            exp={2}
          />
        </div>
        <h3 className="subsectionheading">Web Development</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-emerald-700 to-emerald-500 shadow-emerald-500/50"
            icon={vue}
            name="Vue.js"
            exp={2}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-sky-600 to-sky-500 shadow-sky-500/50"
            icon={react}
            name="React.js"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-[#001e2b] to-slate-800 shadow-slate-900/50"
            icon={mongo}
            name="MongoDB"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-blue-400 shadow-blue-500/50"
            icon={aws}
            name="AWS"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-slate-900 to-slate-800 shadow-slate-900/50"
            icon={tailwind}
            name="TailwindCSS"
            exp={2}
          />
        </div>
        <h3 className="subsectionheading">Fleeting Interests</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-gray-600 to-gray-500 shadow-gray-500/50"
            icon={julia}
            name="Julia"
            exp={0}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-[#CE412B] to-orange-600 shadow-orange-500/50"
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
