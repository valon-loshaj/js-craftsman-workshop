import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = "The JS Craftman's Workshop"
export const siteTitle = "The JS Craftman's Workshop"

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/vl-logo.png" />
                <meta
                    name="The JS Craftman's Workshop"
                    content="Welcome to The JS Craftman's Workshop!"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <>
                    <Image
                        priority
                        src="/images/js-workshop-logo.png"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt=""
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            </header>
            <main>{children}</main>
        </div>
    )
}
