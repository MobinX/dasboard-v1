import React from 'react';
import Card from './Card';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PieChartCardProps {
  chartName: string;
  series: any[];
  labels: string[];
  className?: string;
}

//

const PieChartCard: React.FC<PieChartCardProps> = ({ chartName, series, labels, className }) => {
    const options: ApexOptions = {
        chart: {
          type: 'pie',
          toolbar: {
            show: false
          }
        },
        series: series,
        labels: labels,
        legend: {
          show: false
        }
      };

  return (
    <Card className={className}>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{chartName}</h3>
      <ReactApexChart options={options} series={series} type="pie" height={320} />
    </Card>
  );
};

export default PieChartCard;
