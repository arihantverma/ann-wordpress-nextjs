import * as APIEndpoints from '@/utils/api-endpoints'
import objectUndefinedToNull from '@/utils/common/object-undefined-to-null'
import fetch from 'isomorphic-unfetch'

export default function Post({ post = {} }) {
  return (
    <div>
      <code>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </code>
    </div>
  )
}

export async function getStaticPaths() {
  const postsData = await fetch(APIEndpoints.posts).then(r => {
    return r.json()
  })

  const postsList = postsData.posts.filter(post =>
    Object.keys(post.categories || []).includes('Work'),
  )

  const paths = postsList.map(post => {
    return { params: { slug: post.slug } }
  })

  const sanitizedPaths = objectUndefinedToNull(paths)

  return {
    paths: sanitizedPaths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(params.slug)

  console.log(APIEndpoints.getPostBySlug(params.slug))

  const postData = await fetch(APIEndpoints.getPostBySlug(params.slug)).then(
    r => {
      return r.json()
    },
  )

  const {
    date,
    modified,
    title,
    excerpt,
    tags,
    content,
    featured_image,
    likes_enabled,
    like_count,
    format,
  } = postData

  const neededData = {
    date,
    modified,
    title,
    excerpt,
    content,
    featured_image,
    likes_enabled,
    like_count,
    format,
    // global_ID,
    tags: tags ? Object.keys(tags) : null,
  }

  const sanitizedNeededData = objectUndefinedToNull(neededData)

  return {
    props: {
      post: sanitizedNeededData,
    },
  }
}
