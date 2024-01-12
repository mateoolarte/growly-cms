# Growly CMS

Strapi Headless CMS managing the content of Growly core & Landing pages

## Built With

- [Strapi](https://strapi.io/)
- Postgres
- AWS S3 (Assets uploading)

## Installing / Getting started

### Prerequisites

- [NodeJS LTS](https://nodejs.org/en)
- [PNPM package manager](https://pnpm.io/installation)
- Postgres installed locally. [Homebrew is a good option](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/)
- PgAdmin 4 (Optional)

```shell
pnpm install
```

After installing the dependencies you should copy the values from `.env.example` file. You only need to modify the values with `DATABASE_` prefix with the local configuration of your database

## Developing

### Run local environment

```shell
pnpm dev
```

### Building

```shell
pnpm build
```

### Deploying

Create a PR with the details about what you are trying to change, ask for review, and merge into the `main` branch
