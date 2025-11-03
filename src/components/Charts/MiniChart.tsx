import React from 'react';

export interface MiniChartProps {
  title?: string;
  data: Array<{ x: string; y: number }>;
}

/**
 * Simple mini chart component for dashboard cards
 */
export const MiniChart: React.FC<MiniChartProps> = ({ title, data }) => {
  const maxValue = Math.max(...data.map((d) => d.y), 1);
  const height = 60;

  return (
    <div style={{ width: '100%' }}>
      {title && (
        <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 4 }}>
          {title}
        </div>
      )}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 2,
        height,
        borderBottom: '1px solid #e2e8f0'
      }}>
        {data.slice().reverse().map((item, index) => {
          const barHeight = (item.y / maxValue) * (height - 10);
          return (
            <div
              key={index}
              style={{
                flex: 1,
                height: barHeight,
                backgroundColor: '#3b82f6',
                borderRadius: '2px 2px 0 0',
                minHeight: 2,
                transition: 'all 0.2s',
              }}
              title={`${new Date(item.x).toLocaleDateString()}: ${item.y.toFixed(2)}`}
            />
          );
        })}
      </div>
    </div>
  );
};


