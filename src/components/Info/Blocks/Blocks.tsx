import React, { useState } from 'react';
import Block from './Block/Block';
import BlockHash from '../../Atoms/Block/Block';
import Modal from '../../Atoms/Modal/Modal';
import styles from './Blocks.module.css';

interface BlocksProps {
  style?: React.CSSProperties;
}

const Blocks: React.FC<BlocksProps> = ({ style }) => {
  const [selectedBlock, setSelectedBlock] = useState<typeof blocksData[0] | null>(null);

  const blocksData = [
    { id: '#12344', hash: '123441234412344123441234412344123441234412344123441234412344123441234412344', by: '00:25 by Kate', reward: '0' },
    { id: '#12345', hash: '123441234412344123441234412344123441234412344123441234412344123441234412344', by: '00:30 by John', reward: '10' },
    { id: '#12346', hash: '123441234412344123441234412344123441234412344123441234412344123441234412344', by: '00:45 by Alice', reward: '15' },
  ];

  return (
    <div className={styles.blocksContainer} style={style}>
      <h2 className={styles.blocksHeader}>Last Blocks</h2>
      <div className={styles.blocks}>
        {blocksData.map((block) => (
          <Block
            key={block.id}
            data={block}
            onClick={() => setSelectedBlock(block)}
          />
        ))}
      </div>
      <Modal
        isOpen={!!selectedBlock}
        onClose={() => setSelectedBlock(null)}
      >
        {selectedBlock && (
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Block {selectedBlock.id}</h3>
            <p className={styles.modalHash}>Hash:</p>
            <BlockHash variant="block">
              {selectedBlock.hash}
            </BlockHash>
            <p>By: {selectedBlock.by}</p>
            <p>Reward: {selectedBlock.reward}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Blocks;
