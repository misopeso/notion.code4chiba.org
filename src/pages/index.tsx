import { InferGetStaticPropsType } from 'next'
import Parser from 'rss-parser'

import Header from '../components/header'
import TopProduct from '../partials/index/top-product'
import Products from '../partials/index/products'
import DoAction from '../partials/index/do-action'
import MediumPosts from '../partials/index/medium-posts'
import JoinUs from '../partials/index/join-us'
import Banners from '../partials/index/banners'
import Wanted from '../partials/index/wanted'

const Index = ({ feeds }) => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap md:mx-8 pb-4 md:pb-8">
        <div className="w-full md:w-2/3 flex flex-wrap">
          <TopProduct />
          <Products />
          <DoAction />
        </div>
        <MediumPosts posts={feeds} />
      </div>
      <div className="md:mx-8 pt-4 md:pt-8 flex flex-wrap border-gray-300 border-t border-solid">
        <JoinUs />
        <div className="px-4 md:px-8 py-4 w-full md:w-1/3 border-gray-300 border-t md:border-l md:border-t-0 border-solid">
          <Wanted />
          <Banners />
        </div>
      </div>
    </>
  )
}

const parser = new Parser()
type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const feeds = await parser.parseURL(
    'https://medium.com/feed/the-code-for-chiba-network'
  )
  feeds.items.splice(5)

  return {
    props: {
      feeds: feeds.items,
    },
  }
}

export default Index
