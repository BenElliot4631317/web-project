import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    bordered?: boolean;
    leftIcon?: React.ReactNode;
    error?: string;
    bgColor?: string;
}

export default function Input({
    type = "text",
    placeholder,
    value,
    className,
    disabled = false,
    name,
    bordered = true,
    leftIcon,
    error,
    onChange,
    bgColor = "#FFFFFF",
    ...props
}: InputProps) {
    return (
        <div className="relative w-full">
            {leftIcon && (
                <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-400">
                    {leftIcon}
                </div>
            )}

            {
                error && (
                    <p className="text-red-500 text-sm mb-1">
                        {error}
                    </p>
                )
            }

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                style={{ backgroundColor: bgColor }}
                className={
                    `w-full h-[48px] px-[24px] rounded-[16px] text-sm
          ${leftIcon ? "pl-[48px]" : "px-[24px]"} 
          focus:ring-1 
          focus:ring-[#EEA243] 
          focus:outline-none 
          focus:border-transparent transition 
          ${bordered ? error ? "border border-red-500" : "border border-gray-300" : "border-none"}
          ${className}`
                }
                disabled={disabled}
                name={name}
                onChange={onChange}
                {...props}
            />

        </div>
    );
}
