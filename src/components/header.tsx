import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExtLink from './ext-link'

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const socialIcons: { icon: IconDefinition; href: string }[] = [
  { icon: faFacebook, href: 'https://www.facebook.com/codeforchiba' },
  { icon: faTwitter, href: 'https://twitter.com/code4chiba' },
  { icon: faInstagram, href: 'https://www.instagram.com/codeforchiba' },
  { icon: faGithub, href: 'https://github.com/codeforchiba' },
]

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className="mt-4 mb-6 mx-8 flex justify-between">
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Code for Chiba</title>
        <meta
          name="description"
          content="Code for Chiba は、テクノロジーを活用して千葉市をよりよい街にする NPO法人です。"
        />
        <meta property="og:title" content="Code for Chiba" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="twitter:site" content="@code4chiba" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImageUrl} />
      </Head>
      <div>
        <Link href="/">
          <img src="/logo.png" height="56" width="240" alt="Code for Chiba" />
        </Link>
      </div>
      <ul>
        {socialIcons.map(({ icon, href }) => (
          <li key={href} className="inline-block mr-4">
            <ExtLink href={href}>
              <FontAwesomeIcon icon={icon} className="text-2xl text-pink-500" />
            </ExtLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
