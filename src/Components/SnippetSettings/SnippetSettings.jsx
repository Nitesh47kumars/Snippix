import SnippetSelect from './SnippetSelect';
import FontSize from './FontSize';
import Slider from './Slider';
import ToggleSwitch from './ToggleSwitch';
import ExportButton from './ExportButton';
import { useState } from 'react';
import Switchs from './Switchs';

export default function SnippetSettings() {
  const [padding, setPadding] = useState(64);

  return (
    <div className="flex justify-center h-full px-4">
      <div className="rounded-xl border border-neutral-700 shadow-sm p-6 bg-neutral-900/90 w-full max-w-screen-lg">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-30 gap-y-4 w-full items-start md:items-center
        justify-center">
          <SnippetSelect label="Theme" value="sublime" iconColor="from-rose-400 via-fuchsia-500 to-indigo-500" />
          <SnippetSelect label="Language" value="JavaScript/JSX" />
          <SnippetSelect label="Font" value="Roboto Mono" />
          <FontSize label="Font Size" value={16} />
          <Slider label="Padding" value={padding} onChange={setPadding} />
          <Switchs/>
          <div className="hidden md:block w-full h-px bg-neutral-800 col-span-full" />
          <ExportButton />
        </div>
      </div>
    </div>
  );
}
