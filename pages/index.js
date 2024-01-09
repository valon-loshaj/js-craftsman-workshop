import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title className={styles.title}>The JS Craftman's Workshop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to The JS Craftman's Workshop!
                </h1>
				<Image
					className={styles.logo}
					src="/images/js-workshop-logo.png" // Route of the image file
					height={144} // Desired size with correct aspect ratio
					width={144} // Desired size with correct aspect ratio
					alt="JS Craftman's Workshop Logo"
				/>
                <p className={styles.description}>
                    Just a few things I have tinkered with.
                </p>

                <div className={styles.grid}>
                    <a href="https://leetcode.com" className={styles.card}>
                        <h3>Problem #1 &rarr;</h3>
                        <p>
                            Coming soon!
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Problem #2 &rarr;</h3>
                        <p>
                            Coming soon!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h3>Problem #4 &rarr;</h3>
                        <p>
							Coming soon!
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Problem #4 &rarr;</h3>
                        <p>
							Coming soon!
                        </p>
                    </a>
                </div>
            </main>

        </div>
    );
}