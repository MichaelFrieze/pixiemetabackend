[This is a link to the current dev deployment on Railway.](https://pixiemetabackend-develop.up.railway.app/admin)

> NOTE: we have a "develop" branch.

# Running this locally with PostgreSQL

Create a copy of the `.env.example` file and rename it to `.env`.

Fill out the `.env` file with the correct values for your local development environment.

You will need:

```
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
JWT_SECRET=
PGDATABASE=
PGHOST=
PGPASSWORD=
PGPORT=
PGUSER=
```

You might have to ask for these values.

Also, you can replace the postgres values with your own local database if you want.

Then, follow the rest of the documentation that Strapi provided below in this README.

# Or, you can run this locally with SQLite

- open the `config/database.js` file
- comment out the postgres connection
- uncomment the local sqlite connection
- save the file

> Make sure you don't push any code until you change back the `config/database.js` file.

Next, create a copy of the `.env.example` file and rename it to `.env`.

Fill out the `.env` file with the correct values for your local development environment. You can remove the postgres values.

You will need:

```
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
JWT_SECRET=
```

You might have to ask for these values.

Then, follow the rest of the documentation that Strapi provided below in this README.

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```

npm run develop

# or

yarn develop

```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```

npm run start

# or

yarn start

```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```

npm run build

# or

yarn build

```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

```

```
