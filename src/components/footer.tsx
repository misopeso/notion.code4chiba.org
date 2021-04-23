import { useRef } from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'

export default function Footer() {
  const formRef = useRef<ReactTypeformEmbed>(null)
  const openForm = () => {
    formRef.current.typeform.open()
  }

  return (
    <>
      <footer>
        <img src="/icon.png" width="100" />
        <ul>
          <li>
            <span onClick={openForm}>問い合わせ</span>
          </li>
        </ul>
        <address>Copyright &copy; 2021 Code for Chiba</address>
      </footer>
      <ReactTypeformEmbed
        url="https://codeforchiba.typeform.com/to/qzQYxn"
        popup={true}
        ref={formRef}
      />
    </>
  )
}
