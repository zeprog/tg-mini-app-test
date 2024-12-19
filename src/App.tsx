import { useEffect, useState } from "react";
import Button from "./components/Atoms/Button/Button";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CloseIcon from './assets/icons/close.svg';
import ArrowDownIcon from './assets/icons/arrow-down.svg';
import DotsIcon from './assets/icons/dots.svg';
import style from './App.module.css';
import Energy from "./components/Info/Energy/Energy";
import Menu from "./components/Atoms/Menu/Menu";
import miningIcon from './assets/icons/mining.svg';
import boostIcon from './assets/icons/boost.svg';
import statisticsIcon from './assets/icons/statistics.svg';
import tokenIcon from './assets/icons/token.svg';

const tg = window?.Telegram?.WebApp;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (tg) {
      tg.ready();
    }
  }, []);

  const onClose = () => {
    if (tg) {
      tg.close();
    }
  };

  const menuItems = [
    {
      icon: miningIcon,
      label: 'Mining',
      isActive: activeIndex === 0,
      onClick: () => setActiveIndex(0),
    },
    {
      icon: boostIcon,
      label: 'Boost',
      isActive: activeIndex === 1,
      onClick: () => setActiveIndex(1),
    },
    {
      icon: statisticsIcon,
      label: 'Statistics',
      isActive: activeIndex === 2,
      onClick: () => setActiveIndex(2),
    },
    {
      icon: tokenIcon,
      label: 'Token',
      isActive: activeIndex === 3,
      onClick: () => setActiveIndex(3),
    },
  ];

  return (
    <div className={style.container}>
      <Header>
        <Button variant="gray" onClick={onClose}>
          <img src={CloseIcon} alt="" />
          Close
        </Button>
        <Button variant="gray">
          <img src={ArrowDownIcon} alt="" />
          <img src={DotsIcon} alt="" />
        </Button>
      </Header>
      <Main>
        <Energy />
      </Main>
      <Menu items={menuItems}/>
    </div>
  );
}

export default App;
