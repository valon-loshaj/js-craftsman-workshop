import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import problems from '../public/data/problems.js'
import { useState } from 'react'

export default function JSCraftsmansWorkshop() {
    const [showDetails, setShowDetails] = useState(Array(problems.length).fill(false))
    const [userInputs, setUserInputs] = useState(Array(problems.length).fill(''))
    const [scriptOutputs, setScriptOutputs] = useState(Array(problems.length).fill(''))

    const handleExecuteScript = (i) => {
        const output = problems[i].details.solutionScript(userInputs[i])
        const newScriptOutputs = [...scriptOutputs]
        newScriptOutputs[i] = output
        setScriptOutputs(newScriptOutputs)
    }

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
                    {problems.map((problem, i) => {
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
                                                <input
                                                    className={styles.scriptInput}
                                                    type="text"
                                                    value={userInputs[i]}
                                                    onChange={(e) => {
                                                        const newUserInputs = [...userInputs]
                                                        newUserInputs[i] = e.target.value
                                                        setUserInputs(newUserInputs)
                                                    }}
                                                    placeholder={problem.details.expectedInput}
                                                />
                                                <button
                                                    className={styles.executeButton}
                                                    onClick={() => handleExecuteScript(i)}
                                                >
                                                    Execute Script
                                                </button>
                                                <p>{scriptOutputs[i]}</p>
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
