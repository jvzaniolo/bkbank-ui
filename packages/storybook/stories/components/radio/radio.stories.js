import { createRadio } from './create-radio';

export default {
  title: 'Components/Radio',
  parameters: {
    docs: {
      description: {
        component:
          'To use the radio component, add the `.radio` class to the `input` element.<br>For the label, you can either use a `span` or `label` tag or apply the `.radio-label` class to another element.<br>Base class: `.radio`',
      },
    },
  },
  args: {
    isDisabled: false,
  },
  argTypes: {
    isDisabled: {
      description:
        'Disables the radio input.<br><br>Use the `disabled` attribute.',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export const Radio = args => createRadio(args);

/**
 * To use another element as the radio input label, add the `.radio-label` class to it and the element will inherit the styles.
 */
export const CustomLabel = () => `
<label class="inline-flex items-center">
  <input id="radio" type="radio" class="radio" />
  <div class="radio-label">I'm a &lt;div/&gt;</div>
</label>
`;
