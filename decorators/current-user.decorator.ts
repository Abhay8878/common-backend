import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Extract the authenticated user from the request object.
// Usage: @CurrentUser() user: User

export const CurrentUser = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user;

        // If a specific property is requested, return only that property.
        return data ? user?.[data] : user;
    },
);
