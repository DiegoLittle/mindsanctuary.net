import Head from "next/head";
import Link from "next/link";
// import Footer from '../components/landing/smallFooter'

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Example() {
    return (
        <>
        <Head>
          <title>About Mind Sanctuary</title>
          <meta property="og:title" content="About Mind Sanctuary" />
          <meta name="twitter:title" content="About Mind Sanctuary" />
          <meta name="description" content="Mind Sanctuary is mental health app designed to be a source of comfort and healing for those struggling with mental illness by providing an easily accessible place to recenter your mind in times of stress and pain." />
          <meta property="og:description" content="Mind Sanctuary is mental health app designed to be a source of comfort and healing for those struggling with mental illness by providing an easily accessible place to recenter your mind in times of stress and pain." />
          <meta name="twitter:description" content="Mind Sanctuary is mental health app designed to be a source of comfort and healing for those struggling with mental illness by providing an easily accessible place to recenter your mind in times of stress and pain." />
        </Head>
        
        <div className="relative py-16 bg-white overflow-hidden">
            
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>

                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            About us
                        </span>
                    </h1>
                    <p className="mt-8 text-xl text-gray-500 leading-8 text-center md:text-left">
                        Many people can't access therapy, are too busy, or simply need an immediate source of wellness that scheduled appointments can't provide.  Mind Sanctuary is mental health app designed to be a source of comfort and healing for those struggling with mental illness by providing an easily accessible place to recenter your mind in times of stress and pain. We believe that technology can be used to provide a unique solution that classic psychotherapy can't.
                    </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto text-center md:text-left">
                    <span className="block text-base text-fountain-blue-600 font-semibold tracking-wide uppercase">
                        What we provide
                    </span>
                    <p>
                        We provide a central platform for users to access several tools for managing their mental health. The first tool allows users to track their moods on a calendar and journal about their moods. This allows the user to have a place to record and find insights into the patterns of their moods. Journaling is also a great outlet for working through painful feelings especially under the guidance of Cognitive Behavioral Therapy. The second resource we provide are psychometric assesments which are a collection of self-assesments that users can take to gain a deeper insight into their health and psyche. Often times many people don't know if they really have mental illnesses that need further assistance like severe depression and anxiety so we aim to guide the user to get the proper help.
                    </p>
                    <span className="block text-base text-fountain-blue-600 font-semibold tracking-wide uppercase">
                        Our vision for the future
                    </span>
                    <p>
                        We aim to continue developing more features that cover a wider range of needs as well as improve and add to our existing features. We want the product to provide an experience that is custom tailored to fit each unique user and their needs. Some features we have in mind include a chatbot that can help guide you through Cognitive Behavioral Therapy as you work through your emotions. We also hope to create a collection of exercises and activities that can help improve the users emotional intelligence and coping skills.
                    </p>
                   
                    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:py-4 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to dive in?</span>
                            <span className="block">Sign up today.</span>
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex rounded-md shadow">
                                <Link href="/auth/signup">
                                    <button
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-fountain-blue-400 to-fountain-blue-500 text-white hover:from-fountain-blue-500"
                                    >
                                        Get started
                                    </button>
                                </Link>
                            </div>
                            <div className="ml-3 inline-flex">
                                <Link href="/demo">
                                    <button
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base rounded-md bg-gradient-to-r from-fountain-blue-400 to-fountain-blue-500 text-white font-medium hover:from-fountain-blue-500"
                                    >
                                        Try a demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}