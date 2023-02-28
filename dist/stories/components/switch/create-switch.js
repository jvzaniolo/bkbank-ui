"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwitch = void 0;
const clsx_1 = __importDefault(require("clsx"));
function createSwitch({ size = 'small', isDisabled = false, }) {
    return `
    <div class="${(0, clsx_1.default)('switch', {
        'switch-md': size === 'medium',
    })}">
      <input type="checkbox" id="id"${isDisabled ? ' disabled' : ''}>
      <label for="id">Switch</label>
    </div>
  `;
}
exports.createSwitch = createSwitch;
