import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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

    setIsLoading(false);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div>
      {showMessage && (
        <div
          className={`fixed top-6 right-6 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 z-50
          ${isError ? "bg-red-600 text-white" : "bg-sky-600 text-white"} 
          ${
            showMessage
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
              <div className="relative mb-6 w-full">
                <input
                  type="text"
                  name="name"
                  className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 text-base transition-all duration-300 focus:outline-none focus:border-sky-600 placeholder-transparent"
                  id="contact-name"
                  placeholder="Name"
                  required
                  disabled={isLoading}
                />
                <label
                  htmlFor="contact-name"
                  className="absolute left-0 top-3 text-gray-500 text-base transition-all duration-300
                             peer-placeholder-shown:top-3 
                             peer-placeholder-shown:text-base 
                             peer-placeholder-shown:text-gray-500
                             peer-focus:top-0 
                             peer-focus:text-xs 
                             peer-focus:text-sky-600
                             peer-valid:top-0 
                             peer-valid:text-xs 
                             peer-valid:text-sky-600"
                >
                  Name
                </label>
              </div>
              <div className="relative mb-6 w-full">
                <input
                  type="email"
                  name="email"
                  className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 text-base transition-all duration-300 focus:outline-none focus:border-sky-600 placeholder-transparent"
                  id="contact-email"
                  placeholder="Enter your email address"
                  required
                  disabled={isLoading}
                />
                <label
                  htmlFor="contact-email"
                  className="absolute left-0 top-3 text-gray-500 text-base transition-all duration-300
                             peer-placeholder-shown:top-3 
                             peer-placeholder-shown:text-base 
                             peer-placeholder-shown:text-gray-500
                             peer-focus:top-0 
                             peer-focus:text-xs 
                             peer-focus:text-sky-600
                             peer-valid:top-0 
                             peer-valid:text-xs 
                             peer-valid:text-sky-600"
                >
                  Email
                </label>
              </div>
              <div className="relative mb-6 w-full">
                <textarea
                  className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 text-base transition-all duration-300 focus:outline-none focus:border-sky-600 resize-none placeholder-transparent"
                  name="message"
                  placeholder="Share your thoughts, feedback, or inquiries..."
                  rows="4"
                  id="contact-message"
                  required
                  disabled={isLoading}
                ></textarea>
                <label
                  htmlFor="contact-message"
                  className="absolute left-0 top-3 text-gray-500 text-base transition-all duration-300
                             peer-placeholder-shown:top-3 
                             peer-placeholder-shown:text-base 
                             peer-placeholder-shown:text-gray-500
                             peer-focus:top-0 
                             peer-focus:text-xs 
                             peer-focus:text-sky-600
                             peer-valid:top-0 
                             peer-valid:text-xs 
                             peer-valid:text-sky-600"
                >
                  Share your thoughts, feedback, or inquiries...
                </label>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded bg-sky-600 px-6 py-3 font-medium uppercase leading-normal text-white transition-all duration-300 hover:shadow-lg hover:bg-sky-700 hover:scale-105
                           disabled:bg-sky-400 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
