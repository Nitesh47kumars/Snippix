import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeSnippet({ code, language }) {
  return (
    <SyntaxHighlighter language={language} style={solarizedlight}>
      {code}
    </SyntaxHighlighter>
  );
}
