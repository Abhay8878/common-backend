# common-backend

Shared common backend utilities, types, DTOs, and enums for Zimmetrics projects.

## 📁 Folder Structure

```
common-backend/
├── constants/          → App-wide constants & regex patterns
├── decorators/         → Custom NestJS decorators (@CurrentUser, @Roles, @Public)
├── dtos/               → Shared DTOs (PaginationDto, BaseResponseDto)
├── entities/           → Base entity class with common fields
├── enums/              → Shared enums (UserRole, SortOrder, StatusMessage)
├── exceptions/         → Custom exception classes
├── filters/            → Global exception filters
├── interceptors/       → Response transform, logging, timeout interceptors
├── interfaces/         → Shared TypeScript interfaces
├── utils/              → Helper functions (hash, date, string, pagination)
└── index.ts            → Main barrel export
```

## Usage

```typescript
import { UserRole, ApiResponse, PaginationDto } from './common';
```
