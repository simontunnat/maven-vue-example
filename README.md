# Maven Vue.js Example
[![Build](https://github.com/simontunnat/maven-vue-example/workflows/CI/badge.svg)](https://github.com/simontunnat/maven-vue-example/actions?query=workflow%3ACI)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This is an example for how to build Vue.js.

## Requirements
* Java Version 11 or later (the project is build against JDK 11 and 17)

## Usage
### Full build
```
mvn clean verify
```

### Start Spring Boot locally
```
mvn clean spring-boot:run
```

### Build frontend (development)
```
npm run build-dev
```

### Build frontend (production)
```
npm run build-prod
```

### Run frontend tests
```
npm test
```

### Watch frontend tests for changes
```
npm run watch
```

## Legal
Copyright 2022 Simon Tunnat

Licensed under the [Apache License](LICENSE), Version 2.0.
