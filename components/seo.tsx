import Head from "next/head";
import { useContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { GlobalContext } from "../pages/_app";


const Seo = ({ seo }) => {
  // const { defaultSeo, siteName } = useContext(GlobalContext);
  let defaultSeo={}
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };
  let shareImage = (seoWithDefaults.shareImage?seoWithDefaults.shareImage:"")
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    metaTitle: `${'Mind Sanctuary'} | ${'Mind Sanctuary'}`,
    // Get full image URL
    shareImage: shareImage,
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;