'use client';
import React from 'react';
import Card from '../components/Card';
import ChartCard from '../components/ChartCard';
import PieChartCard from '../components/PieChartCard';
import CheckTable from '../components/CheckTable';
import content from '../content.json';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 md:p-6 bg-background text-foreground flex-1">
        <h1 className="text-2xl font-bold mb-4">{content.dashboardTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          {content.cards.map((card, index) => (
            <Card key={index} className="bg-primary text-primary-foreground">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-2xl">{card.value}</p>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <Card>
            <h2 className="text-lg font-semibold mb-2 text-foreground">{content.monthlyOverview.title}</h2>
            <p className="text-2xl text-foreground">{content.monthlyOverview.value}</p>
            <p className="text-sm text-green-500">{content.monthlyOverview.totalSpent}</p>
            <ChartCard
              chartName="Monthly Overview"
              series={content.monthlyOverview.series}
              labels={content.monthlyOverview.labels}
              type="line"
            />
          </Card>
           <ChartCard
              chartName={content.weeklyRevenue.title}
              series={content.weeklyRevenue.series}
              labels={content.weeklyRevenue.labels}
              type="bar"
            />
            <Card>
              <h2 className="text-lg font-semibold mb-2 text-foreground">{content.dailyTraffic.title}</h2>
              <p className="text-2xl text-foreground">{content.dailyTraffic.value} <span className="text-sm text-gray-500">{content.dailyTraffic.unit}</span></p>
              <p className="text-sm text-green-500">{content.dailyTraffic.percentageChange}</p>
               <ChartCard
                chartName="Daily Traffic"
                series={content.dailyTraffic.series}
                labels={content.dailyTraffic.labels}
                type="area"
              />
            </Card>
            <PieChartCard
              chartName={content.pieChart.title}
              series={content.pieChart.series}
              labels={content.pieChart.labels}
            />
        </div>
        <CheckTable
          title={content.checkTable.title}
          headers={content.checkTable.headers}
          rows={content.checkTable.rows}
        />
      </div>
    </div>
  );
}
