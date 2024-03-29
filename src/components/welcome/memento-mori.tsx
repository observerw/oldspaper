import { Link } from "gatsby"
import React from "react"

export default () => {
    return <div className="text-center">
        <p className="text-7xl mb-5 font-bold">人终有一死*。</p>
        <Link to="/works/cynicism-1" className="text-xl text-gray-400 no-underline">*：仅在宏观低速情况下成立。</Link>
    </div>
}