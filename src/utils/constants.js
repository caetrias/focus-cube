export const TIMER_MODES = [
  { 
    id: 'focus', 
    label: 'Foco - 25 min', 
    duration: 25,
    gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
    color: '#ff6b6b'
  },
  { 
    id: 'short', 
    label: 'Pausa Curta - 5 min', 
    duration: 5,
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    color: '#4facfe'
  },
  { 
    id: 'long', 
    label: 'Pausa Longa - 15 min', 
    duration: 15,
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    color: '#43e97b'
  },
];

// API Base URL
export const API_BASE_URL = 'http://127.0.0.1:5000';

// Mapeamento de dias da semana (inglês -> português)
export const DAY_TRANSLATION = {
  'Sunday': 'Dom',
  'Monday': 'Seg',
  'Tuesday': 'Ter',
  'Wednesday': 'Qua',
  'Thursday': 'Qui',
  'Friday': 'Sex',
  'Saturday': 'Sáb',
};

// Ordem correta dos dias da semana
export const DAY_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

