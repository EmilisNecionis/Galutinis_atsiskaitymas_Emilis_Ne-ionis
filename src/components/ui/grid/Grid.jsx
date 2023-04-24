import css from './grid.module.css';

//apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciniu dalyku

function Grid(props) {
  const inlineStyleObj = {
    // color: 'tomato',
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };
  return <div style={inlineStyleObj} className={css.grid}>{props.children}</div>;
}

export default Grid;
