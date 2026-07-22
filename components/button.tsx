import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
};

export default function Button({ children, variant="primary" }: ButtonProps) {

  const styles = {
    primary: "bg-[#F3E37C] hover:bg-[#F3D34A]",
    secondary: "bg-[#FFFFFF] hover:bg-[#F2F2F7]",
    danger: ""
  };


  return (
    <button
    className={`rounded-[12.5px] shadow px-[35px] py-[12px] transition ${styles[variant]}`}>
        {children}
    </button>
  )
}
