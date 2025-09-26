import React from 'react'
import SnippetPreview from './Components/SnippetPreview'
import SnippetSettings from './Components/SnippetSettings/SnippetSettings'

const App = () => {
  return (
    <div className='p-5 flex flex-col items-center justify-center'>
      <SnippetPreview/>
      <SnippetSettings/>
    </div>
  )
}

export default App
