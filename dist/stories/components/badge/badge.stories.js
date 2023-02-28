"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const clsx_1 = __importDefault(require("clsx"));
const meta = {
    title: 'Components/Badge',
    parameters: {
        docs: {
            description: {
                component: 'The `badge` component is used to represent a notification. Badges should **always have a text content**.',
            },
        },
    },
    args: {
        base: 'badge',
        color: undefined,
        content: '32',
    },
    argTypes: {
        base: {
            description: 'Base class for the badge.',
            control: { type: '' },
            table: { defaultValue: { summary: 'badge' } },
        },
        color: {
            description: 'Available colors for the badge.',
            options: [undefined, 'badge-highlight'],
            control: { type: 'radio', labels: { undefined: 'unstyled' } },
        },
        content: {
            description: 'Change the content of the badge in the example.',
            control: { type: 'text' },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        color: 'badge-highlight',
    },
    render: args => `<div class="${(0, clsx_1.default)(args.base, args.color)}">${args.content}</div>`,
};
