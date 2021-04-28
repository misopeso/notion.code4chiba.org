import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExtLink from '../../components/ext-link'

const products: {
  title: string
  description: string
  image: string
  href: string
}[] = [
  {
    title: 'ちばこどもマップ',
    description: 'マップから簡単に。',
    image: '/papamama.jpg',
    href: 'https://papamama.code4chiba.org/',
  },
  {
    title: 'IODD 2018',
    description: '区対抗戦の軌跡。',
    image: '/iodd2018.jpg',
    href: 'https://iodd2018.code4chiba.org/',
  },
]

export default function Products() {
  return (
    <div className="px-8 pt-4 pb-8 w-1/2">
      {products.map(({ title, description, image, href }) => (
        <div key={title} className="flex py-4">
          <div>
            <img src={image} alt={title} className="w-32 rounded-xl" />
          </div>
          <div className="ml-4">
            <h2 className="font-bold">
              <ExtLink href={href}>
                {title}
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="ml-1 text-xs"
                />
              </ExtLink>
            </h2>
            <p className="leading-6 my-2">{description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
