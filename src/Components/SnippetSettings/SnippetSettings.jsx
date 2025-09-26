import SnippetSelect from './SnippetSelect';
import FontSize from './FontSize';
import Slider from './Slider';
import ToggleSwitch from './ToggleSwitch';
import ExportButton from './ExportButton';

export default function SnippetSettings() {
  return (
    <div className="flex flex-col gap-6 rounded-xl border shadow-sm p-6 w-fit bg-neutral-900/90 backdrop-blur">
      <div className="flex flex-wrap gap-4 sm:gap-6 p-0">
        <SnippetSelect label="Theme" value="sublime" iconColor="from-rose-400 via-fuchsia-500 to-indigo-500" />
        <SnippetSelect label="Language" value="JavaScript/JSX" />
        <SnippetSelect label="Font" value="Roboto Mono" />
        <FontSize label="Font Size" value={16} />
        <Slider label="Padding" value={128} />
        <ToggleSwitch label="Background" checked />
        <ToggleSwitch label="DarkMode" checked />
        <div className="w-px bg-neutral-800" />
        <div className="place-self-center">
          <ExportButton />
        </div>
      </div>
    </div>
  );
}
