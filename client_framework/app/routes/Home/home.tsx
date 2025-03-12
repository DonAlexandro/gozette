import React from 'react';
import AbnormalUsageChart from './views/AbnormalUsageChart';
import { Box, Card, CardContent, Grid2, Typography } from '@mui/material';
import RiskScoreAgentStatus from './views/RiskScoreAgentStatus';

export function meta() {
  return [
    { title: 'Gozette | Top Headlines' },
    { name: 'description', content: 'Welcome to Gozette!' },
  ];
}

/**
 * Home component that displays the top headlines.
 *
 * @returns The rendered component.
 */
export default function Home() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid2 container>
        <Grid2 size={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Abnormal resource usage
              </Typography>
              <AbnormalUsageChart />
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={4} sx={{ mt: 2 }}>
          <RiskScoreAgentStatus
            status={'offline'}
            offlineTime={120}
            riskScore={33}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
