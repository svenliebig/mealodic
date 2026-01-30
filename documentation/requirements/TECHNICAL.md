# Technical Requirements

## Deployment

The application needs to be able to run locally in dev mode on the developers machine and should not require 3rd party services like remote databases, storages, etc., we want to host everything on our own servers with a convenient solution like docker compose for now, with the possibility to scale up to a more complex setup later if we want to.

## Future Features

### Offline/Local First

The application should be designed to be offline first, not long wait times for the user when they have a bad or missing internet connection. If the user wants to create a recipe while he's offline, he can do that and the application will sync later with the server.