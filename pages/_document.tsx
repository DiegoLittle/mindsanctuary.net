import { GA_TRACKING_ID } from '../lib/gtag';
import { DefaultSeo } from 'next-seo';
import {
  Html, Head, Main, NextScript,
} from 'next/document';



const document = ()=>{
  
  // async function getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }
  return (
    <Html lang="en">
    <Head>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://mindsanctuary.net',
        site_name: 'Mind Sanctuary',
      }}
      twitter={{
        handle: '@AMindSanctuary',
        site: '@mindsanctuary.net',
        cardType: 'summary_large_image',
      }}
    />
      {/* <script dangerouslySetInnerHTML={{
        __html: ` 
        let session = document.
        // Initialize the agent at application startup.
const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
.then(FingerprintJS => FingerprintJS.load())

// Get the visitor identifier when you need it.
fpPromise
.then(fp => fp.get())
.then(result => {
  // This is the visitor identifier:
  const visitorId = result.visitorId
  console.log(visitorId)
  console.log(result)
})
.catch(error => console.error(error))`}}></script> */}
      {/* <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      /> */}

    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  )
}
export default document