import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Wraps all controller responses in a standard ApiResponse format.
// { success: true, message: 'Success', data: ..., timestamp: '...' }

export interface StandardResponse<T> {
    success: boolean;
    message: string;
    data: T;
    timestamp: string;
}

@Injectable()
export class ResponseTransformInterceptor<T>
    implements NestInterceptor<T, StandardResponse<T>> {
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<StandardResponse<T>> {
        return next.handle().pipe(
            map((data) => ({
                success: true,
                message: data?.message || 'Success',
                data: data?.message ? data.data || data : data,
                timestamp: new Date().toISOString(),
            })),
        );
    }
}
