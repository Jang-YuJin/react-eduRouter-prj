import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
library.add(fas, far, fab)

const Navbar = ({ setSelectMenu, selectMenu }) => {
  const [onOff, setOnOff] = useState('off');
  const [closeOnOff, setCloseOnOff] = useState('off');
  const navigate = useNavigate();

  const menuList = ['웹개발', 'JAVA', 'Python', 'DB', 'HTML/CSS', 'about'];

  const goToLogin = () => {
    navigate('/login');
  }

  const goToMain = () => {
    setSelectMenu('');
    navigate('/');
  }

  const settingCloseBtnOn = () => {
    setOnOff('on');
    setCloseOnOff('on');
  }

  const settingCloseBtnOff = () => {
    setOnOff('off');
    setCloseOnOff('off');
  }

  useEffect(() => {console.log(selectMenu)}, [selectMenu]);

  return (
    <div>
      <div className='head-container'>
        <img src={'./img/logo.png'} alt='logo' className='logo-img' onClick={goToMain}></img>
        <div className='login-container'>
          <FontAwesomeIcon icon="fa-regular fa-user" />
          <div className='login' onClick={goToLogin}>로그인</div>
        </div>
      </div>
      <div className='menu-container'>
        <FontAwesomeIcon icon="fa-solid fa-bars" className='menu-bar' onClick={settingCloseBtnOn}/>
        <ul className={`menu ${onOff}`}>
          {menuList.map((item, index) => (
            <li className={`menu-item ${selectMenu.item === item ? 'select-menu' : ''}`} id={index} onClick={() => setSelectMenu({item})}>{item}</li>
          ))}
        </ul>
        <div className='search-container'>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search-btn'/>
          <input type='text' placeholder='강의를 검색해보세요.'></input>
        </div>
        <div className={`close-container ${closeOnOff}`}>
          <button className='menu-close-btn' onClick={settingCloseBtnOff}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
