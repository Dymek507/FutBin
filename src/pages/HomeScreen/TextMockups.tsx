import React from 'react'

interface ITextMockupsProps {
  title: string,
  children: React.ReactNode,
  direction?: 'left' | 'right'
}

const TextMockups = ({ title, children, direction = "left" }: ITextMockupsProps) => {

  const leftAlign = "p-2 text-left border-l-2 self-start"
  const rightAlign = "p-2 text-right border-r-2 self-end"

  return (
    <div className={direction === "left" ? leftAlign : rightAlign}>
      <p className="text-[2em] xs:text-[2.3em] leading-none mb-6">{title}</p>
      <p className="text-[1em] xs:text-[1.3em] leading-normal">{children}</p>
    </div>
  )
}

export default TextMockups