import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
            />
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,900;1,600&display=swap"
            rel="stylesheet"
            />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
            <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/android-chrome-192x192.png"
            />
            <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
            <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/android-chrome-512x512.png"
            />
            <link rel="icon" href="/favicon.png" />
            <link rel="apple-touch-icon" href="/favicon.png" />
            <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" href="/apple-touch-icon.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head >
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument