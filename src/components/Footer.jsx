import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            2022 — Federico
            <a
              href="https://github.com/nvFede"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @nvFede
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Made with ❤️
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
