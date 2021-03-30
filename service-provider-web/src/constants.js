const API_BASE_URI = '/api/v1/services'

const ROUTING_PATHS = {
  HOME_ROOT: '/',
  SKILLS_SELECTION: '/skills',
  SKILLS_RATING: '/rating',
  SERVICE_REQUESTS: '/requests',
}

const ALERT_TYPES = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
}

const BUTTON_LABELS = {
  BACK: 'Back',
  NEXT: 'Next',
}

module.exports = {
  API_BASE_URI,
  ROUTING_PATHS,
  ALERT_TYPES,
  BUTTON_LABELS,
}
