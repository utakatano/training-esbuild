# esbuild training

This is esbuild playground based on [official esbuild page](https://esbuild.github.io/).

## Environment

- Node.js ... 16.1.0
- [esbuild](https://esbuild.github.io/) ... 0.12.1

## How to run in your local

You can access docker container or use [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) when you use VS code.

```sh
% docker-compose up -d --build

% docker-compose exec develop bash
```

then move into `app` directory and you can try to run `npm run build` or `npm run build:script` with editing `scripts/build.js`
