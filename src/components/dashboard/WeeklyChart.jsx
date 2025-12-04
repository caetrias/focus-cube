import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Timeline } from '@mui/icons-material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyChart = ({ data }) => {
  // Extrair labels (dias) e valores (minutos)
  const labels = data.map(item => item.day);
  const values = data.map(item => item.value);

  // Configuração dos dados do gráfico
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Minutos de Foco',
        data: values,
        backgroundColor: 'rgba(255, 107, 107, 0.8)',
        borderColor: 'rgba(238, 90, 111, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  // Configuração das opções do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function(context) {
            return `${context.parsed.y} minutos`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + ' min';
          },
          font: {
            size: 11,
          },
          color: '#86868b',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
            weight: '500',
          },
          color: '#1d1d1f',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Timeline sx={{ color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Tempo de Foco por Dia
          </Typography>
        </Box>
        
        <Box sx={{ height: 240, position: 'relative' }}>
          <Bar data={chartData} options={options} />
        </Box>
        
        {/* Estatísticas rápidas */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-around',
            mt: 3,
            pt: 2,
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">
              Total Semanal
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
              {values.reduce((a, b) => a + b, 0)} min
            </Typography>
          </Box>
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">
              Média Diária
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {Math.round(values.reduce((a, b) => a + b, 0) / values.length)} min
            </Typography>
          </Box>
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" display="block">
              Melhor Dia
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
              {Math.max(...values)} min
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeeklyChart;
