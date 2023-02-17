import { createAvatar } from "./Avatar";

export default {
  title: "Components/Avatar",
  parameters: {
    docs: {
      description: {
        component:
          "Avatars are used to represent users. They are typically used in lists and tables. Avatars can be active or inactive.",
      },
    },
  },
  args: {
    active: false,
    variant: "dark",
    size: "medium",
    content: "text",
  },
  argTypes: {
    active: {
      description: "Toggle the active state of the avatar",
      table: {
        defaultValue: { summary: false },
      },
    },
    variant: {
      description: "Change the variant of the avatar.",
      table: {
        defaultValue: { summary: "dark" },
      },
      options: ["dark", "light"],
      control: {
        type: "radio",
      },
    },
    size: {
      description: "Change the size of the avatar",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    content: {
      description:
        "Change the content in the example. When using an icon, use either the `<svg>` or `<i>` tag.",
      options: ["icon", "text", "image"],
      control: {
        type: "radio",
      },
    },
  },
};

export const Default = (args) => createAvatar(args);
