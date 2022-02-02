import React from "react"

export default function Article({ title, children }) {
    return (
        <article style={{ padding: "50px" }}>
            <h1>{title}</h1>
            {children}
        </article>
    )
}