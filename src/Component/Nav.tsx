import { appWindow } from "@tauri-apps/api/window";
import { SVGProps } from "react";

const Nav = () => {
  return (
    <div data-tauri-drag-region className="nav flex drag">
      <div className="flex">
        <button
          onClick={() => {
            appWindow.close();
          }}
          id="close"
        ></button>
        <button
          onClick={() => {
            appWindow.minimize();
          }}
          id="min"
        ></button>
        <button
          onClick={() => {
            appWindow.toggleMaximize();
          }}
          id="max"
        ></button>
      </div>
    </div>
  );
};

export default Nav;

export function NavbarExpand(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M4 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0-9h16"></path>
        <path d="m10 14l2 2l2-2"></path>
      </g>
    </svg>
  );
}
