FROM node:22-alpine AS build
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-workspace.yaml ./
COPY packages/api/package.json packages/api/

RUN pnpm install --filter @mealodic/api

COPY packages/api packages/api
COPY tsconfig.base.json ./

RUN pnpm --filter @mealodic/api build

FROM node:22-alpine
RUN corepack enable

WORKDIR /app

COPY --from=build /app/package.json /app/pnpm-workspace.yaml ./
COPY --from=build /app/packages/api/package.json packages/api/
COPY --from=build /app/packages/api/dist packages/api/dist

RUN pnpm install --filter @mealodic/api --prod

EXPOSE 3000
CMD ["node", "packages/api/dist/index.js"]
