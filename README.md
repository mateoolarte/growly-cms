# Growly CMS

Strapi Headless CMS managing the content of Growly core

## Built With

- [Strapi](https://strapi.io/)
- Postgres
- AWS S3 (Assets uploading)

## Installing / Getting started

### Prerequisites

- [NodeJS LTS](https://nodejs.org/en)
- Postgres installed locally. [Homebrew is a good option](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/)
- PgAdmin 4 (Optional)

```shell
npm install
```

After installing the dependencies you should copy the values from `.env.example` file. You only need to modify the values with `DATABASE_` prefix with the local configuration of your database

## Developing

### Run local environment

```shell
npm run dev
```

### Building

```shell
npm run build
```

### Deploying

Create a PR with the details about what you are trying to change, ask for review, and merge into the `main` branch
