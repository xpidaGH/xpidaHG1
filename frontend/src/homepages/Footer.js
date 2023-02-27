import React from "react";

function Footer() {
  const [language, setLanguage] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/-www-form-urlencoded" },
      body: encode({
        "form-name": "register",
        language,
        name,
        email,
      }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <footer className="text-xl font-extrabold leading-tight px-6">
      <div>
        <div className="container mx-auto flex p-5 md:flex-row flex-col items-center">
          <div className="mx-2">
            <h1 className="title-font sm:text-xl font-medium text-white bg-indigo-400">
              <span className="text-rose-900 animate-pulse bg-white border-4">
                Donations
              </span>
              <br className="hidden lg:inline-block" />
              Support my work to help beginners and young students everywhere
              learn programming and webapp development.
            </h1>
          </div>
          <div className="mx-2">
            <h1 className="title-font sm:text-xl font-medium text-white bg-indigo-400">
              <span className="text-rose-900 animate-pulse bg-white border-4">
                Subscription
              </span>
              <br className="hidden lg:inline-block" />
              Our copy-and-paste tutorials are very easy to follow - even by
              minors. To{" "}
              <span className="animate-pulse text-white bg-green-900">
                Free Subscribe
              </span>{" "}
              for more tutorials, select a language, fill in your e-mail, and
              click submit button to receive links to the files on Drive.
            </h1>
          </div>
        </div>

        <nav className="mx=9">
          <form
            netlify
            name="register"
            onSubmit={handleSubmit}
            className="w-full px-4 bg-orange-100 flex flex-nowrap space-x-2"
          >
            <span>
              <label htmlFor="language" className="text-sm text-teal-900">
                Language:
              </label>
              <select
                id="language"
                name="language"
                className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none p-1 transition-colors duration-200 ease-in-out"
              >
                <option>English</option>
                <option>Arabic</option>
                <option>Chinese</option>
                <option>French</option>
                <option>Russian</option>
                <option>Spanish</option>
                onChange={(e) => setLanguage(e.target.value)}
              </select>
            </span>

            <span>
              <label htmlFor="name" className="text-sm text-teal-900">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none p-1 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </span>

            <span>
              <label htmlFor="email" className="text-sm text-teal-900">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none p-1 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>

            <span>
              <button
                type="submit"
                className="text-white bg-indigo-400 p-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </span>
          </form>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
