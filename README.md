
![](public/banner.gif)

# TanStack Start + Convex + Clerk Starter

A Typescript production-ready starter template with authentication, real-time backend, and a clean slate-themed dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKleyt0n%2Fconvex-template-typescript&env=CONVEX_DEPLOY_KEY,CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY,CLERK_JWT_ISSUER_DOMAIN&demo-title=TanStack%20Start%20%2B%20Convex%20%2B%20Clerk%20Starter&demo-description=A%20Typescript%20production-ready%20starter%20template%20with%20authentication%2C%20real-time%20backend%2C%20and%20a%20clean%20slate-themed%20dashboard.)

## Quick Start

```bash
# Install dependencies
pnpm i

# Copy environment variables
cp .env.example .env

# Fill in your Clerk and Convex credentials in .env, then:
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  routes/          # File-based routing (TanStack Start)
  components/      # App components + shadcn/ui primitives
  styles/          # Tailwind CSS + theme variables
  lib/             # Utilities
convex/            # Backend schema, queries, mutations
docs/              # Documentation
```

## Documentation

See the [docs/](./docs/README.md) directory for:

- [Getting Started](./docs/getting-started.md)
- [Architecture](./docs/architecture.md)
- [Stack](./docs/stack.md)
- [Customization](./docs/customization.md)

## License

MIT
