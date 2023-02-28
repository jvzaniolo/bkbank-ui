"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAvatar = void 0;
const clsx_1 = __importDefault(require("clsx"));
const sizes = {
    small: '',
    medium: 'avatar-md',
    large: 'avatar-lg',
};
const colors = {
    unstyled: '',
    primary: 'avatar-primary',
    high: 'avatar-high',
};
function createAvatar({ size = 'small', color = 'unstyled', isActive = false, content = 'text', }) {
    return `
    <div class="${(0, clsx_1.default)('avatar', sizes[size], colors[color], isActive && 'avatar-active')}">
      ${content === 'icon'
        ? `<i data-feather="circle"></i>`
        : content === 'image'
            ? '<img src="https://randomuser.me/api/portraits/med/men/86.jpg" alt="avatar" />'
            : 'RM'}
    </div>
  `;
}
exports.createAvatar = createAvatar;
