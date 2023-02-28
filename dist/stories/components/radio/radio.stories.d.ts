import type { StoryObj } from '@storybook/html';
import type { RadioArgs } from './create-radio';
declare const meta: {
    title: string;
    render: (args: RadioArgs) => string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    args: {
        isDisabled: false;
    };
    argTypes: {
        isDisabled: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
    };
};
type Story = StoryObj<RadioArgs>;
export default meta;
export declare const Radio: Story;
/**
 * To use another element as the radio input label, add the `.radio-label` class to it and the element will inherit the styles.
 */
export declare const CustomLabel: Story;
