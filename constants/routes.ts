export const BASE_PATH = '/';
export const ROUTES = {
  HOME: `${BASE_PATH}home`,
  SCHEDULE: `${BASE_PATH}schedule`,
  CHATBOT: `${BASE_PATH}chatbot`,
  PROFILE: `${BASE_PATH}profile`,
  ANALYSIS: `${BASE_PATH}analysis`,
  REGISTER: `${BASE_PATH}register`,
  LOGIN: `${BASE_PATH}login`,
  LOGOUT: `${BASE_PATH}logout`,
};

export const PROTECTED_ROUTES = [
  BASE_PATH,
  ROUTES.HOME,
  ROUTES.SCHEDULE,
  ROUTES.CHATBOT,
  ROUTES.ANALYSIS,
  ROUTES.PROFILE,
];
export const PUBLIC_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER];
