/* eslint-disable @next/next/no-script-in-document */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico'></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Lato&display=swap'
            rel='stylesheet'
          />
          <meta property='fb:page_id' content='2677253322537762' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
