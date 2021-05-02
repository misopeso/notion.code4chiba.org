import ExtLink from '../../components/ext-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

const banners: { title: string; image: string; href: string }[] = [
  {
    title: '「WEラブ赤ちゃん」プロジェクト',
    image: '/welove.png',
    href: 'https://woman.excite.co.jp/welovebaby/',
  },
]

export default function Banners() {
  return (
    <div>
      <p className="tracking-widest mb-2">
        <FontAwesomeIcon icon={faBullhorn} className="mr-2 text-md" />
        CHEER FOR
      </p>
      <ul className="my-4">
        {banners.map(({ title, image, href }) => (
          <li key={title} className="flex justify-center md:justify-start">
            <ExtLink href={href}>
              <img src={image} alt={title} />
            </ExtLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
