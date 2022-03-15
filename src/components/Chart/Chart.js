import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

  const valuesArray = props.bars.map(bars => bars.value);
  const totalMaximum = Math.max(...valuesArray);

  return (
    <div className='chart'>
      {props.bars.map(bars => <ChartBar
        key={bars.label}
        value={bars.value}
        maxValue={totalMaximum}
        label={bars.label} />)
      }
    </div>
  );
}

export default Chart;