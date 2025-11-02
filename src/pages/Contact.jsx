import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://formspree.io/f/mnngeege", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage("Message sent successfully!");
        setIsError(false);
        form.reset();
      } else {
        setMessage("Failed to send message");
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
      setIsError(true);
    }

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div>
      {showMessage && (
        <div
          className={`fixed top-6 right-6 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 z-50
            ${isError ? "bg-red-600 text-white" : "bg-sky-600 text-white"} 
            ${showMessage
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
            }`}
        >
          {message}
        </div>
      )}
      <div className="container my-12 mx-auto px-2 md:px-4">
        <section className="mb-32">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">Get In Touch</h2>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
            >
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-0.5 text-sky-600"
                  htmlFor="contact-name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="px-2 py-2 border w-full outline-none rounded-md"
                  id="contact-name"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-0.5 text-sky-600"
                  htmlFor="contact-email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="px-2 py-2 border w-full outline-none rounded-md"
                  id="contact-email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-0.5 text-sky-600"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <textarea
                  className="px-2 py-2 border rounded-[5px] w-full outline-none"
                  name="message"
                  id="contact-message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="mb-6 inline-block w-full rounded bg-sky-600 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-sky-700"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
