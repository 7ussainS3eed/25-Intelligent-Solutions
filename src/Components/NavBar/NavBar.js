import {useState} from 'react';

import styles from './NavBar.module.css';

import Arrow from "../Arrow/Arrow";

function NavBar({logo}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navBar}>

      <div 
        className={styles.burger} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>

      <img src={logo} alt="logo"/>

      <div 
        className=
        {`${styles.menu} ${isMenuOpen ? 
        styles.menuOpen : ''}`}
      >
        <button 
          className=
          {`${styles.primMenuEle} ${styles.active}`}
        >
          الصفحة الرئيسية
        </button>
        <button className={styles.primMenuEle}>
          اعمالنا
        </button>
        <select className={styles.primMenuEle}>
          <option>خدماتنا</option>
        </select>
        <button className={styles.primMenuEle}>
          نبذة عنا
        </button>
        <button 
          className={`${styles.primMenuEle} ${styles.custMenuEle}`}
        >
          تواصل معنا
        </button>
      </div>

      <div className={styles.btnsContainer}>
        <button>EN</button>
        <button>
          <span>اتصل بنا</span>
          <Arrow/>
        </button>
      </div>

    </nav>
  );
}

export default NavBar;