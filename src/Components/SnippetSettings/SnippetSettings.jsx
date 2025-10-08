import SnippetTheme from './SnippetTheme';
import FontSize from './FontSize';
import Slider from './Slider';
import ToggleSwitchs from './ToggleSwitchs'
import ExportButton from './ExportButton';
import SnippetLanguage from './SnippetLanguage';
import SnippetFont from './SnippetFont';

export default function SnippetSettings() {

  return (
    <div className='flex justify-center h-full pb-3 m-4'>
      <div className="rounded-xl border border-neutral-700 shadow-sm p-6 bg-neutral-900/90">
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6">
          <div className='max-lg:w-full flex max-sm:flex-col max-sm:gap-4 gap-7 max-lg:justify-between'>
            <SnippetTheme label="Theme" />
            <SnippetLanguage label="Language" />
            <SnippetFont label="Font" />
          </div>

          <div className='max-lg:w-full gap-7 flex max-sm:flex-col justify-between'>
            <FontSize label="Font Size" />
            <Slider label="Padding" />
            <ToggleSwitchs/>
          </div>
            <div className="max-xl:hidden min-h-[60px] w-px bg-neutral-800" />
            <ExportButton />
        </div>
      </div>
    </div>
  );
}
