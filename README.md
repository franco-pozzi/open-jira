# Next.js FullStack OpenJira APP (Next.js - Mongo.db)

To run locally, you need the database:
```
docker-compose up -d
```

* "-d" tag meaning __detached__

* MongoDB URL Local: 
```
mongodb://localhost:27017/entriesdb
```

## Rebuild node modules and run app
```
yarn install
yarn dev
```

## Set ENV variables.

Use __.env.example__ for template.


## Fill the database with seed data

Request to:
```
http://localhost:3000/api/seed
```

