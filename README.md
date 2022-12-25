# What Are We Watching?!

Generates random movies based on selected filters because I'm sick of spending 8 years figuring out what to watch.

![](https://res.cloudinary.com/dhgpgb0yw/image/upload/v1670716125/waww/WAWW-pink_hlpfx9.png)

Movie data is provided by [TMDB](https://www.themoviedb.org/?language=en-CA).

Helpful resources

-   [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
-   [Remix](https://remix.run/)
-   [Maintine UI](https://mantine.dev/)
-   [Trello Board](https://trello.com/b/mXjRX7bN/waww)

## Getting Started

This project uses Node.js `v18.12.1`

```sh
nvm use 18.12.1
```

### Install the project dependencies

```sh
// Using npm
npm install

// Using yarn
yarn
```

### Setup environment variables

```sh
touch .env
```

Inside of the newly generated `.env` file, add the following

```sh
TMDB_API_KEY=<PRIVATE>
TMDB_V3_API_URL=https://api.themoviedb.org/3
```

You will need to generate your own API key from TMDB in order to access their API and set as the value of `TMDB_API_KEY`.

## Development

```sh
// Using npm
npm run dev

// Using yarn
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
// Using npm
npm run build

// Using yarn
yarn build
```

Then run the app in production mode:

```sh
// Using npm
npm run start

// Using yarn
yarn start
```
