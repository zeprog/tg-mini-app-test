import { ReactNode } from "react";
import styles from './Block.module.css';

interface BlockProps {
  children: ReactNode;
  variant?: "block" | "block-outline";
  style?: React.CSSProperties;
}

const Block: React.FC<BlockProps> = ({ children, variant = 'block', style }) => {
  const blockClass = `${styles[variant]}`;

  return (
    <div className={blockClass} style={style}>
      {children}
    </div>
  )
}

export default Block;