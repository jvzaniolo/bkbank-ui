import clsx from "clsx";

const sizes = {
  small: "",
  large: "badge-lg",
};

export function createBadge({ size, text }) {
  return `
    <div class="${clsx("badge", sizes[size])}">
      ${size !== "small" ? text : ""}
    </div>
  `;
}
