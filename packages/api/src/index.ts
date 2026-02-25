import Fastify from "fastify";

const server = Fastify({ logger: true });

server.get("/api/v1/health", async () => {
  return { status: "ok", service: "mealodic-api" };
});

const start = async () => {
  const host = process.env.API_HOST ?? "0.0.0.0";
  const port = Number(process.env.API_PORT ?? 3000);

  await server.listen({ host, port });
};

start();
