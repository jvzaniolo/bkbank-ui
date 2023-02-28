"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const Avatar_1 = require("./Avatar");
const meta = {
    title: 'Components/Avatar',
    parameters: {
        docs: {
            description: {
                component: 'Avatars are used to show a thumbnail representation of an individual or business in the interface.',
            },
        },
    },
    argTypes: {
        size: {
            description: 'Change the size of the avatar',
            table: {
                defaultValue: { summary: 'small' },
                type: {
                    summary: 'avatar-{md|lg}',
                    detail: '- small: @default\n- medium: avatar-md\n- large: avatar-lg',
                },
            },
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        color: {
            description: 'Change the color of the avatar',
            table: {
                defaultValue: { summary: 'unstyled' },
                type: {
                    summary: 'avatar-{primary|high}',
                    detail: '- unstyled: @default\n- high: avatar-high\n- primary: avatar-primary',
                },
            },
            options: ['unstyled', 'primary', 'high'],
            control: { type: 'radio' },
        },
        isActive: {
            description: 'Add an active state to the avatar',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'avatar-active' },
            },
        },
        content: {
            description: 'Change the content of the avatar',
            options: ['text', 'icon', 'image'],
            control: { type: 'radio' },
            table: {
                type: {
                    summary: 'content',
                    detail: '- text: any string\n- icon: <svg> or <i>\n- image: <img>',
                },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    render: args => (0, Avatar_1.createAvatar)(args),
    args: {
        size: 'medium',
        color: 'primary',
        isActive: false,
        content: 'text',
    },
};
