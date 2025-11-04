import { useQuery } from '@tanstack/react-query';
import { fetchReports } from 'services/apis/reportsApi';
import type { Report } from 'types';
import { Card } from 'components/ui';
import { ReportsWrapper, ReportsTitle, ReportDetail } from './ReportsContainer.styled';

export function ReportsContainer() {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['reports', 'list'],
    queryFn: fetchReports,
  });

  return (
    <ReportsWrapper>
      <ReportsTitle>Reports</ReportsTitle>
      {isLoading && <Card title="Loading">Loading…</Card>}
      {isError && <Card title="Error">Failed to fetch</Card>}
      {data.map((r: Report) => (
        <Card key={r.id} title={r.title}>
          <ReportDetail>ID: {r.id}</ReportDetail>
          <ReportDetail>Value: {r.value}</ReportDetail>
          <ReportDetail>Updated: {new Date(r.updatedAt).toLocaleString()}</ReportDetail>
        </Card>
      ))}
    </ReportsWrapper>
  );
}

export default ReportsContainer;
