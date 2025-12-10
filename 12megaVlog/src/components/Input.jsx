import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
  { label, type = 'text', className = '', error = '', ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        className={`w-full px-4 py-2 rounded-lg bg-white text-gray-900 border border-gray-300
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none
                    placeholder-gray-400 transition-all duration-200 ${className} ${
          error ? 'border-red-500 focus:ring-red-200' : ''
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

export default Input;
