import { fetchAPI } from "../../lib/api";
import Image from '../../components/image'
import Link from 'next/link'
import Head from "next/head";



/* This example requires Tailwind CSS v2.0+ */

export default function Example({ articles }) {

    return (
        <>
                <Head>
          <title>Blog | Mind Sanctuary</title>
          <meta property="og:title" content="Blog | Mind Sanctuary" />
          <meta name="twitter:title" content="Blog | Mind Sanctuary" />
          <meta name="description" content="Learn more about, psychology, mental health, self-care, and more" />
          <meta property="og:description" content="Learn more about, psychology, mental health, self-care, and more" />
          <meta name="twitter:description" content="Learn more about, psychology, mental health, self-care, and more" />
        </Head>
        <div className="xl:mx-64 lg:mx-32 md:mx-8 mx-2">
            <div className="text-center mb-8">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">The Mind Sanctuary Blog</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Learn more about, psychology, mental health, self-care, and more</p>
                </div>
            <div className="w-full hidden md:flex">
                {articles[0]&&
                <a href={`${process.env.NEXT_PUBLIC_HOST}/blog/${articles[0].attributes.slug}`}>
                    <div className="w-1/2 h-1/2 mx-4 cursor-pointer">
                        { articles[0].attributes.image.data &&
                        <div className="w-3/4">
                            <Image image={articles[0].attributes.image} />
                        </div>}
                        <h1 className="text-xl lg:text-4xl my-4">{articles[0].attributes.title}</h1>
                        <div className="md:flex">
                            <p className=" font-normal text-base text-gray-600">{articles[0].attributes.description}</p>
                        </div>
                    </div>
                </a>
                }
                <div className="w-1/2 mx-4 lg:mb-12">
                    {articles[1] &&
                        <Link href={`${process.env.NEXT_PUBLIC_HOST}/blog/${articles[1].attributes.slug}`}>
                            <div className="p-2 cursor-pointer">
                                <h1 className="text-2xl mb-3">{articles[1].attributes.title}</h1>
                                <p className="text-gray-600 md:text-sm lg:text-base">{articles[1].attributes.description}</p>
                            </div>
                        </Link>
                    }
                    {articles[3] &&
                        <Link href={`${process.env.NEXT_PUBLIC_HOST}/blog/${articles[3].attributes.slug}`}>
                            <div className="p-2 cursor-pointer">
                                <h1 className="text-2xl mb-3">{articles[3].attributes.title}</h1>
                                <p className="text-gray-600 md:text-sm lg:text-base">{articles[3].attributes.description}</p>
                            </div>
                        </Link>
                    }
                </div>
            </div>
            {articles.map((article) =>
            <Link href={`${process.env.NEXT_PUBLIC_HOST}/blog/${article.attributes.slug}`}>
                <div className="md:hidden rounded-lg m-2 shadow-lg">
                    {article.attributes.image.data &&
                    <Image className="" image={article.attributes.image} />
                }
                    <div className=" p-4">
                        <h1 className="text-2xl">{article.attributes.title}</h1>
                        <p>{article.attributes.description}</p>
                    </div>

                </div>
                </Link>
            )}


            {/* {articles.map((article) =>

            )} */}

        </div>
        </>

    )
}



export async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
        fetchAPI("/articles", { populate: ["image", "category"] }),
        fetchAPI("/categories", { populate: "*" }),
        fetchAPI("/homepage", {
            populate: {
                hero: "*",
                seo: { populate: "*" },
            },
        }),
    ]);

    // console.log(articlesRes.data[1].attributes.content)

    return {
        props: {
            articles: articlesRes.data,
            categories: categoriesRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    };
}