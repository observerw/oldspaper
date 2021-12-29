import { Link } from "gatsby"
import React from "react"

export default () => {
    return <div className="text-center">
        <p className="text-8xl mb-5">人终有一死*。</p>
        <Link to="/" className="text-xl text-gray-400 no-underline">*：仅在宏观低速情况下成立。</Link>
    </div>
}