import { useQuery } from '@tanstack/react-query';
import { fetchSalesSummary } from 'services/apis/salesApi';
import { Card } from 'components/ui';
import { SalesWrapper, SalesTitle, SalesDetail } from './SalesContainer.styled';

interface SalesSummary { total: number; month: string }

export function SalesContainer() {
  const { data, isLoading, isError } = useQuery<SalesSummary>({
    queryKey: ['sales', 'summary'],
    queryFn: fetchSalesSummary,
    staleTime: 60_000,
  });

  return (
    <SalesWrapper>
      <SalesTitle>Sales</SalesTitle>
      {isLoading && <Card title="Loading">Loading…</Card>}
      {isError && <Card title="Error">Failed to fetch</Card>}
      {data && (
        <Card title={`Sales - ${data.month}`}>
          <SalesDetail>Total: {data.total}</SalesDetail>
        </Card>
      )}
    </SalesWrapper>
  );
}

export default SalesContainer;
