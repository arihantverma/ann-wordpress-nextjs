// import fetch from 'isomorphic-unfetch'
import * as APIEndpoints from '@/utils/api-endpoints'
// import axios from 'axios'
import fetch from 'isomorphic-unfetch'

export default function Blogs({ data }) {
  return (
    <code>
      <div
        dangerouslySetInnerHTML={{
          __html: data.posts[0].content,
        }}
      />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </code>
  )
}

export async function getStaticProps() {
  const data = await fetch(APIEndpoints.posts).then(r => {
    return r.json()
  })

  return {
    props: {
      data,
    },
  }
}
