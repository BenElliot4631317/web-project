import React, { Children } from 'react'

type ButtonProps = {
    children: React.ReactNode
};

export default function button({ children }: ButtonProps) {
  return (
    <button
    className='rounded-b-lg bg-white shadow px-[35px] py-[12px]'>
        {children}
    </button>
  )
}
