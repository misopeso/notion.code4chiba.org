import Header from '../components/header'
import TopProduct from '../partials/index/top-product'
import Products from '../partials/index/products'
import DoAction from '../partials/index/do-action'
import MediumPosts from '../partials/index/medium-posts'
import JoinUs from '../partials/index/join-us'
import Banners from '../partials/index/banners'

export default function Index() {
  return (
    <>
      <Header />
      <div className="mx-8 flex">
        <div className="w-2/3 flex flex-wrap">
          <TopProduct />
          <Products />
          <DoAction />
        </div>
        <MediumPosts />
      </div>
      <div className="mx-8 mt-8 pt-8 flex border-gray-300 border-t border-solid">
        <JoinUs />
        <Banners />
      </div>
    </>
  )
}
