import Document, { Html, Head, Main, NextScript } from "next/document";

const SNIPPET = `
window.$crisp=[];window.CRISP_WEBSITE_ID="ac3665f1-2eb7-44ce-8139-3b0a16d286c1";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Inject the Segment snippet into the <head> of the document  */}
          <script dangerouslySetInnerHTML={{ __html: SNIPPET }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
