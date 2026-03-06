// Common base entity interface.
// Defines shared fields that every entity should have.

export interface IBaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
