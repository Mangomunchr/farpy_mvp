
import React from 'react';

function FormInputField({ label, value, onChange, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-zinc-300 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm"
      />
    </div>
  );
}

export default FormInputField;
