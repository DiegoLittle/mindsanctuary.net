import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {

  function getAspectRatio(width,height){
    return width/height
  }

  function downSizeImage(width,height){
    let AR = getAspectRatio(width,height)
    return {width:(width*.1),height:(height*.1)}
  }
  

  const image = (
    <div className={"w-3/4 h-2/6 md:w-1/4 mx-auto"} >
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      quality={75}
      className={' shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg'
      }
      // layout="responsive"
      width={downSizeImage(width,height).width}
      height={downSizeImage(width,height).height}
    />
    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}