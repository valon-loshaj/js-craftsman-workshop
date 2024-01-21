import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import problems from '../public/data/problems.js'
import { useState } from 'react'

export default function JSCraftsmansWorkshop() {
    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = problems.slice(indexOfFirstItem, indexOfLastItem)

    const [showDetails, setShowDetails] = useState(Array(currentItems.length).fill(false))
    const solutionDetails = currentItems.map((problem) => problem.details.solutionDetails)
    const solutionCode = currentItems.map((problem) => problem.details.solutionCode)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p>Welcome to my JS Craftsman's Workshop!</p>
                    <p>
                        This is a lightweigtht website that I use as my personal JS workshop to hack on different JS
                        projects and ideas.
                    </p>
                </section>
                <div className={styles.container}>
                    <div className={styles.pagination}>
                        <button onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}>
                            Previous
                        </button>
                        <button
                            onClick={() =>
                                paginate(
                                    currentPage < Math.ceil(problems.length / itemsPerPage)
                                        ? currentPage + 1
                                        : currentPage,
                                )
                            }
                        >
                            Next
                        </button>
                    </div>
                    {currentItems.map((problem, i) => {
                        return (
                            <div key={i} className={styles.card}>
                                <h2>{problem.title}</h2>
                                <div id="statusAndDifficulty" className="statusAndDifficulty">
                                    <span className={styles[problem.status.toLowerCase()]}>{problem.status}</span>
                                    <span className={styles[problem.difficultyLevel.toLowerCase()]}>
                                        {problem.difficultyLevel}
                                    </span>
                                </div>
                                <p>{problem.description}</p>
                                <div id="tags" className="tags">
                                    {problem.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    className={styles.readMoreButton}
                                    onClick={() => {
                                        const newShowDetails = [...showDetails]
                                        newShowDetails[i] = !newShowDetails[i]
                                        setShowDetails(newShowDetails)
                                    }}
                                >
                                    Show more
                                </button>
                                {showDetails[i] && (
                                    <div>
                                        {problem.status.toLowerCase() === 'solved' ? (
                                            <>
                                                <p>{solutionDetails[i]}</p>
                                                <pre className={styles.githubCodeBlock}>
                                                    <code className={styles.githubCodeBlock}>{solutionCode[i]}</code>
                                                </pre>
                                            </>
                                        ) : (
                                            <p>Solution not available</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </>
    )
}
