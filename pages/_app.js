// import Header from '@/components/Header'
// import Layout from '@/components/Layout'
import '@/styles/global.css'

function Application({ Component, pageProps }) {
  return (
    // <Layout>
    //   <Header />
    <Component {...pageProps} />
    // </Layout>
  )
}

export default Application
