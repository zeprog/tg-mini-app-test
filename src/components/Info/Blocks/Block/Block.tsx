import React from 'react';
import Button from '../../../Atoms/Button/Button';
import styles from './Block.module.css';

interface BlockProps {
  data: {
    id: string;
    hash: string;
    by: string;
    reward: string;
  };
  onClick: () => void;
}

const Block: React.FC<BlockProps> = ({ data, onClick }) => {
  return (
    <div className={styles.block} onClick={onClick}>
      <div className={styles.blockColumns}>
        <div className={styles.blockColumn}>
          <p className={styles.blockHash}>{data.id}</p>
          <p className={styles.blockBy}>{data.by}</p>
        </div>
        <div className={styles.blockColumn}>
          <Button variant="blue-small">My reward: {data.reward}</Button>
        </div>
      </div>
    </div>
  );
};

export default Block;
