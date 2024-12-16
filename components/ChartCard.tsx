import React from 'react';
import Card from './Card';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartCardProps {
  chartName: string;
  series: any[];
  labels?: string[];
  type: 'line' | 'bar' | 'area' | 'pie';
  className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ chartName, series, labels, type, className }) => {
    const options = {
        chart: {
          type: type,
          toolbar: {
            show: false
          }
        },
        series: series,
        labels: labels,
        xaxis: {
            categories: labels
        },
        legend: {
          show: false
        }
      };

  return (
    <Card className={className}>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{chartName}</h3>
      <ReactApexChart options={options} series={series} type={type} height={320} />
    </Card>
  );
};

export default ChartCard;
