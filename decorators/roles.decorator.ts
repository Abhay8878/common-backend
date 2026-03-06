import { SetMetadata } from '@nestjs/common';

// Custom decorator to set required roles on a route.
// Usage: @Roles(UserRole.ADMIN, UserRole.MODERATOR)

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
