"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const postcss_1 = __importDefault(require("postcss"));
const postcss_js_1 = __importDefault(require("postcss-js"));
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
function objectifyFile(file) {
    const css = fs_1.default.readFileSync(path_1.default.resolve(__dirname, file), 'utf8');
    const root = postcss_1.default.parse(css);
    return postcss_js_1.default.objectify(root);
}
const plugin = (0, plugin_1.default)(function ({ addBase, addComponents }) {
    addBase(objectifyFile('./core/base.css'));
    addComponents(objectifyFile('./core/components.css'));
    // addUtilities();
    // addVariant();
}, {
    theme: {
        extend: Object.assign({}, require('./core/theme')),
    },
    // Only include the plugins if we want to expose their classes
    // plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
});
module.exports = plugin;
