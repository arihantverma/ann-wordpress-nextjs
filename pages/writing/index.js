import Layout from '@/components/Layout'
import Link from '@/components/Link'
import * as APIEndpoints from '@/utils/api-endpoints'
import objectUndefinedToNull from '@/utils/common/object-undefined-to-null'
// import axios from 'axios'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

export default function Blogs({ postsList = [] }) {
  const { pathname = '' } = useRouter()

  return (
    <Layout>
      <ul>
        {postsList.map(post => {
          return (
            <Link key={post.slug} href={`${pathname}/${post.slug}`}>
              <li>{post.title}</li>
            </Link>
          )
        })}
      </ul>
    </Layout>
  )
}

// export function getStaticPaths() {
//   return {
//     paths:
//   }
// }
export async function getStaticProps() {
  // TODO: retry + error logging
  const postsData = await fetch(APIEndpoints.posts).then(r => {
    return r.json()
  })

  const postsList = postsData.posts
    .filter(post => Object.keys(post.categories || []).includes('Blog Post'))
    .map(post => {
      const { date, modified, title, excerpt, tags, slug } = post

      const neededData = {
        date,
        modified,
        title,
        excerpt,
        slug,
        // global_ID,
        tags: tags ? Object.keys(tags) : null,
      }

      const retVal = objectUndefinedToNull(neededData)

      return retVal
    })

  /**
   * additonal for each post
   *
   * likes_enabled
   * like_count
   * featured_image
   * format?
   *
   */

  return {
    props: {
      postsList,
    },
  }
}
