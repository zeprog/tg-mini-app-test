import { ReactNode } from 'react';
import header from './Header.module.css';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={header.header}>
      {children}
    </header>
  )
}

export default Header;