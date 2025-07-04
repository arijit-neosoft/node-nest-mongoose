# Node-Nest-Mongoose

---

## Stack

- `node.js`
- `nest.js`
- `rest-api`
- `mongodb`
- `mongoose`
- `typescript`

---

## App Init

```
npm i -g @nestjs/cli
```

---

## Nest Commands

```
nest new [name]
```

```
nest generate module [name]
```

```
nest generate controller [name]
```

```
nest generate service [name]
```

```
nest generate resource [name]
```

---

## Run - Dev

`make env file: .env.dev`

```
npm i
```

```
docker compose -f ./compose.db.yaml --env-file ./.env.dev up --build -d
```

```
npm run start:dev
```

---
