import React, { useRef } from "react";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <section className=" min-h-screen flex flex-col">
      <div className="container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="shadow-lg p-10 ">
          <form className="form" ref={form}>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
              />
              {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSubmit}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-sm mt-5">
            Don't have an account?{" "}
            <a
              className="inline-block border-b botder-gray-50 font-bold"
              href="/signup"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
