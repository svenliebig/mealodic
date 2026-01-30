# Technical Requirements

## Deployment

The application needs to be able to run locally in dev mode on the developers machine and should not require 3rd party services like remote databases, storages, etc., we want to host everything on our own servers with a convenient solution like docker compose for now, with the possibility to scale up to a more complex setup later if we want to.

## Security

### Rate Limits

The application should have reasonable rate limits for the API, to prevent abuse and to prevent the application from being overloaded.

### Data Encryption

The application should encrypt sensitive data at rest, like passwords, tokens, etc. The application should also use HTTPS for all requests.

### Authentication

The application should use a strict and secure authentication system and backend that does not rely on external services. Keycloak could be an option.

### CORS

The application should only allow requests from allowed domains.

## API

The application should have a RESTful API that is easy to use and understand. The API should be versioned and the application should be able to handle breaking changes gracefully.

## Persistence

The application should use appropriate data persistence technologies based on the requirements for the data. We prefer open source solutions and technologies that run on our own servers without licensing fees.

## Future Features

### Offline/Local First

The application should be designed to be offline first, not long wait times for the user when they have a bad or missing internet connection. If the user wants to create a recipe while he's offline, he can do that and the application will sync later with the server.