import React from "react";
import "tailwindcss/tailwind.css";
import { Icon } from "@iconify/react";

const index = () => {
  return (
    <div>
      <div className="flex">
      <div className="bg-green-400 p-16 w-2/3 overflow-y-auto" style={{ maxHeight: "80vh" }}>
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="bg-violet-800 p-16 w-1/3">
        <img src="/IMG_2584.jpg" alt="Profile Picture" />
        </div>
      </div>
      <div className="bg-orange-300 p-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Tech Stack</h2>
        <div className="flex justify-center">
          <div className="mr-4 " style={{ color: "red" }}>
            <Icon icon="vscode-icons:file-type-reactjs" width={55} />
          </div>
          <div className="mr-4 " style={{ color: "red" }}>
            <Icon icon="vscode-icons:file-type-reactjs" width={55} />
          </div>
          <div className="mr-4 " style={{ color: "red" }}>
            <Icon icon="vscode-icons:file-type-reactjs" width={55} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
