import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ScoreChartProps {
  data: { name: string; score: number }[];
}

const ScoreChart: React.FC<ScoreChartProps> = ({ data }) => {
  return (
    <div className="w-full h-72 bg-card p-4 rounded-xl shadow">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 25]} />
          <YAxis type="category" dataKey="name" width={150} />
          <Tooltip />
          <Bar dataKey="score" fill="#A4A0CD" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;
