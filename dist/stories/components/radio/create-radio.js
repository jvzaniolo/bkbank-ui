"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRadio = void 0;
const clsx_1 = __importDefault(require("clsx"));
function createRadio({ isDisabled = false }) {
    return `
    <div class="flex gap-3">
      <label class="inline-flex items-center">
        <input id="superman" name="radio" type="radio" class="${(0, clsx_1.default)('radio')}"${isDisabled ? ' disabled' : ''} />
        <span>Superman</span>
      </label>
      <div class="inline-flex items-center">
        <input id="batman" name="radio" type="radio" class="${(0, clsx_1.default)('radio')}"${isDisabled ? ' disabled' : ''} />
        <label for="batman">Batman</label>
      </div>
    </div>
  `;
}
exports.createRadio = createRadio;
