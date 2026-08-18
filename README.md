# Nodes

This is my personal note taking app to store data nodes that can be linked as parent-child relationships. Nodes can be of specific types (Person, Video Game, Book, Category, etc.), and can be linked to any other node. The links make it easy to create overviews like 'books by a certain author', or 'video games released in a certain year'.

## Tech stack

The app is built in Vue, using Vite as its build tool, Supabase for its database and user account management, and finally Vercel for hosting.

The Vue app itself uses SASS for styling, the Supabase JavaScript library, Vue Router, and TypeScript. Tests are written using Vitest as the test runner, and Vue Test Utils as testing library.

## Installation and use

- Clone the repositoy and run `pnpm install` to install its dependencies
- Copy `.env.example` to `.env.local` and add your Supabase project's URL and publishable key
- Run `pnpm dev` to run the app locally, or run `pnpm test` to run the Vitest test runner
