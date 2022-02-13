import React from "react";

const Input = ({type, name, label, value, error, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className='block mb-2 mt-4'>
        {label}
      </label>
      <input
        name={name}
        autoFocus
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        className='block border-2 rounded-md w-full h-10'
      />
      {error && <small className="bg-red-300 inline-block rounded px-2">{error}</small>}
    </div>
  );
};

export default Input;
