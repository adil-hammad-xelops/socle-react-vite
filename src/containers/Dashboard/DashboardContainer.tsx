import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchReports } from 'services/apis/reportsApi';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { setReports } from 'services/slices/reportsSlice';
import type { Report } from 'types';
import { Button, Card, MiniChart } from './components';
import { formatCurrency } from 'utils/helpers';
import {
  DashboardWrapper,
  DashboardHeader,
  DashboardTitle,
  CardsGrid,
  CardContent,
  CardValue,
  CardDate,
  ChartWrapper,
} from './DashboardContainer.styled';

export function DashboardContainer() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((s) => s.reports);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['reports', 'summary'],
    queryFn: fetchReports,
    staleTime: 1000 * 30,
  });

  useEffect(() => {
    if (data) dispatch(setReports(data));
  }, [data, dispatch]);

  return (
    <DashboardWrapper>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
        <Button onClick={() => refetch()} variant="secondary">Refresh</Button>
      </DashboardHeader>

      {isLoading && <Card title="Loading">Fetching data…</Card>}
      {isError && <Card title="Error">Could not load data</Card>}

      {!isLoading && !isError && (
        <CardsGrid>
          {items.map((r: Report) => (
            <Card key={r.id} title={r.title}>
              <CardContent>
                <CardValue>{formatCurrency(r.value)}</CardValue>
                <CardDate>{new Date(r.updatedAt).toLocaleDateString()}</CardDate>
              </CardContent>
              <ChartWrapper>
                <MiniChart
                  title="Last 7 days"
                  data={Array.from({ length: 7 }, (_, i) => ({
                    x: new Date(Date.now() - i * 86400000).toISOString(),
                    y: r.value * Math.random()
                  }))}
                />
              </ChartWrapper>
            </Card>
          ))}
        </CardsGrid>
      )}
    </DashboardWrapper>
  );
}

export default DashboardContainer;
