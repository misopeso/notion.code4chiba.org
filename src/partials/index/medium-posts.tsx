import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default function MediumPosts() {
  return (
    <div className="px-8 w-1/3 border-gray-300 border-l border-solid">
      <p className="tracking-widest">
        <FontAwesomeIcon icon={faBook} className="mr-2 text-md" />
        STORIES
      </p>
      <p>ほげ！</p>
    </div>
  )
}
