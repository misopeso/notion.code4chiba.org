import { faExternalLinkAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExtLink from '../../components/ext-link'

export default function TopProduct() {
  return (
    <div className="px-8 pb-8 w-1/2">
      <p className="tracking-widest">
        <FontAwesomeIcon icon={faGlasses} className="mr-2 text-md" />
        FEATURED
      </p>
      <img
        src="/covid-19.png"
        alt="千葉市非公式 新型コロナウィルス感染症対策サイト"
        className="max-w-full"
      />
      <h2 className="font-bold mt-2 ml-4">
        <ExtLink href="https://stopcovid19.code4chiba.org/">
          新型コロナウィルス感染症対策サイト
          <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 text-xs" />
        </ExtLink>
      </h2>
      <p className="leading-6 my-2 mx-4">
        千葉市が公開しているオープンデータを元に、現在の状況をわかりやすくお伝えします。
      </p>
    </div>
  )
}
