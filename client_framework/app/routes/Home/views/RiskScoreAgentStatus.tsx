import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import ReactECharts, { type EChartsOption } from 'echarts-for-react';
import React from 'react';

type RiskScoreAgentStatusProps = {
  status: 'online' | 'offline';
  offlineTime: number;
  riskScore: number;
};

const RiskScoreAgentStatus: React.FC<RiskScoreAgentStatusProps> = ({
  status,
  offlineTime,
  riskScore,
}) => {
  // Data for offline time chart
  const offlineTimeData = [
    { value: offlineTime, name: '11.03.2025' },
    { value: 60, name: '12.03.2025' },
    { value: 15, name: '12.03.2025' },
    { value: 0, name: '12.03.2025' },
    { value: 30, name: '12.03.2025' },
    { value: 44, name: '12.03.2025' },
    { value: 12, name: '12.03.2025' },
  ];

  // Line chart configuration for offline time
  const optionLineChart = {
    tooltip: { trigger: 'axis' as const },
    xAxis: {
      type: 'category' as const,
      data: offlineTimeData.map((data) => data.name),
    },
    yAxis: { type: 'value' as const },
    series: [
      {
        data: offlineTimeData.map((item) => item.value),
        type: 'line' as const,
        smooth: true,
      },
    ],
  };

  const optionRiskScoreChart: EChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b}: {c}',
    },
    series: [
      {
        name: 'Risk Score',
        type: 'gauge' as const,
        min: 0,
        max: 100,
        axisLine: {
          lineStyle: {
            width: 18,
            color: [
              [0.3, '#91cc75'], // Green for low risk
              [0.7, '#fac858'], // Yellow for medium risk
              [1, '#ee6666'], // Red for high risk
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: 'auto',
          },
        },
        axisTick: {
          distance: -25,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 1,
          },
        },
        splitLine: {
          distance: -28,
          length: 18,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
        },
        axisLabel: {
          distance: -15,
          color: '#999',
          fontSize: 12,
        },
        detail: {
          valueAnimation: true,
          fontSize: 24,
          color: 'inherit',
        },
        data: [
          {
            value: riskScore,
          },
        ],
      },
    ],
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            Risk Score Agent Status
          </Typography>
          <Chip
            label={status === 'online' ? 'Online' : 'Offline'}
            color={status === 'online' ? 'success' : 'error'}
          />
        </Stack>
        <Typography variant="h6">Offline Time</Typography>
        <Typography variant="subtitle1" gutterBottom>
          In minutes
        </Typography>
        <Box>
          <ReactECharts
            opts={{ renderer: 'svg' }}
            option={optionLineChart}
            style={{ height: 300, width: '100%' }}
          />
        </Box>

        <Typography variant="h6" gutterBottom>
          Risk Score
        </Typography>
        <ReactECharts
          opts={{ renderer: 'svg' }}
          option={optionRiskScoreChart}
          style={{ height: 300, width: '100%' }}
        />
      </CardContent>
    </Card>
  );
};

export default RiskScoreAgentStatus;
