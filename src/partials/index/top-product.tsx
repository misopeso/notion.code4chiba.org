import { faExternalLinkAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExtLink from '../../components/ext-link'

export default function TopProduct() {
  return (
    <div className="px-4 md:px-8 pb-4 md:pb-8 md:w-1/2">
      <p className="tracking-widest mb-2">
        <FontAwesomeIcon icon={faGlasses} className="mr-2 text-md" />
        FEATURED
      </p>
      <img src="/papamama.jpg" alt="ちばこどもマップ" className="max-w-full" />
      <h2 className="font-bold mt-2 ml-4">
        <ExtLink href="https://papamama.code4chiba.org/">
          ちばこどもマップ
          <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 text-xs" />
        </ExtLink>
      </h2>
      <p className="leading-6 my-2 mx-4">
        保育施設や学童施設をマップから簡単に。定期的にデータ更新中！
      </p>
    </div>
  )
}
