import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body data-theme="mtTheme">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
