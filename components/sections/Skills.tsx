import SkillBadge from "../SkillsBadge";
const python = require("../../assets/Python-logo-notext.svg");
const flutter = require("../../assets/logo_flutter_1080px_clr.png");
const dart = require("../../assets/logo_dart_1080px_clr.png");
const tf = require("../../assets/TF_White_Icon.svg");
const plotly = require("../../assets/logo-plotly.svg");
const vue = require("../../assets/Vue.js_Logo_2.svg");
const react = require("../../assets/React.svg");
const sklearn = require("../../assets/scikit-learn-logo.svg");
const mongo = require("../../assets/Logomark_RGB_Spring-Green.png");
const aws = require("../../assets/Amazon_Web_Services_Logo.svg");
const tailwind = require("../../assets/tailwindcss-mark.svg");
const img_dim = 25;

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
            img_dim={img_dim}
            name="Python"
            exp={5}
          />
          <SkillBadge
            classNames="bg-gradient-to-r to-[#FFA800] from-[#FF6F00] shadow-orange-700/50"
            icon={tf}
            img_dim={img_dim}
            name="TensorFlow"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-sky-800 to-sky-600 shadow-sky-800/50"
            icon={plotly}
            img_dim={img_dim}
            name="Plotly"
            exp={3}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-orange-600 to-orange-500 shadow-orange-600/50 "
            icon={sklearn}
            img_dim={img_dim}
            name="Scikit-Learn"
            exp={3}
          />
        </div>
        <h3 className="subsectionheading">App Development</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-sky-400 shadow-blue-500/50"
            icon={flutter}
            img_dim={img_dim}
            name="Flutter"
            exp={2}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-sky-400 shadow-blue-500/50"
            icon={dart}
            img_dim={img_dim}
            name="Dart"
            exp={2}
          />
        </div>
        <h3 className="subsectionheading">Web Development</h3>
        <div className="badge-arrange">
          <SkillBadge
            classNames="bg-gradient-to-r from-emerald-700 to-emerald-500 shadow-emerald-500/50"
            icon={vue}
            img_dim={img_dim}
            name="Vue.js"
            exp={2}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-sky-600 to-sky-500 shadow-sky-800/50"
            icon={react}
            img_dim={img_dim}
            name="React.js"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-[#001e2b] to-slate-800 shadow-slate-900/50"
            icon={mongo}
            img_dim={img_dim}
            name="MongoDB"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-blue-500 to-blue-400 shadow-blue-500/50"
            icon={aws}
            img_dim={img_dim}
            name="AWS"
            exp={1}
          />
          <SkillBadge
            classNames="bg-gradient-to-r from-slate-900 to-slate-800 shadow-slate-900/50"
            icon={tailwind}
            img_dim={img_dim}
            name="TailwindCSS"
            exp={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
