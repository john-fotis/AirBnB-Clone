import React from 'react';

import { isAuthorized } from './permissions';

export default function Can({ roles, resource, action, yes, no }) {
  const hasAccess = isAuthorized(resource, action, roles);
  return hasAccess ? <>{yes}</> : <>{no}</>;
}
