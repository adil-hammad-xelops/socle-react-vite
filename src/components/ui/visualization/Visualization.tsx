import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

// Note: For real charts, you would use a library like recharts, chart.js, or nivo
// This is a simplified wrapper component structure

// ============ ChartWrapper Component ============
export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export interface ChartWrapperProps {
  type: 'bar' | 'line' | 'pie' | 'doughnut';
  data: ChartData[];
  title?: string;
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({
  type,
  data,
  title,
  height = 300,
  showLegend = true,
}) => {
  // Simple visualization - in production, integrate with recharts or chart.js
  const maxValue = Math.max(...data.map((d) => d.value));

  const renderBarChart = () => (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', height: height - 50, gap: 1 }}>
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: `${(item.value / maxValue) * 100}%`,
              bgcolor: item.color || 'primary.main',
              borderRadius: 1,
              transition: 'all 0.3s',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          />
          <Typography variant="caption" sx={{ mt: 1 }}>
            {item.label}
          </Typography>
          <Typography variant="caption" fontWeight="bold">
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const renderLineChart = () => (
    <Box sx={{ position: 'relative', height: height - 50 }}>
      <svg width="100%" height="100%" viewBox="0 0 400 200">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points={data
            .map((item, index) => {
              const x = (index / (data.length - 1)) * 380 + 10;
              const y = 190 - (item.value / maxValue) * 180;
              return `${x},${y}`;
            })
            .join(' ')}
        />
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 380 + 10;
          const y = 190 - (item.value / maxValue) * 180;
          return (
            <g key={index}>
              <circle cx={x} cy={y} r="4" fill={item.color || 'currentColor'} />
              <text x={x} y="195" fontSize="10" textAnchor="middle">
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Box>
  );

  const renderPieChart = () => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', height: height - 50 }}>
        <svg width={height - 50} height={height - 50} viewBox="0 0 200 200">
          {data.map((item, index) => {
            const percentage = item.value / total;
            const angle = percentage * 360;
            const startAngle = currentAngle;
            currentAngle += angle;

            const x1 = 100 + 80 * Math.cos((Math.PI * startAngle) / 180);
            const y1 = 100 + 80 * Math.sin((Math.PI * startAngle) / 180);
            const x2 = 100 + 80 * Math.cos((Math.PI * currentAngle) / 180);
            const y2 = 100 + 80 * Math.sin((Math.PI * currentAngle) / 180);

            const largeArc = angle > 180 ? 1 : 0;

            return (
              <path
                key={index}
                d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                fill={item.color || `hsl(${index * (360 / data.length)}, 70%, 60%)`}
              />
            );
          })}
        </svg>
      </Box>
    );
  };

  return (
    <Paper sx={{ p: 2, height }}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}

      <Box>
        {type === 'bar' && renderBarChart()}
        {type === 'line' && renderLineChart()}
        {(type === 'pie' || type === 'doughnut') && renderPieChart()}
      </Box>

      {showLegend && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2, justifyContent: 'center' }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: item.color || `hsl(${index * (360 / data.length)}, 70%, 60%)`,
                  borderRadius: 0.5,
                }}
              />
              <Typography variant="caption">
                {item.label}: {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  );
};

// ============ Gauge Component ============
export interface GaugeProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  color?: string;
  size?: number;
}

export const Gauge: React.FC<GaugeProps> = ({
  value,
  min = 0,
  max = 100,
  label,
  showValue = true,
  color = 'primary',
  size = 200,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const angle = (percentage / 100) * 180 - 90;

  const colorMap: Record<string, string> = {
    primary: '#2563eb',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  };

  const gaugeColor = colorMap[color] || color;

  return (
    <Paper sx={{ p: 2, display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ position: 'relative', width: size, height: size / 2 }}>
        <svg width={size} height={size / 2} viewBox={`0 0 ${size} ${size / 2}`}>
          {/* Background arc */}
          <path
            d={`M 10 ${size / 2} A ${size / 2 - 10} ${size / 2 - 10} 0 0 1 ${size - 10} ${size / 2}`}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Value arc */}
          <path
            d={`M 10 ${size / 2} A ${size / 2 - 10} ${size / 2 - 10} 0 0 1 ${size - 10} ${size / 2}`}
            fill="none"
            stroke={gaugeColor}
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 3.14} 314`}
          />
          {/* Needle */}
          <line
            x1={size / 2}
            y1={size / 2}
            x2={size / 2 + (size / 2 - 30) * Math.cos((angle * Math.PI) / 180)}
            y2={size / 2 + (size / 2 - 30) * Math.sin((angle * Math.PI) / 180)}
            stroke="#1f2937"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Center dot */}
          <circle cx={size / 2} cy={size / 2} r="5" fill="#1f2937" />
        </svg>

        {showValue && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {value}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {min} - {max}
            </Typography>
          </Box>
        )}
      </Box>

      {label && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          {label}
        </Typography>
      )}
    </Paper>
  );
};

// ============ CalendarView Component ============
export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  color?: string;
}

export interface CalendarViewProps {
  events?: CalendarEvent[];
  onDateClick?: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  events = [],
  onDateClick,
  onEventClick,
}) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventsForDate = (day: number) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  return (
    <Paper sx={{ p: 2 }}>
      {/* Calendar header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </Typography>
        <Box>
          <button onClick={handlePrevMonth}>←</button>
          <button onClick={handleNextMonth} style={{ marginLeft: 8 }}>→</button>
        </Box>
      </Box>

      {/* Days header */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, mb: 1 }}>
        {days.map((day) => (
          <Typography key={day} variant="caption" align="center" fontWeight="bold">
            {day}
          </Typography>
        ))}
      </Box>

      {/* Calendar grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 }}>
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <Box key={`empty-${index}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const dayEvents = getEventsForDate(day);
          const isToday =
            day === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear();

          return (
            <Box
              key={day}
              onClick={() => onDateClick?.(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
              sx={{
                p: 1,
                minHeight: 60,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                cursor: 'pointer',
                bgcolor: isToday ? 'primary.light' : 'background.paper',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <Typography variant="body2" fontWeight={isToday ? 'bold' : 'normal'}>
                {day}
              </Typography>
              {dayEvents.map((event) => (
                <Box
                  key={event.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    onEventClick?.(event);
                  }}
                  sx={{
                    mt: 0.5,
                    px: 0.5,
                    py: 0.25,
                    bgcolor: event.color || 'primary.main',
                    color: 'white',
                    fontSize: '0.65rem',
                    borderRadius: 0.5,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {event.title}
                </Box>
              ))}
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

/**
 * Visualization components examples:
 *
 * @example
 * ```tsx
 * <ChartWrapper
 *   type="bar"
 *   title="Sales by Month"
 *   data={[
 *     { label: 'Jan', value: 120 },
 *     { label: 'Feb', value: 150 },
 *     { label: 'Mar', value: 180 }
 *   ]}
 * />
 *
 * <Gauge
 *   value={75}
 *   max={100}
 *   label="Performance Score"
 *   color="success"
 * />
 *
 * <CalendarView
 *   events={[
 *     { id: '1', title: 'Meeting', date: new Date(), color: '#2563eb' }
 *   ]}
 *   onDateClick={(date) => console.log(date)}
 * />
 * ```
 */

