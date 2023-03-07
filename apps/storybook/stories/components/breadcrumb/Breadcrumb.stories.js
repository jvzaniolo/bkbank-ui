import dedent from 'ts-dedent';

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    docs: {
      source: {
        format: true,
        type: 'code',
        language: 'html',
      },
    },
  },
};

export const Default = {
  render: () => (
    <nav aria-label="Breadcrumb" className="tw-breadcrumb">
      <ol>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Library</a>
        </li>
        <li>
          <a aria-current="page">Data</a>
        </li>
      </ol>
    </nav>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <nav aria-label="Breadcrumb" class="breadcrumb">
            <ol>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Library</a>
              </li>
              <li>
                <a aria-current="page">Data</a>
              </li>
            </ol>
          </nav>
        `,
      },
    },
  },
};
