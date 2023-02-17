import clsx from "clsx";

const variants = {
  dark: "",
  light: "avatar-light",
};

const sizes = {
  small: "avatar-sm",
  medium: "",
  large: "avatar-lg",
};

const contents = {
  icon: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      width="1em"
      height="1em"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  `,
  text: "RM",
  image: `<img src="https://randomuser.me/api/portraits/thumb/men/20.jpg" alt="User Name" />`,
};

export function createAvatar({ variant, size, isActive, content }) {
  return `
  <div
    class="${clsx(
      "avatar",
      variants[variant],
      sizes[size],
      isActive && "avatar-active"
    )}"
  >
  ${contents[content]}
  </div>
`;
}
