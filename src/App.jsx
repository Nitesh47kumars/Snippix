import React from 'react'
import SnippetPreview from './Components/SnippetPreview'
import SnippetSettings from './Components/SnippetSettings/SnippetSettings'
import { MyProvider } from './MyContext'

const App = () => {
  return (
    <>
      <div className="w-full sticky top-0 z-190 bg-yellow-500/10 border-b border-yellow-500/30 text-yellow-300 text-sm text-center py-2 px-4">
        This site is currently under maintenance. You may experience temporary issues.
      </div>
      <MyProvider>
        <SnippetPreview/>
        <SnippetSettings/>
      </MyProvider>
    </>
  )
}

export default App
