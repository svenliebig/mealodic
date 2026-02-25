import swaggerJsdoc from "swagger-jsdoc";
import { config } from "../config.js";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Mealodic API",
      version: "1.0.0",
      description:
        "API for Mealodic — a meal planning application for individuals and families. " +
        "Manage recipes, ingredients, meal plans, shopping lists, and family groups.",
      contact: {
        name: "Mealodic Team",
      },
    },
    servers: [
      {
        url: `/api/${config.apiVersion}`,
        description: `API ${config.apiVersion}`,
      },
    ],
    components: {
      schemas: {
        ApiResponse: {
          type: "object",
          properties: {
            data: { description: "Response payload" },
            error: { $ref: "#/components/schemas/ApiError" },
            meta: { $ref: "#/components/schemas/PaginationMeta" },
          },
        },
        ApiError: {
          type: "object",
          required: ["code", "message"],
          properties: {
            code: {
              type: "string",
              enum: [
                "BAD_REQUEST",
                "UNAUTHORIZED",
                "FORBIDDEN",
                "NOT_FOUND",
                "CONFLICT",
                "VALIDATION_ERROR",
                "RATE_LIMIT_EXCEEDED",
                "INTERNAL_ERROR",
                "SERVICE_UNAVAILABLE",
              ],
            },
            message: { type: "string" },
            details: {
              type: "object",
              additionalProperties: true,
            },
          },
        },
        PaginationMeta: {
          type: "object",
          properties: {
            page: { type: "integer" },
            pageSize: { type: "integer" },
            total: { type: "integer" },
            totalPages: { type: "integer" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/**/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
