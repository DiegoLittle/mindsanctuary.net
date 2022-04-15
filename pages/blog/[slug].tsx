import React from 'react'
import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo'
import { getStrapiMedia } from '../../lib/media';
import markdownToHtml from '../../lib/markdownToHtml'
import PostHeader from '../../components/post/post-header'


const Article = ({ article,content,slug }) => {
    let coverImage 
    if(article.attributes.image ){
        coverImage = article.attributes.image 
    }
    const seo = {
        metaTitle: article.attributes.title,
        metaDescription: article.attributes.description,
        shareImage: article.attributes.image,
        article: true,
    };
    return (
        <div className='mt-8'>
            <Seo seo={seo} />
            {/* <div
                id="banner"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
            >
            </div> */}
            <PostHeader
                title={article.attributes.title}
                coverImage={coverImage}
                date={article.attributes.published_at}
                author={article.attributes.author.data}
              />
            <div>
            <div className='hidden lg:block sticky w-12 top-1/3 float-right mr-40'>
              <div className='text-center text-gray-600'>Share</div>
              <a target="_blank" href={`https://twitter.com/intent/tweet?text=${article.attributes.title} By @AMindSanctuary%20https://mindsanctuary.net/blog/${slug}`}>
                <div id="twitter" className='cursor-pointer mx-1 bg-gray-50 hover:bg-gray-100 my-2 shadow-sm p-2 rounded-lg'>
                  <svg
                    id="twitter"
                    width="24"
                    height="24"
                    viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 187c100 62 227-7 225-130 10-7 19-16 26-27-10 5-20 8-31 9 11.4-7 20-17 24-29-10 6-20 10-33 13-43-41.3-100 3-88 47-43-2-80-23-106-54C10 40 15 71 39 85 30 84 20 82 15 78c0 26 18 46 41 51-8 2-15 3-23 1 6 20 26 36 48 36-20 16-47 24-76 21z" />
                  </svg>
                </div>
              </a>
              <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://mindsanctuary.net/blog/${slug}&title=${article.attributes.title}`}>
                <div id="linkedin" className='cursor-pointer mx-1 bg-gray-50 hover:bg-gray-100 my-2 shadow-sm hover:bg-gray p-2 rounded-lg hover:scale-105'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
              </a>
              <a  target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://mindsanctuary.net/blog/${slug}`}>
                <div id="facebook" className='cursor-pointer mx-1 bg-gray-50 hover:bg-gray-100 my-2 shadow-sm p-2 rounded-lg hover:scale-105'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" >    <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg>

                </div>
              </a>
            </div>
                <div>
                    <article className="md:mx-auto mx-8 max-w-2xl  prose md:prose lg:prose-xl mb-32" dangerouslySetInnerHTML={{ __html: content }}>
                    </article>
                        {/* <div>
                            {article.attributes.author.data.attributes.picture && (
                                <img
                                    src={getStrapiMedia(
                                        article.attributes.author.data.attributes.picture
                                    )}
                                    alt={
                                        article.attributes.author.data.attributes.picture.data
                                            .attributes.alternativeText
                                    }
                                    style={{
                                        position: "static",
                                        borderRadius: "20%",
                                        height: 60,
                                    }}
                                />
                            )}
                        </div>
                        <div>
                            <p >
                                By {article.attributes.author.data.attributes.name}
                            </p>
                            <p>
                                {article.attributes.published_at}
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
    )
}
export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });
    return {
        paths: articlesRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    
    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: ["image", "category", "author.picture"],
    });
    // const categoriesRes = await fetchAPI("/categories");
    const content = await markdownToHtml(articlesRes.data[0].attributes.content || '')    
    return {
        props: { 
            article: articlesRes.data[0],
            content:content,
            slug: params.slug
        },
        revalidate: 1,
    };
}

export default Article

