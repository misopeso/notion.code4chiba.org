import ExtLink from '../../components/ext-link'

const banners: { title: string; image: string; href: string }[] = [
  {
    title: '「WEラブ赤ちゃん」プロジェクト',
    image: '/welove.png',
    href: 'https://woman.excite.co.jp/welovebaby/',
  },
]

export default function Banners() {
  return (
    <div className="px-8 py-4 w-1/3 border-gray-300 border-l border-solid">
      <ul>
        {banners.map(({ title, image, href }) => (
          <li key={title}>
            <ExtLink href={href}>
              <img src={image} alt={title} />
            </ExtLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
