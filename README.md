# Mealodic

Meal planning for individuals and families.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (v24+)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2+)

## Quick Start

1. **Clone the repository and copy environment variables:**

   ```bash
   cp .env.example .env
   ```

2. **Start the development stack:**

   ```bash
   docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
   ```

   Or using the convenience script:

   ```bash
   pnpm dev
   ```

3. **Access the services:**

   | Service  | URL                            | Credentials              |
   | -------- | ------------------------------ | ------------------------ |
   | Web App  | http://localhost:5173           |                          |
   | API      | http://localhost:3000/api/v1/health |                     |
   | Keycloak | http://localhost:8080           | admin / admin            |
   | Database | localhost:5432                  | mealodic / mealodic_dev  |

4. **Dev user for testing:**

   | Field    | Value              |
   | -------- | ------------------ |
   | Email    | dev@mealodic.local |
   | Password | dev                |

## Development

### Project Structure

```
├── docker-compose.yml          # Base service definitions
├── docker-compose.dev.yml      # Development overrides (hot-reload)
├── infrastructure/
│   └── keycloak/
│       └── realm-export.json   # Keycloak realm configuration
├── packages/
│   ├── api/                    # Backend API (Fastify + TypeScript)
│   └── web/                    # Frontend (React + Vite)
├── .env.example                # Environment variable template
├── pnpm-workspace.yaml         # Monorepo workspace config
└── tsconfig.base.json          # Shared TypeScript config
```

### Hot Reload

Both the API and web frontend support hot-reload in development mode:

- **API** — uses [tsx](https://github.com/privatenumber/tsx) in watch mode; edit files in `packages/api/src/` and changes apply automatically.
- **Web** — uses [Vite](https://vite.dev/) HMR; edit files in `packages/web/src/` and changes appear instantly in the browser.

### Useful Commands

```bash
# Start the dev stack
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# Stop all services
docker compose -f docker-compose.yml -f docker-compose.dev.yml down

# Stop and remove volumes (resets database)
docker compose -f docker-compose.yml -f docker-compose.dev.yml down -v

# View logs for a specific service
docker compose -f docker-compose.yml -f docker-compose.dev.yml logs -f api

# Rebuild a single service
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build api
```

### Services

| Service    | Description                    | Port  |
| ---------- | ------------------------------ | ----- |
| `db`       | PostgreSQL 17                  | 5432  |
| `keycloak` | Keycloak 26.1 (auth server)   | 8080  |
| `api`      | Fastify API (TypeScript)       | 3000  |
| `web`      | React + Vite frontend          | 5173  |

## Documentation

See the [documentation](./documentation/INDEX.md) directory for detailed requirements and functionality specs.
