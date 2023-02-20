import DateFormatter from '../components/date-formatter'
import Link from 'next/link'
import Image from "next/image";

export default function PostPreview({
  title,
  date,
  slug,
  image,
}) {
  return (
    <div className={"drop-shadow-md shadow-white mb-3 w-full border border-neutral-500"}>
      {image && (<div className={"bg-black"}><Image src={image} alt={title} width={320} height={200} layout={"responsive"} className={"grayscale"}/></div>)}
      <div className="text-sm mb-2 p-4">
        <h3 className="mb-3 text-3xl font-semibold">
          <Link href={`${slug}`}>
            <a className={"no-underline hover:underline"}>{title}</a>
          </Link>
        </h3>
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}
