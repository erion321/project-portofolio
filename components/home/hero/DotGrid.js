import styles from "./dotgrid.module.scss";

export const DotGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;

  const dots = [];

  

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className={styles.dotWrapper}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div className={`${styles.dot} dot-point`} data-index={index} />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots.map((dot) => dot)}
    </div>
  );
};
