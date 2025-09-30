import SnippetSelect from './SnippetSelect';
import FontSize from './FontSize';
import Slider from './Slider';
import ToggleSwitch from './ToggleSwitch';
import ExportButton from './ExportButton';
import { useState } from 'react';

export default function SnippetSettings() {
  const [padding, setPadding] = useState(64);

  return (
    <div className='flex justify-center h-full pb-6'>
      <div className="rounded-xl border border-neutral-700 shadow-sm p-6 bg-neutral-900/90">
        <div className="flex flex-wrap gap-4 sm:gap-6">
            <SnippetSelect label="Theme" value="sublime" iconColor="from-rose-400 via-fuchsia-500 to-indigo-500" />
            <SnippetSelect label="Language" value="JavaScript/JSX" />
            <SnippetSelect label="Font" value="Roboto Mono" />
            <FontSize label="Font Size" value={16} />
            <Slider label="Padding" value={padding} onChange={setPadding} />
            <ToggleSwitch label="Background" checked />
            <ToggleSwitch label="DarkMode" checked />
            <div className="w-px bg-neutral-800" />
            <ExportButton />
        </div>
      </div>
    </div>
  );
}
