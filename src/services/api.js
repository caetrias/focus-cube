import { API_BASE_URL, DAY_TRANSLATION, DAY_ORDER } from '../utils/constants';

// Função auxiliar para converter segundos em minutos
const secondsToMinutes = (seconds) => {
  return Math.round(parseInt(seconds) / 60);
};

// Função auxiliar para normalizar dados do dashboard
const normalizeDashboardData = (data) => {
  // Criar um mapa com todos os dias zerados
  const daysMap = DAY_ORDER.reduce((acc, day) => {
    acc[day] = 0;
    return acc;
  }, {});

  // Preencher com os dados recebidos
  data.forEach(item => {
    if (item.dia && item.tempo) {
      daysMap[item.dia] = parseInt(item.tempo);
    }
  });

  // Converter para o formato usado no gráfico
  return DAY_ORDER.map(day => ({
    day: DAY_TRANSLATION[day] || day,
    value: secondsToMinutes(daysMap[day]),
    originalDay: day,
  }));
};

// Buscar dados do dashboard (gráfico semanal)
export const fetchDashboardData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/dashboard`);
    if (!response.ok) throw new Error('Erro ao buscar dados do dashboard');
    const data = await response.json();
    return normalizeDashboardData(data);
  } catch (error) {
    console.error('Erro ao buscar dashboard:', error);
    // Retornar dados mockados em caso de erro
    return [
      { day: 'Seg', value: 0 },
      { day: 'Ter', value: 0 },
      { day: 'Qua', value: 0 },
      { day: 'Qui', value: 0 },
      { day: 'Sex', value: 0 },
      { day: 'Sáb', value: 0 },
      { day: 'Dom', value: 0 },
    ];
  }
};

// Buscar dados da semana
export const fetchWeekData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/semana`);
    if (!response.ok) throw new Error('Erro ao buscar dados da semana');
    const data = await response.json();
    return {
      weekMinutes: secondsToMinutes(data.tempo_total_semana),
      weeklyGoal: secondsToMinutes(data.meta_semanal),
    };
  } catch (error) {
    console.error('Erro ao buscar semana:', error);
    return {
      weekMinutes: 0,
      weeklyGoal: 840, // 14 horas padrão
    };
  }
};

// Buscar dados do mês
export const fetchMonthData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/mes`);
    if (!response.ok) throw new Error('Erro ao buscar dados do mês');
    const data = await response.json();
    return {
      monthlyProgress: secondsToMinutes(data.tempo_total_mes),
      monthlyGoal: secondsToMinutes(data.meta_mensal),
    };
  } catch (error) {
    console.error('Erro ao buscar mês:', error);
    return {
      monthlyProgress: 0,
      monthlyGoal: 3360, // 56 horas padrão
    };
  }
};

// Buscar total do dia
export const fetchDayData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/dia`);
    if (!response.ok) throw new Error('Erro ao buscar dados do dia');
    const data = await response.json();
    return {
      todayMinutes: secondsToMinutes(data.total_diario),
    };
  } catch (error) {
    console.error('Erro ao buscar dia:', error);
    return {
      todayMinutes: 0,
    };
  }
};

// Buscar sessões completas
export const fetchCompletedSessions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sessoes_completas`);
    if (!response.ok) throw new Error('Erro ao buscar sessões completas');
    const data = await response.json();
    return {
      completedSessions: data.sessoes_completas,
    };
  } catch (error) {
    console.error('Erro ao buscar sessões:', error);
    return {
      completedSessions: 0,
    };
  }
};

// Buscar todos os dados de uma vez
export const fetchAllStats = async () => {
  try {
    const [dashboardData, weekData, monthData, dayData, sessionsData] = await Promise.all([
      fetchDashboardData(),
      fetchWeekData(),
      fetchMonthData(),
      fetchDayData(),
      fetchCompletedSessions(),
    ]);

    return {
      weekData: dashboardData,
      stats: {
        ...weekData,
        ...monthData,
        ...dayData,
        ...sessionsData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar todos os dados:', error);
    throw error;
  }
};
