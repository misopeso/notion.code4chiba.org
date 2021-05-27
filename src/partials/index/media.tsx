import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChessQueen,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
import ExtLink from '../../components/ext-link'

export default function Media() {
  return (
    <div className="mt-8">
      <p className="tracking-widest mb-2">
        <FontAwesomeIcon icon={faChessQueen} className="mr-2 text-md" />
        MEDIA
      </p>
      <ul>
        <li className="mb-4">
          <div className="text-gray-400">
            <span className="text-lg font-bold">2021/5/20</span>
          </div>
          <ExtLink
            href="https://sorabatake.jp/20241/"
            className="inline-block ml-2"
          >
            メディア「宙畑」にインタビュー記事が掲載されました！
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="ml-1 text-xs"
            />
          </ExtLink>
        </li>
      </ul>
    </div>
  )
}
