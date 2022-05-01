import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 800, pv: 4550, amt: 5000 },
  { name: 'Page C', uv: 900, pv: 3222, amt: 1000 },
];

function Try() {
  return (
    <LineChart
      width={500}
      height={200}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type='monotone' dataKey='uv' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default Try;
