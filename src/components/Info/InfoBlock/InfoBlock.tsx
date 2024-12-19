import Block from '../../Atoms/Block/Block';
import Button from '../../Atoms/Button/Button';
import Blocks from '../Blocks/Blocks';
import styles from './InfoBlock.module.css';

const InfoBlock = () => {
  return (
    <div className={styles.info} style={{marginBottom: '48px'}}>
      <h2 className={styles.infoHeader}>Information</h2>
      <Block variant="block-outline">
        <div className={styles['info-blocks']}>
          <p className={styles['info-block-key']}>Block:</p>
          <p className={styles['info-block-value']}>12345</p>
          <p className={styles['info-block-key']}>Complexity:</p>
          <p className={styles['info-block-value']}>1.9K</p>
          <p className={styles['info-block-key']}>Reward:</p>
          <p className={styles['info-block-value']}>624</p>
          <p className={styles['info-block-key']}>Online:</p>
          <p className={styles['info-block-value']}>10K</p>
        </div>
      </Block>
      <Block variant="block-outline">
        <div className={styles['info-blocks']}>
          <p className={styles['info-block-key']}>Status:</p>
          <p className={styles.waiting}>Waiting</p>
          <p className={styles['info-block-key']}>Shares:</p>
          <p className={styles['info-block-value']}>0</p>
          <p className={styles['info-block-key']}>Hashes:</p>
          <p className={styles['info-block-value']}>0</p>
          <p className={styles['info-block-key']}>Income:</p>
          <p className={styles['info-block-value']}>0</p>
        </div>
      </Block>
      <Button variant="blue-big">
        Start mining
      </Button>
      <Blocks style={{marginTop: '48px'}} />
    </div>
  );
};

export default InfoBlock;
