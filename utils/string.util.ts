// String manipulation utility functions.

// Convert a string to slug format (e.g., "Hello World" → "hello-world").
export function toSlug(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Capitalize the first letter of a string.
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Truncate a string to a maximum length with ellipsis.
export function truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
}

// Generate a random string of specified length.
export function randomString(length: number = 16): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
