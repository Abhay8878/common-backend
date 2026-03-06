// Generic wrapper for all API responses.
// Ensures a consistent response shape across every endpoint.

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    timestamp: string;
}

// Paginated response wrapper for list endpoints.

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    total: number;
    page: number;
    limit: number;
}
