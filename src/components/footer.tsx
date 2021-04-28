import { useRef } from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'

export default function Footer() {
  const formRef = useRef<ReactTypeformEmbed>(null)
  const openForm = () => {
    formRef.current.typeform.open()
  }

  return (
    <>
      <footer className="mt-8 mb-4 flex flex-col">
        <div className="mt-4 flex justify-center">
          <img src="/icon.png" width="80" />
        </div>
        <ul className="my-4 flex justify-center">
          <li>
            <span onClick={openForm} className="cursor-pointer">
              問い合わせ
            </span>
          </li>
        </ul>
        <address className="text-center not-italic text-sm">
          Copyright &copy; 2021 NPO法人 Code for Chiba
        </address>
      </footer>
      <ReactTypeformEmbed
        url="https://codeforchiba.typeform.com/to/qzQYxn"
        popup={true}
        ref={formRef}
        style={{ display: 'none' }}
      />
    </>
  )
}
