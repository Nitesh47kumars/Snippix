import SnippetTheme from './SnippetTheme';
import FontSize from './FontSize';
import Slider from './Slider';
import ToggleSwitch from './ToggleSwitch';
import ExportButton from './ExportButton';
import SnippetLanguage from './SnippetLanguage';
import SnippetFont from './SnippetFont';
import { useContext } from 'react';
import { MyContext } from '../../MyContext';

export default function SnippetSettings() {
  const {state,dispatch} = useContext(MyContext);

  const handleToggleMode = () =>{
    dispatch(
      {
        type: "SET_MODE",
        payload: state.mode=== "dark" ? "light" : "dark",
      }
    )
  }

  return (
    <div className='flex justify-center h-full pb-3'>
      <div className="rounded-xl border border-neutral-700 shadow-sm p-6 bg-neutral-900/90">
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6">
            <SnippetTheme label="Theme" />
            <SnippetLanguage label="Language" />
            <SnippetFont label="Font" />
            <FontSize label="Font Size" />
            <Slider label="Padding" />
            <ToggleSwitch label="Background" checked />
            <ToggleSwitch 
              label="DarkMode"
              checked={state.mode==="dark"}
              onChange={handleToggleMode}
              />
            <div className="min-h-[60px] w-px bg-neutral-800" />
            <ExportButton />
        </div>
      </div>
    </div>
  );
}
