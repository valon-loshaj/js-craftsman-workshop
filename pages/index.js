import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import problems from "../public/data/problems.js";
import { useState } from "react";

export default function Home() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p>Welcome to my JS Craftman's Workshop!</p>
                    <p>
                        This is a lightweigtht website that I use as my personal
                        JS workshop to hack on different JS projects and ideas.
                    </p>
                </section>
                <div className={styles.container}>
                    {problems.map((problem, i) => {
                        const [showDetails, setShowDetails] = useState(false);

                        return (
                            <div key={i} className={styles.card}>
                                <h2>{problem.title}</h2>
                                <div id="statusAndDifficulty" className="statusAndDifficulty">
                                    <span className={styles[problem.status.toLowerCase()]}>{problem.status}</span>
                                    <span className={styles[problem.difficultyLevel.toLowerCase()]}>{problem.difficultyLevel}</span>
                                </div>
                                <p>{problem.description}</p>
                                <div id="tags" className="tags">
                                    {problem.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <button className={styles.readMoreButton} onClick={() => setShowDetails(!showDetails)}>
                                    Read more
                                    {/* Add your down arrow icon here */}
                                </button>
                                {showDetails && (
                                    <div>
                                        {/* Add your problem details here */}
                                        <p>TODO: Add problem details</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Layout>
        </>
    );
}