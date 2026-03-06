// Enum representing common HTTP status messages for API responses.

export enum StatusMessage {
    SUCCESS = 'Operation completed successfully',
    CREATED = 'Resource created successfully',
    UPDATED = 'Resource updated successfully',
    DELETED = 'Resource deleted successfully',
    NOT_FOUND = 'Resource not found',
    UNAUTHORIZED = 'Unauthorized access',
    FORBIDDEN = 'Access forbidden',
    BAD_REQUEST = 'Bad request',
    INTERNAL_ERROR = 'Internal server error',
}
