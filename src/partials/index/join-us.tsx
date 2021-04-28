import Link from 'next/link'
import {
  faAngleDoubleLeft,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExtLink from '../../components/ext-link'

export default function JoinUs() {
  return (
    <div className="pb-8 px-8 w-2/3">
      <h1 className="text-3xl my-2">参加しよう！</h1>
      <p className="my-2">
        Code for Chiba について、まずはこちらをご覧ください！
      </p>
      <div className="text-right text-gray-500 tracking-widest">
        <FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-2" />
        <Link href="/about">ABOUT</Link>
      </div>
      <p className="my-2">
        そして、Code for Chiba の活動に興味を持ったら参加してみましょう！
      </p>
      <p className="my-2">
        すぐに始められるのが、Slack 上での参加です。Code for Chiba
        のオンライン上でのコミュニケーションは Slack 上で行われています。
        まずは、こちらに参加してみましょう！
      </p>
      <div className="text-right text-gray-500 tracking-widest">
        <FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-2" />
        <ExtLink href="https://forms.gle/2yRKsreiKLJiheAN8">
          Slack に参加する
          <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 text-sm" />
        </ExtLink>
      </div>
      <p className="my-2">
        活動の様子を見てみたい！ 話をしてみたい！ 方は、
        毎月開催しているイベントにご参加ください。どなたでも参加することができます。
      </p>
      <div className="text-right text-gray-500 tracking-widest">
        <FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-2" />
        <Link href="/events">EVENTS</Link>
      </div>
    </div>
  )
}
