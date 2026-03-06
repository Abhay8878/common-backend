import { HttpException, HttpStatus } from '@nestjs/common';

// Custom exception for business logic errors.
// Use this when a business rule is violated (not a validation or HTTP error).

export class BusinessException extends HttpException {
    constructor(
        message: string,
        statusCode: HttpStatus = HttpStatus.UNPROCESSABLE_ENTITY,
    ) {
        super(
            {
                success: false,
                message,
                timestamp: new Date().toISOString(),
                statusCode,
            },
            statusCode,
        );
    }
}
