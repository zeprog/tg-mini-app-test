import React from 'react';
import styles from './Menu.module.css';

interface MenuItem {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className={styles.bottomMenu}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.menuItem} ${item.isActive ? styles.active : ''}`}
          onClick={item.onClick}
        >
          <div className={styles.menuItemIcon}>
            <img src={item.icon} />
          </div>
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
