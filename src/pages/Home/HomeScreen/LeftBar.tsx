import React from 'react'

interface ILeftBarProps {
  currentPage: number;
}

const ListItem = ({ page, text, currentPage }: { page: number, text: string, currentPage: number }) => {
  return (
    <li className={currentPage >= page ? 'step-primary step' : 'step'}>{page === currentPage ? text : null}</li>
  )
}

const pageList = [{
  text: "Play matches",
  page: 1,
}, {
  text: "Buy packs",
  page: 2,
}, {
  text: "Draw players",
  page: 3,
}, {
  text: "Assembly squad",
  page: 4,
}]



const LeftBar = ({ currentPage }: ILeftBarProps) => {
  return (
    <ul className="fixed top-[30vh] left-0 z-[4] steps steps-vertical ">
      {pageList.map((el, i) => <ListItem key={i} page={el.page} currentPage={currentPage} text={el.text} />)
      }
    </ul>
  )
}

export default LeftBar