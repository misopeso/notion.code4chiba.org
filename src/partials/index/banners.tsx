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
    <div className="mt-4">
      <p className="tracking-widest mb-2">
        <FontAwesomeIcon icon={faBullhorn} className="mr-2 text-md" />
        CHEER FOR
      </p>
      <ul>
        {banners.map(({ title, image, href }) => (
          <li key={title}>
            <ExtLink href={href}>
              <img src={image} alt={title} />
            </ExtLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
