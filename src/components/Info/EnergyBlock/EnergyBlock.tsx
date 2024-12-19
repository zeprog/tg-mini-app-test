import styles from './EnergyBlock.module.css';

interface EnergyBlockProps {
  progress: number;
  style?: React.CSSProperties;
}

const EnergyBlock: React.FC<EnergyBlockProps> = ({ progress, style }) => {
  return (
    <div className={styles['energy-block']} style={style}>
      <div className={styles['energy-block-content']}>
        <p>Energy</p>
        <p>950 / 1000 xp</p>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default EnergyBlock;