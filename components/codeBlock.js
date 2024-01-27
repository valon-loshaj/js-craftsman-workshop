// components/CodeBlock.jsx
import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css' // Import the GitHub style

const CodeBlock = ({ language, value }) => {
    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <pre>
            <code className={`language-${language}`}>{value}</code>
        </pre>
    )
}

export default CodeBlock
