import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} width={1120}  height={700} layout="responsive" />
        </div>
      )}
      <h1 className={"text-4xl md:text-6xl font-semibold"}>{title}</h1>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}
