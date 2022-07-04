# DSE00 Post Web

DSE00 Post Web is a client facing Frontend product featuring Post and student matching.

## Getting started

**Prerequisite**

Before run this project, you need to install

- node (>= 14)
- yarn (>=1.10)

**Start on local**

```bash
# to install dependencies
> yarn

# to start hot-reload dev environment, ready at localhost:3000
> yarn debug:development

# to deploy
> yarn build
> yarn start
```

## Environments

| Environment | Host                           | Branch        | .env               | NODE_ENV      | APP_ENV       |
| ----------- | ------------------------------ | ------------- | ------------------ | ------------- | ------------- |
| local       | http://localhost:3000/         | `n/a`         | `.env.cmdrc`       | `development` | `any`         |
| development | https://dse00-Post.netlify.app | `development` | `.env.development` | `production`  | `development` |
| production  | https://Post.dse00.com/        | `production`  | `.env.production`  | `production`  | `production`  |

## Coding

**Practice**

You should:

- Define [typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) type to all variables /
  functions you created

**Rules**

Before commit, please make sure:

- Any changes make should create a new branch and submit a pull request
- Direct commit to staging / release / master branch is prohibited
- Commit message should follow [conventional commit](https://www.conventionalcommits.org/en/v1.0.0)
- JIRA task number is **REQUIRED** on your commit message, if it exists
- Commit message sample `fix: [Post-1000] Post list display error`
