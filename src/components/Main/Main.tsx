import { ReactNode } from 'react';
import main from './Main.module.css'

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={main.main}>
      {children}
    </main>
  )
}

export default Main;