# PokeStats

## 1. Setup

### 1.1. Requirements

- Hypixel Api-Key
- Git
- Docker (only for Production)
- NodeJS/NPM (only for Development)

### 1.2. How to install (Production)

```bash
$ git clone https://github.com/PokeFred/poke-stats.git
$ cd poke-stats

$ cp .env.prod.example .env
  # Apply your API-KEY

$ docker build -t poke-stats-app ./
$ docker run -d -p 80:80 poke-stats-app
```

### 1.3. How to install (Development)

```bash
$ git clone https://github.com/PokeFred/poke-stats.git
$ cd poke-stats

$ cp .env.dev.example .env
  # Apply your API-KEY

$ npm install
$ npm run dev

# Optional Stuff
$ npm run build && npm start
$ npm run test
```
