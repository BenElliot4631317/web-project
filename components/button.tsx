import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
};

export default function Button({ children, variant="primary", ...props }: ButtonProps) {

  const styles = {
    primary: "bg-[#F3E37C] hover:bg-[#F3D34A]",
    secondary: "bg-[#FFFFFF] hover:bg-[#F2F2F7]",
    danger: ""
  };


  return (
    <button
        {...props}
    className={`rounded-[16px] px-[35px] py-[12px] transition border border-[#D1D1D6] font-bold text-[#5A5A5A] ${styles[variant]}`}>
        {children}
    </button>
  )
}
