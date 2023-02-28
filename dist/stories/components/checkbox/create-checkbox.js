"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCheckbox = void 0;
const clsx_1 = __importDefault(require("clsx"));
function createCheckbox({ base, state, isDisabled, defaultChecked, indeterminate, }) {
    if (indeterminate) {
        document.addEventListener('DOMContentLoaded', () => {
            const checkbox = document.querySelector('.checkbox');
            if (checkbox)
                checkbox.indeterminate = true;
        });
    }
    else {
        document.addEventListener('DOMContentLoaded', () => {
            const checkbox = document.querySelector('.checkbox');
            if (checkbox)
                checkbox.indeterminate = false;
        });
    }
    return `
    <label class="inline-flex items-center">
      <input type="checkbox" class="${(0, clsx_1.default)(base, state)}"${isDisabled ? ' disabled' : ''}${defaultChecked ? ' checked' : ''} />
      <span>Checkbox</span>
    </label>
  `;
}
exports.createCheckbox = createCheckbox;
