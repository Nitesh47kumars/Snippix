import Switch from '../../utiles/Switch'
export default function ToggleSwitch({ label, checked }) {
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>
      <Switch checked={checked}/>
    </div>
  );
}
