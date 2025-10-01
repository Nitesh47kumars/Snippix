import React from 'react'
import SnippetPreview from './Components/SnippetPreview'
import SnippetSettings from './Components/SnippetSettings/SnippetSettings'
import { MyProvider } from './MyContext'

const App = () => {
  return (
    <>
      <MyProvider>
        <SnippetPreview/>
        <SnippetSettings/>
      </MyProvider>
    </>
  )
}

export default App
