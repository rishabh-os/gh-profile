import { stringify } from "querystring";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const endpoint: string = process.env.NEXT_PUBLIC_EMAIL_API!;
    const body = JSON.stringify({
      senderName: name,
      senderEmail: email,
      message: message,
    });
    const requestOptions = {
      method: "POST",
      body,
    };
    console.log(endpoint);

    const res = await fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        console.log("Email sent successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <p className="txt">Feel free to contact me through the form below!</p>
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
          className="group relative col-span-2 col-start-4 inline-flex rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5
           text-center text-sm font-medium text-gray-900 hover:text-white group-hover:from-green-400
            group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
        >
          <span className="w-full rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Submit
          </span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
