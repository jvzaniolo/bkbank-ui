import dedent from 'ts-dedent';
import mdx from './Breadcrumb.mdx';

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    docs: {
      page: mdx,
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
    <nav aria-label="Breadcrumb" className="breadcrumb">
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
