import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

type Props = {
  label: string;
  data: number[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AverageWorkChart = ({ label, data }: Props) => {
  const chartData = {
    labels: ["월요일", "화요일", "수요일", "목요일", "금요일"],
    datasets: [
      {
        label,
        data,
        borderColor: "#6cdd83",
        backgroundColor: "#366F42",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default AverageWorkChart;
