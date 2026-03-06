// JWT token payload shape.
// Defines what data is encoded in the access token.

export interface JwtPayload {
    sub: string;        // User ID
    email: string;
    role: string;
    iat?: number;       // Issued at (auto-added by JWT)
    exp?: number;       // Expiration (auto-added by JWT)
}
