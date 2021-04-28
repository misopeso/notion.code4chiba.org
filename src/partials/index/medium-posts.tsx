import { DateTime } from 'luxon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import ExtLink from '../../components/ext-link'

const MediumPosts = ({ posts }) => {
  return (
    <div className="px-8 w-1/3 border-gray-300 border-l border-solid">
      <p className="tracking-widest mb-2">
        <FontAwesomeIcon icon={faBook} className="mr-2 text-md" />
        STORIES
      </p>
      <ul>
        {posts.map(({ title, link, pubDate }) => {
          const d = DateTime.fromRFC2822(pubDate)

          return (
            <li className="mb-4">
              <div className="text-gray-400">
                <span className="text-lg font-bold">{d.toFormat('y/L/d')}</span>
              </div>
              <ExtLink href={link} className="inline-block ml-2">
                {title}
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="ml-1 text-xs"
                />
              </ExtLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MediumPosts
