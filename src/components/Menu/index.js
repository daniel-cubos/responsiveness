import { useState } from 'react';
import IconClose from '../../assets/close.svg';
import IconMenu from '../../assets/menu.svg';
import './style.css';

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${open && 'fullscren-menu'}`}>
      {open ?
        <img
          style={{ display: `${open ? 'block' : 'none'}` }}
          className='icon-close'
          src={IconClose}
          alt="close menu"
          onClick={() => setOpen(false)}
        />
        :
        <img
          className="icon-menu"
          src={IconMenu}
          alt="icon menu"
          onClick={() => setOpen(true)}
        />
      }

      <ul className="menu">
        <li>Ação</li>
        <li>Comédia</li>
        <li>Drama</li>
        <li>Documentários</li>
        <li>Infantis</li>
      </ul>
    </div>
  );
}

export default Menu;