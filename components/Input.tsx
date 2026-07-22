import React from "react";

type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  bordered?: boolean;
  leftIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type = "text",
  placeholder,
  value,
  className,
  disabled = false,
  name,
  bordered = true,
  leftIcon,
  onChange,
}: InputProps) {
  return (
    <div className="relative w-full">
      {leftIcon && (
        <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-400">
          {leftIcon}
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={`w-full h-[48px] px-[24px] rounded-[8px] ${leftIcon ? "pl-[48px]" : "px-[24px]"} hover:shadow-md focus:ring-1 focus:ring-[#EEA243] focus:outline-none focus:border-transparent transition ${bordered ? "border border-gray-300" : "border-none"} ${className}`}
        disabled={disabled}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
