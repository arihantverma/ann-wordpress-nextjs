import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import '@/styles/global.css'

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <div className="max-w-[1200px] md:w-2/3 mx-auto text-gray-800">
        <Footer />
      </div>
    </Layout>
  )
}

export default Application
