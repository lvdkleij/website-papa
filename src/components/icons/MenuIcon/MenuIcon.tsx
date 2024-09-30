import { mergeProps } from "solid-js";
import "./MenuIcon.css";

export function MenuIcon(_props: { isActive: boolean }) {
  const props = mergeProps({ isActive: false }, _props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 960 960"
      class={`${props.isActive ? "animate" : ""}`}
      role="img"
    >
      <g fill="currentColor" stroke="currentColor" stroke-width="2">
        <path d="M120 240v80h720v-80H120Z" class="line1"></path>
        <path d="M120 440v80h720v-80H120Z" class="line2"></path>
        <path d="M120 640v80h720v-80H120Z" class="line3"></path>
        <path d="M120 440v80h720v-80H120Z" class="line4"></path>
      </g>
    </svg>
  );
}
