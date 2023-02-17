import { createBadge } from "./Badge";

export default {
  title: "Components/Badge",
  parameters: {
    docs: {
      description: {
        component:
          "Badges are used to highlight important information. They are typically used to display the number of unread notifications or messages. Small badges should not have text content.",
      },
    },
  },
  args: {
    size: "small",
    text: "3",
  },
  argTypes: {
    text: {
      description: "Change the content of the badge",
    },
    size: {
      description:
        "Change the size of the badge. Small badges should not have text content.",
      options: ["small", "large"],
      control: {
        type: "select",
      },
      table: {
        defaultValue: { summary: "small" },
      },
    },
  },
};

export const Default = (args) => createBadge(args);
