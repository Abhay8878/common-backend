// Standard API response wrapper DTO.
// Use this with the ResponseTransformInterceptor to wrap all responses.

export class BaseResponseDto<T> {
    success: boolean;
    message: string;
    data: T;
    timestamp: string;

    constructor(data: T, message: string = 'Success') {
        this.success = true;
        this.message = message;
        this.data = data;
        this.timestamp = new Date().toISOString();
    }

    static ok<T>(data: T, message: string = 'Success'): BaseResponseDto<T> {
        return new BaseResponseDto(data, message);
    }

    static error<T>(message: string = 'Error', data: T = null as T): BaseResponseDto<T> {
        const response = new BaseResponseDto(data, message);
        response.success = false;
        return response;
    }
}
