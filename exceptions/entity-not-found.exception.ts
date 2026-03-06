import { HttpException, HttpStatus } from '@nestjs/common';

// Custom NotFoundException with standard API response format.

export class EntityNotFoundException extends HttpException {
    constructor(entityName: string, identifier?: string | number) {
        const message = identifier
            ? `${entityName} with identifier "${identifier}" not found`
            : `${entityName} not found`;

        super(
            {
                success: false,
                message,
                timestamp: new Date().toISOString(),
                statusCode: HttpStatus.NOT_FOUND,
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
