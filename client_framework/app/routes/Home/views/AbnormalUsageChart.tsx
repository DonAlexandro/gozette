import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

echarts.registerTheme('default_theme', {
  fontFamily: 'Roboto',
});

const cpuBaseline = 60;
const memoryBaseline = 75;

const dates = [
  '2025-03-01',
  '2025-03-02',
  '2025-03-03',
  '2025-03-04',
  '2025-03-05',
];

const cpuValues = [35, 50, 40, 70, 30];
const memoryValues = [65, 80, 60, 95, 75];

const option = {
  tooltip: {
    trigger: 'axis' as const,
  },
  legend: {
    data: ['CPU', 'Memory'],
  },
  xAxis: {
    type: 'category' as const,
    data: dates,
  },
  yAxis: {
    type: 'value' as const,
    min: 0,
    max: 100,
  },
  series: [
    {
      name: 'CPU',
      type: 'line' as const,
      data: cpuValues,
      markLine: {
        data: [
          {
            yAxis: cpuBaseline,
            name: 'CPU Baseline',
            label: { formatter: 'CPU Baseline' },
            lineStyle: { color: 'red', type: 'dashed' as const },
          },
        ],
      },
      markPoint: {
        data: cpuValues
          .map((y, i) =>
            y > cpuBaseline
              ? { name: 'High CPU', value: y, xAxis: i, yAxis: y }
              : undefined,
          )
          .filter(
            (point): point is Exclude<typeof point, undefined> =>
              point !== undefined,
          ),
      },
    },
    {
      name: 'Memory',
      type: 'line' as const,
      data: memoryValues,
      markLine: {
        data: [
          {
            yAxis: memoryBaseline,
            name: 'Memory Baseline',
            label: { formatter: 'Memory Baseline' },
            lineStyle: { color: 'orange', type: 'dashed' as const },
          },
        ],
      },
      markPoint: {
        data: memoryValues
          .map((y, i) =>
            y > memoryBaseline
              ? { name: 'High Mem', value: y, xAxis: i, yAxis: y }
              : undefined,
          )
          .filter(
            (point): point is Exclude<typeof point, undefined> =>
              point !== undefined,
          ),
      },
    },
  ],
};

export default function AbnormalUsageChart() {
  return (
    <ReactECharts
      theme="default_theme"
      opts={{ renderer: 'svg' }}
      option={option}
      style={{ height: 400, width: '100%' }}
    />
  );
}
