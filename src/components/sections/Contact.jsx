
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../common/Container";
import contactData from "../../data/contactData";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4tzvlru",
        "template_wunkm0v",
        form.current,
        "6JfKjus1ldVT99VHW"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
  console.log(error);
  toast.error(error.text || "Failed to send message!");
});
  };

  return (
    <section
      id="contact"
      className="py-24 bg-transparent"
    >
      <Container>

        <div className="text-center mb-16">

          <p className="text-[#57BA98] font-bold uppercase">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-2 text-[#2D3748]">
            Get In Touch
          </h2>

          <p className="text-gray-500 mt-4">
            Have a project or opportunity? Feel free to contact me.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#57BA98] text-2xl" />
              <span>{contactData.email}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-[#57BA98] text-2xl" />
              <span>{contactData.phone}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#57BA98] text-2xl" />
              <span>{contactData.location}</span>
            </div>

            <div className="flex gap-6 text-3xl pt-4">

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#57BA98] hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#57BA98] hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            {/* Mint Glow */}

            <div
              className="
              absolute
              -inset-6
              bg-[#65CCB8]
              rounded-full
              blur-3xl
              opacity-20
              -z-10
              "
            ></div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="
                space-y-5
                bg-white/70
                backdrop-blur-md
                p-8
                rounded-3xl
                shadow-xl
                border
                border-white/40
              "
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  bg-white/80
                  focus:border-[#57BA98]
                "
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  bg-white/80
                  focus:border-[#57BA98]
                "
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  bg-white/80
                  focus:border-[#57BA98]
                "
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  resize-none
                  bg-white/80
                  focus:border-[#57BA98]
                "
              ></textarea>

              <button
                type="submit"
                className="
                  bg-[#57BA98]
                  hover:bg-[#65CCB8]
                  hover:scale-105
                  transition
                  duration-300
                  text-white
                  px-8
                  py-3
                  rounded-xl
                  shadow-lg
                  w-full
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;

