import Image from "next/image";
import { Component, useState, useReducer } from "react";
import { SocialIcon } from "react-social-icons";
import { CgEnter } from "react-icons/cg";

const Contact = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // alert("You have submitted the form with" + message);
  };

  const handleChange = (event: any) => {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section id="Contact" className="h-fit">
      <h2 className="sectionheading">Contact Details</h2>
      <p className="txt">
        Here are some links to my accounts across the Internet
      </p>
      <p className="prose mx-auto py-4 px-4 dark:prose-invert"></p>
      <div className="flex items-center justify-center space-x-4">
        <div className="rounded-full bg-white">
          <SocialIcon
            url="https://github.com/rishabh-os"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="rounded-full bg-white">
          <SocialIcon
            url="https://www.linkedin.com/in/rishabh-wanjari/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
      <p className="txt">
        Feel free to contact me through the form below!(WIP)
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-11/12 grid-cols-8 grid-rows-4 content-center items-center
        justify-center object-center text-left md:grid md:w-[45rem]"
      >
        <label className="contact-label ">Name</label>

        <input
          required
          autoComplete="name"
          className="contact-input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="contact-label ">Email ID</label>
        <input
          required
          autoComplete="email"
          className="contact-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="contact-label ">Message</label>
        <textarea
          className="contact-input h-20 resize-none"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          type="submit"
          disabled
          className="group relative inline-flex rounded-lg bg-gradient-to-br from-green-400 to-blue-600
           p-0.5 text-center text-sm font-medium text-gray-900 hover:cursor-not-allowed hover:text-white group-hover:from-green-400
            group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
        >
          <span className=" rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Submit <CgEnter className="inline " />
          </span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
