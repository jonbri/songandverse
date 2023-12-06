# songandverse

test

Sample component library

## Setup

Playpen:

```sh
yarn
yarn dev # localhost:5173
```

BowlingBall color:

```sh
yarn color # show color
yarn color green # set color
```

## CI

Pushing to `main` will trigger a [workflow](https://github.com/jonbri/songandverse/tree/main/.github/workflows):

- Build (`yarn build`)
- Publish to [NPM](https://www.npmjs.com/package/songandverse) (`yarn semantic-release`)

## Usage

```tsx
import { BowlingBall, Pins, Pin } from "songandverse";
```
