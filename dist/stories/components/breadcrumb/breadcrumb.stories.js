"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const meta = {
    title: 'Components/Breadcrumb',
    parameters: {
        docs: {
            description: {
                component: "The breadcrumb component is used to show the current page's location within a navigational hierarchy that automatically adds separators via CSS.<br>This component follows the [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).",
            },
        },
    },
    render: () => `
    <nav aria-label="breadcrumb">
      <ol>
        <li><a href="../../">Home</a></li>
        <li><a href="../">Library</a></li>
        <li><a href="" aria-current="page">Data</a></li>
      </ol>
    </nav>
  `,
};
exports.default = meta;
exports.Default = {};
