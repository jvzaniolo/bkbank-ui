import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/@bkbank/ui@0.0.0-beta.21/dist/scripts.min.js"
        ></script>
      </body>
    </Html>
  )
}
