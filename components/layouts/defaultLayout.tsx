import React from 'react'
import Header from '../landing/header'
import Footer from '../landing/smallFooter'
import CookieConsent from "react-cookie-consent";
import { acceptTrack,selectSettings } from '../../store/slices/settingsSlice'
import { useDispatch, useSelector } from 'react-redux';
import Script from 'next/script';
import { GA_TRACKING_ID } from '../../lib/gtag';


const defaultLayout = ({ children }) => {
  const settings = useSelector(selectSettings)
  const dispatch = useDispatch()
  // console.log(settings)
  return (
    <div>
          {settings.track &&
      <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
        });
    `}
    
      </Script>
      </>
      }
      <CookieConsent
      onAccept={() =>{
       dispatch( acceptTrack())
      }}
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#fffff", fontSize: "13px",background: "#6AA9C7" }}
      >This website uses cookies to enhance the user experience.</CookieConsent>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default defaultLayout