# songandverse

Sample component library.

## Setup

Playpen:

```sh
yarn
yarn dev # localhost:5173
```

## CI

Pushing to `main` will trigger a [workflow](https://github.com/jonbri/songandverse/tree/main/.github/workflows):
- Build (`yarn build`)
- Publish to [NPM](https://www.npmjs.com/package/songandverse) (`yarn semantic-release`)

## Usage

```tsx
import { BowlingBall } from 'songandverse'
```

