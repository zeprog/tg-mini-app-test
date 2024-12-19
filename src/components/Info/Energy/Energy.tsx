import Button from '../../Atoms/Button/Button';
import Block from '../../Atoms/Block/Block';
import ArrowRight from '../../../assets/icons/arrow-right.svg';
import styles from './Energy.module.css';
import EnergyBlock from '../EnergyBlock/EnergyBlock';
import InfoBlock from '../InfoBlock/InfoBlock';

const Energy = () => {
  return (
    <div className={styles['energy-container']}>
      <p className={styles.energy}>4,824</p>
      <Button variant="blue-small">
        Activate passive mining
        <img src={ArrowRight} alt="" />
      </Button>
      <Block style={{ marginTop: "28px", marginBottom: "40px", width: '100%' }}>
        <EnergyBlock progress={95} />
      </Block>
      <InfoBlock />
    </div>
  )
}

export default Energy;