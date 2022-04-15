import '../styles/globals.css'
import type { AppProps } from 'next/app'
import App from "next/app";

import { SessionProvider } from "next-auth/react"
import DashboardLayout from '../components/layouts/dashboardLayout'
import DefaultLayout from '../components/layouts/defaultLayout'
import AdminLayout from '../components/layouts/adminLayout'
import { createContext, useEffect } from 'react'
import { getStrapiMedia } from "../lib/media";
import { collect } from '../lib/analytics/collect'

import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { fetchAPI } from '../lib/api';
import { Provider } from 'react-redux'

import store from '../store/index'
import log from '../lib/analytics';
import { GA_TRACKING_ID } from '../lib/gtag';
import { useSelector } from 'react-redux';
import { selectSettings } from '../store/slices/settingsSlice'


export const GlobalContext = createContext({});

function MyApp({ Component,
  pageProps: { session, ...pageProps }, router }: AppProps) {
  const { global } = pageProps;
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(session)
      log.event({
        event_name: "pageview_" + url
      })
      // gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    // return () => {
    //   router.events.off('routeChangeComplete', handleRouteChange)
    // }
  }, [router.events])
  // useEffect(()=>{
  //   collect()
  // },[])
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <>
        <SessionProvider session={session}>
          <Provider store={store}>
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          </Provider>
        </SessionProvider>
      </>
    )
  }
  if (router.pathname.startsWith("/admin")) {
    return (
      <>
        <SessionProvider session={session}>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
          {/* </GlobalContext.Provider> */}
        </SessionProvider>
      </>
    )
  }

  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          {/* <GlobalContext.Provider value={global.attributes}> */}
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
          {/* </GlobalContext.Provider> */}
        </Provider>
      </SessionProvider>
    </>
  )
}

// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
//   try {

//   } catch (error) {

//   }
//   const globalRes = await fetchAPI("/global", {
//     populate: {
//       favicon: "*",
//       defaultSeo: {
//         populate: "*",
//       },
//     },
//   });
//   // Pass the data to our page via props
//   return { ...appProps, pageProps: { global: globalRes.data } };
// };


export default MyApp
