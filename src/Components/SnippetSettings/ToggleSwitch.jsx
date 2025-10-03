import { useId } from 'react';
import Switch from '../../utiles/Switch';

export default function ToggleSwitch({ label, checked, onChange }) {
  const id = useId();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>
      <Switch id={id} checked={checked} onChange={onChange} />
    </div>
  );
}
