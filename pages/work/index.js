import Layout from '@/components/Layout'
import Link from '@/components/Link'
import * as APIEndpoints from '@/utils/api-endpoints'
import objectUndefinedToNull from '@/utils/common/object-undefined-to-null'
import getBlurDataURL from '@/utils/common/shimmer'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'
import { useRouter } from 'next/router'

// import useImage from '@/hooks/useImage'

export default function Blogs({ postsList = [] }) {
  const { pathname = '' } = useRouter()
  // const [imgError, onError] = useImage();

  return (
    <Layout>
      <ul className="mt-10 md:mt-12 flex flex-col space-y-4 -mx-6">
        {postsList.map((post, index) => {
          const { slug, featured_image, excerpt } = post

          return (
            <li
              key={post.title}
              className="border-b-4 pt-6 pb-10 border-gray-300 border-dotted hover:shadow-2xl px-6 transition-shadow"
            >
              <Link key={slug} href={`${pathname}/${slug}`}>
                {featured_image && (
                  <div>
                    <Image
                      src={featured_image}
                      alt="change this"
                      layout="intrinsic"
                      width={4062}
                      height={2829}
                      placeholder="blur"
                      blurDataURL={getBlurDataURL(4062, 2829)}
                      quality={100}
                      objectFit="contain"
                      {...(index <= 3 ? { priority: true } : {})}
                    />
                  </div>
                )}

                <h2 className="text-2xl mt-2 mb-1 font-semibol">
                  {post.title}
                </h2>
              </Link>

              {excerpt && (
                <div
                  className="text-lg"
                  dangerouslySetInnerHTML={{
                    __html: excerpt,
                  }}
                />
              )}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  // TODO: retry + error logging
  const postsData = await fetch(APIEndpoints.posts).then(r => {
    return r.json()
  })

  const postsList = postsData.posts
    .filter(post => Object.keys(post.categories || []).includes('Work'))
    .map(post => {
      const { date, modified, title, excerpt, tags, slug, featured_image } =
        post

      const neededData = {
        date,
        modified,
        title,
        excerpt,
        slug,
        featured_image,
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
