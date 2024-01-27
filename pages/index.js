import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p>Whoops, how'd you end up here? You must have been looking for...</p>
                    <a href="/jsCraftsmansWorkshop">JS Craftsman's Workshop</a>
                </section>
            </Layout>
        </>
    )
}
