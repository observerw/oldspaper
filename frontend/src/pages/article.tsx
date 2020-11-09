import * as React from "react"
import { Layout } from "antd"
import { CSSProperties } from "react"

const style: CSSProperties = {
  backgroundColor: "ffffff"
}

const Title: React.SFC<{ title: string }> = ({ title, children }) => {
  return <div>
    <h1>{title}</h1>
    <p>{children}</p>
  </div>
}

export default () => {
  return (
    <div style={style}>
      <Title title={"114514"} />
    </div>
  )
}