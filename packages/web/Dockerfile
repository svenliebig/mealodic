FROM node:22-alpine AS base
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-workspace.yaml ./
COPY packages/web/package.json packages/web/

RUN pnpm install --frozen-lockfile --filter @mealodic/web

COPY packages/web packages/web

RUN pnpm --filter @mealodic/web build

FROM nginx:alpine
COPY --from=base /app/packages/web/dist /usr/share/nginx/html
EXPOSE 80
