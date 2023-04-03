import React from 'react'
import { VIEWS_LIST } from '../data/views_list';

interface ILeftBarProps {
  currentPage: number;
}

const ListItem = ({ page, text, currentPage }: { page: number, text: string, currentPage: number }) => {
  return (
    <li className={currentPage >= page ? 'step-primary step' : 'step'}></li>
  )
}

const LeftBar = ({ currentPage }: ILeftBarProps) => {
  return (
    <ul className="fixed top-[30vh] left-0 z-[4] steps steps-vertical ">
      {VIEWS_LIST.map((el, i) => <ListItem key={i} page={el.page} currentPage={currentPage} text={el.text} />)
      }
    </ul>
  )
}

export default LeftBar