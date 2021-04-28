import { InferGetStaticPropsType } from 'next'
import Parser from 'rss-parser'

import Header from '../components/header'
import TopProduct from '../partials/index/top-product'
import Products from '../partials/index/products'
import DoAction from '../partials/index/do-action'
import MediumPosts from '../partials/index/medium-posts'
import JoinUs from '../partials/index/join-us'
import Banners from '../partials/index/banners'

const Index = ({ feeds }) => {
  return (
    <>
      <Header />
      <div className="mx-8 flex">
        <div className="w-2/3 flex flex-wrap">
          <TopProduct />
          <Products />
          <DoAction />
        </div>
        <MediumPosts posts={feeds} />
      </div>
      <div className="mx-8 mt-8 pt-8 flex border-gray-300 border-t border-solid">
        <JoinUs />
        <Banners />
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

  return {
    props: {
      feeds: feeds.items,
    },
  }
}

export default Index
