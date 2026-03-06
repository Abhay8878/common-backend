// Pagination calculation utilities.

export interface PaginationMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

// Calculate pagination metadata.
export function calculatePagination(
    total: number,
    page: number,
    limit: number,
): PaginationMeta {
    const totalPages = Math.ceil(total / limit);

    return {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
    };
}

// Calculate the offset for database queries (skip).
export function calculateOffset(page: number, limit: number): number {
    return (page - 1) * limit;
}
