import React from "react"
import { createReactEditorJS } from 'react-editor-js'
import tw from "tailwind-styled-components"

const Container = tw.div`
  container
  border-2
  m-5
  p-10
  rounded-lg
  shadow-lg
  h-fit
  bg-gray-50
  max-w-5xl
`

export default () => {
    const ReactEditorJS = createReactEditorJS()

    return (
        <div className="flex items-center justify-center h-screen">
            <Container>
            <ReactEditorJS />
        </Container>
        </div>
    )
}