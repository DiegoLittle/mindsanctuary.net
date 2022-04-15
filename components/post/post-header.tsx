import { getStrapiMedia } from '../../lib/media'
import { monthDayYear } from '../../lib/util'
import Avatar from './avatar'
// import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  let author_image = getStrapiMedia(author.attributes.picture)
  let imageUrl
  if(coverImage.data){
    imageUrl = getStrapiMedia(coverImage);
  }

  // console.log(author.attributes)
  // console.log("Test",author)
  return (
    <div className="">
      {/* <PostTitle>{title}</PostTitle> */}
      <div className="mb-8 md:mb-16 sm:mx-0">
        {coverImage.data &&
        <CoverImage title={title} src={imageUrl} height={coverImage.data.attributes.height} width={coverImage.data.attributes.width} />
      }
      </div>
      <div className="max-w-2xl ml-8 md:ml-16 lg:ml-28 xl:ml-80 2xl:ml-[35rem] 2xl">
        <div className="block md:hidden mb-6">
          <Avatar name={author.attributes.name} picture={author_image} />
        </div>
        <div className="hidden md:block md:mb-8">
        <Avatar name={author.attributes.name} picture={author_image} />
      </div>
        <div className="mb-6 text-lg">
          {monthDayYear(date)}
          {/* <DateFormatter dateString={date} /> */}
        </div>
      </div>
    </div>
  )
}