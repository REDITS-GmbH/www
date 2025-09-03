# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

REDITS - A React + Vite + Hono + Cloudflare Workers application that provides a full-stack development setup with edge deployment capabilities. Built by BLUEITS GmbH.

## Architecture

### Frontend (React + Vite)
- **Entry Point**: `src/react-app/main.tsx`
- **Main Component**: `src/react-app/App.tsx` - Wrapper component that renders LandingPage
- **Landing Page**: `src/react-app/LandingPage.tsx` - Company landing page with REDITS branding, contact info, and GDPR-compliant privacy policy
- **Favicon**: `public/favicon.svg` - White "ITS" text on red background (#f01414) with rounded corners (7.5px radius), vertically stretched (1.4x)
- **Build Output**: `dist/client/` (static assets served by Cloudflare Workers)
- **Development Server**: Runs on port 5173 with HMR enabled
- **Hot Reload Configuration**: Uses polling for WSL environments (`vite.config.ts` has `usePolling: true`)
- **Font**: Self-hosted Roboto font (`public/roboto-latin-v30.woff2`) for GDPR compliance

### Backend (Hono + Cloudflare Workers)
- **Entry Point**: `src/worker/index.ts`
- **Framework**: Hono web framework for API routes
- **Deployment**: Cloudflare Workers with edge computing
- **API Routes**: Mounted under `/api/` path
- **Worker Name**: `www` (configured in wrangler.json)
- **Compatibility**: Node.js compatibility enabled

### Configuration Files
- **Vite Config**: `vite.config.ts` - Production optimizations with Terser minification, compression plugins (gzip/brotli), and obfuscation
- **Wrangler Config**: `wrangler.json` - Cloudflare Workers deployment, SPA routing enabled, source maps disabled for production
- **TypeScript Configs**: 
  - `tsconfig.json` - Base configuration
  - `tsconfig.app.json` - React app configuration
  - `tsconfig.node.json` - Node environment configuration
  - `tsconfig.worker.json` - Worker environment configuration

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (frontend + backend with HMR)
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Type checking and build validation (includes dry-run deploy)
npm run check

# Preview production build locally
npm run preview

# Deploy to Cloudflare Workers
npm run deploy

# Generate Cloudflare type definitions
npm run cf-typegen

# Monitor deployed worker logs
npx wrangler tail
```

## Testing

No test framework is currently configured. To add testing:
1. Choose a testing framework (e.g., Vitest for Vite projects)
2. Install the necessary dependencies
3. Add test scripts to package.json

## Key Development Patterns

### API Communication
- Frontend fetches from `/api/` endpoints
- Backend API routes defined in `src/worker/index.ts` using Hono
- Current API endpoint: `GET /api/` returns `{ name: "Cloudflare" }`

### Type Safety
- Worker environment types available through `Env` interface
- Multiple TypeScript configurations for different module systems
- Cloudflare bindings typed via `worker-configuration.d.ts`

### Build & Deployment Flow
1. `npm run build` runs TypeScript compilation (`tsc -b`) then Vite build
2. Worker serves static assets from `dist/client/` directory
3. Single-page application routing handled by Workers' `not_found_handling: "single-page-application"` configuration
4. Deploy with `npm run deploy` (requires Cloudflare account setup)
5. Use `npm run check` to validate the build before deploying (includes dry-run)

### WSL Development Notes
- Hot reload requires polling due to WSL file system watching limitations
- Configuration already set in `vite.config.ts` with `server.watch.usePolling: true`
- Public assets changes require manual browser refresh (not part of HMR)

## Project Dependencies

### Core Dependencies
- **React**: 19.0.0 - UI library
- **Hono**: 4.8.2 - Backend framework
- **Vite**: ^6.0.0 - Build tool and dev server
- **TypeScript**: 5.8.3 - Type safety
- **Wrangler**: 4.21.x - Cloudflare Workers CLI
- **Terser**: ^5.43.1 - JavaScript minification and obfuscation
- **vite-plugin-compression**: ^0.5.1 - Asset compression (gzip/brotli)

### Key Features
- Observability enabled for monitoring deployed workers
- Source maps disabled in production for security (upload_source_maps: false)
- ESLint configured for code quality (v9 with React hooks and refresh plugins)
- React Fast Refresh for optimal development experience
- TypeScript strict mode enabled across all configurations
- Claude Code permissions configured in `.claude/settings.local.json` for automated git and npm operations

### Production Build Optimizations
- **Minification**: Terser with aggressive settings (removes console logs, debugger statements)
- **Compression**: Automatic gzip and brotli compression of assets
- **Obfuscation**: Hashed filenames, mangled variable names, no comments
- **Bundle Size**: Optimized for edge deployment with dual compression