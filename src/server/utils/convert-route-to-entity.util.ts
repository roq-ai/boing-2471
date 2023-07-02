const mapping: Record<string, string> = {
  'end-users': 'end_user',
  'health-coaches': 'health_coach',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
