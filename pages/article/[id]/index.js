import { server, server1 } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://meta-data-mnr.vercel.app/api?url=${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://testgnj.vercel.app/api/news`)

  const articles = await res.json()

  const ids = articles.map((article) => article.link)
  const paths = ids.map((link) => ({ params: { id: link.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.link)
//   const paths = ids.map((link) => ({ params: { link: link.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article
