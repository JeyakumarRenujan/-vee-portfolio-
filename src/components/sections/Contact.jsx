
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
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-10 bg-transparent scroll-mt-20"
    >
      <Container>

        <div className="text-center mb-6 sm:mb-8">

          <p className="text-[#57BA98] font-bold uppercase text-xs sm:text-sm tracking-wider">
            Contact
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 text-[#2D3748]">
            Get In Touch
          </h2>

          <p className="text-gray-500 mt-1 sm:mt-1.5 text-xs sm:text-sm max-w-xl mx-auto">
            Have a project or opportunity? Feel free to contact me.
          </p>

        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Contact Info */}

          <div className="lg:col-span-5 space-y-4 sm:space-y-5">

            <div className="flex items-center gap-3.5 text-sm sm:text-base">
              <div className="w-10 h-10 rounded-full bg-[#EDF8F5] text-[#57BA98] flex items-center justify-center flex-shrink-0 shadow-xs">
                <FaEnvelope className="text-base" />
              </div>
              <a href={`mailto:${contactData.email}`} className="break-all hover:text-[#57BA98] transition font-medium">
                {contactData.email}
              </a>
            </div>

            <div className="flex items-center gap-3.5 text-sm sm:text-base">
              <div className="w-10 h-10 rounded-full bg-[#EDF8F5] text-[#57BA98] flex items-center justify-center flex-shrink-0 shadow-xs">
                <FaPhone className="text-base" />
              </div>
              <a href={`tel:${contactData.phone}`} className="hover:text-[#57BA98] transition font-medium">
                {contactData.phone}
              </a>
            </div>

            <div className="flex items-center gap-3.5 text-sm sm:text-base">
              <div className="w-10 h-10 rounded-full bg-[#EDF8F5] text-[#57BA98] flex items-center justify-center flex-shrink-0 shadow-xs">
                <FaMapMarkerAlt className="text-base" />
              </div>
              <span className="font-medium">{contactData.location}</span>
            </div>

            <div className="flex gap-4 pt-2">

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="ios-glossy-icon-btn w-10 h-10 rounded-full text-base"
              >
                <FaGithub className="relative z-10" />
              </a>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="ios-glossy-icon-btn w-10 h-10 rounded-full text-base"
              >
                <FaLinkedin className="relative z-10" />
              </a>

            </div>

          </div>

          {/* Right: Contact Form */}

          <div className="lg:col-span-7 relative">

            {/* Mint Glow */}

            <div
              className="
              absolute
              -inset-4
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
                space-y-3
                bg-white/80
                backdrop-blur-md
                p-5 sm:p-6 lg:p-7
                rounded-3xl
                shadow-[0_12px_36px_rgba(87,186,152,0.12)]
                border
                border-white/60
              "
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    px-4 py-2.5 sm:py-3
                    rounded-xl
                    border
                    border-gray-200
                    outline-none
                    bg-white/90
                    focus:border-[#57BA98]
                    text-sm
                    transition
                  "
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full
                    px-4 py-2.5 sm:py-3
                    rounded-xl
                    border
                    border-gray-200
                    outline-none
                    bg-white/90
                    focus:border-[#57BA98]
                    text-sm
                    transition
                  "
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="
                  w-full
                  px-4 py-2.5 sm:py-3
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  bg-white/90
                  focus:border-[#57BA98]
                  text-sm
                  transition
                "
              />

              <textarea
                name="message"
                rows="3"
                placeholder="Your Message"
                required
                className="
                  w-full
                  px-4 py-2.5 sm:py-3
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  resize-none
                  bg-white/90
                  focus:border-[#57BA98]
                  text-sm
                  transition
                "
              ></textarea>

              <button
                type="submit"
                className="
                  ios-glossy-button
                  w-full
                  text-white
                  py-2.5 sm:py-3
                  rounded-full
                  text-sm sm:text-base
                  font-semibold
                "
              >
                <span className="relative z-10">Send Message</span>
              </button>

            </form>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;

