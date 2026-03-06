// Date formatting utility functions.

// Format a Date to ISO string (YYYY-MM-DD).
export function formatDateISO(date: Date): string {
    return date.toISOString().split('T')[0];
}

// Format a Date to a readable string (e.g., "Mar 6, 2026").
export function formatDateReadable(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

// Get the difference in days between two dates.
export function daysBetween(date1: Date, date2: Date): number {
    const diffMs = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

// Check if a date is in the past.
export function isPast(date: Date): boolean {
    return date.getTime() < Date.now();
}
