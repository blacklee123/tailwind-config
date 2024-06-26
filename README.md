# Tailwind Config

shared tailwind config


## Install

```bash
npm install @qaq-public/tailwind-config
# or
yarn add @qaq-public/tailwind-config
# or
pnpm add @qaq-public/tailwind-config
```

## Usage
tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'
import sharedConfig from '@qaq-public/tailwind-config'

const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig],
}

export default config

```