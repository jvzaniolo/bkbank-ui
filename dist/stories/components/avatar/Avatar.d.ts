export type AvatarProps = {
    size: 'small' | 'medium' | 'large';
    color?: 'primary' | 'high' | 'unstyled';
    isActive?: boolean;
    content?: 'icon' | 'text' | 'image';
};
export declare function createAvatar({ size, color, isActive, content, }: AvatarProps): string;
