"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const create_switch_1 = require("./create-switch");
const meta = {
    title: 'Components/Switch',
    render: args => (0, create_switch_1.createSwitch)(args),
    args: {
        size: 'small',
        isDisabled: false,
    },
    argTypes: {
        size: {
            table: { defaultValue: { summary: 'small' } },
            options: ['small', 'medium'],
            control: {
                type: 'radio',
            },
            description: 'Set the size of the switch.<br>Class: `.switch-md`',
        },
        isDisabled: {
            description: 'Set the switch to disabled.<br>Targets the `disabled` attribute from the input.',
            table: { defaultValue: { summary: 'false' } },
            control: {
                type: 'boolean',
            },
        },
    },
};
exports.default = meta;
exports.Default = {};
