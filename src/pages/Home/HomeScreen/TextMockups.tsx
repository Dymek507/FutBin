import React from 'react'

interface ITextMockupsProps {
  title: string,
  children: React.ReactNode,
  direction?: 'left' | 'right'
}

const TextMockups = ({ title, children, direction = "left" }: ITextMockupsProps) => {

  const leftAlign = "pl-2 text-left border-l-2 self-start"
  const rightAlign = "pr-2 text-right border-r-2 self-end"

  return (
    <div className={direction === "left" ? leftAlign : rightAlign}>
      <p className="text-[2em] mb-6">{title}</p>
      <p className="text-[1em] ">{children}</p>
    </div>
  )
}

export default TextMockups