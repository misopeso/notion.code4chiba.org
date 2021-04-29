import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

export default function Wanted() {
  return (
    <div>
      <h2 className="tracking-widest mb-2">
        <FontAwesomeIcon icon={faAsterisk} className="mr-2 text-md" />
        WANTED!
      </h2>
      <p>準備中。。。</p>
    </div>
  )
}
