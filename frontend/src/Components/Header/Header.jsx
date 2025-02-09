/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from './Header.module.css';

import { IconContext } from 'react-icons';
import logoImg from '../../img/logo.png';

import { SlPuzzle } from 'react-icons/sl';
import { TfiRulerPencil } from 'react-icons/tfi';
import { CiLogout } from 'react-icons/ci';

import { GlobalContext } from '../../Contexts/GlobalContext';

const Header = () => {
  const { signOut, setOpenListaMaterialModal } =
    React.useContext(GlobalContext);

  const handleMaterial = () => {
    setOpenListaMaterialModal(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="" />
      </div>
      <nav className={styles.menu}>
        <IconContext.Provider value={{ size: '35px' }}>
          <ul>
            <li>
              <Link role="button" href='/dashboard'>
                <SlPuzzle />
                <p>Peças</p>
              </Link>
            </li>
            <li>
              <a role="button" onClick={handleMaterial}>
                <TfiRulerPencil />
                <p>Materiais</p>
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </nav>
      <div className={styles.logout}>
        <IconContext.Provider value={{ size: '35px' }}>
          <a onClick={signOut}>
            <CiLogout />
            <p>Sair</p>
          </a>
        </IconContext.Provider>
      </div>
      {/* <div className={styles.hamburguer}>
        <div className={styles.hamburguerWrapper}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
