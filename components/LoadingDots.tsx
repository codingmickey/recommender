import styles from '../styles/loading-dots.module.css';

const LoadingDots = ({ color = 'rgb(234, 88, 12)', style = 'small' }) => {
  return (
    <span className={style == 'small' ? styles.loading2 : styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;

LoadingDots.defaultProps = {
  style: 'small'
};
