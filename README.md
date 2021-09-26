# customer-apollo-federation

## What is this for?

Proof of concept for working with the Apollo GraphQL Federation package. With this implementation you can standup several GraphQL servers and access them all with one single endpoint. This implementation features 3 service layers accessing 3 persistence layers (mocked as REST APIs) to combine one single schema and understanding of how a "customer" might be viewed enterprise-wide.

## How to use?

```
yarn install
```

When that finishes

```
yarn install-all
```

To run just the DBs
```
yarn dev:d
```

To run just the services
```
yarn dev:s
```

To run both the DBs and the services
```
yarn dev:a
```

Once both the DBs and services are up you can run the gateway

```
yarn dev:g
```
