/// <reference types="vite-plugin-svgr/client" />
interface TelegramWebApp {
  WebApp: {
    ready: () => void;
    close: () => void;
    [key: string]: any; // Добавить, если есть другие методы/свойства
  };
}

interface Window {
  Telegram: TelegramWebApp;
}