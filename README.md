# Post-manager

Post-manager are a series of scripts that handle deployment of blog post from [Strapi](https://strapi.io/) an headless CMS to 3 different blogging sites which include [medium](https://medium.com/), [dev.to](https://dev.to/), [hashnode](https://hashnode.com/). These scripts are meant to be executed as a cloud function and can be easily deployed [AWS Lambda](https://aws.amazon.com/lambda/) or [GCP](https://cloud.google.com/functions) or any cloud functions service of your choice.

&nbsp;

## Built With

- JavaScript,
- Node.js
- Axios

&nbsp;

## How it works

The post manager when integrated with Strapi webhooks, will automatically deploy the Strapi blog post to the various platforms mentioned above as long as you have a valid account on any of the platforms and you set up the needed environment variables.

&nbsp;

## Getting Started

To get a local simply clone the repo.

### Prerequisites

To run this project, you will need to have an exiting cloud account on any cloud functions service and setup a `nodejs` environment preferably node version 12 or 14 .

### Local Setup

`cd into the directory with command line terminal`

### Install

run `npm install` or `yarn install` to install all the dependencies of the project.

### Package

Use any native compression tool to package the contents of the folder into a `zip` file

&nbsp;

### Cloud Setup

Add the following environment variables to the node environment that you have set up. You would have to create the following tokens on the various or any of the blogging platforms listed above.

- DEV_TO_TOKEN (dev.to),
- HASH_NODE_TOKEN (hash node)
- MEDIUM_TOKEN (Medium User ID)
- MEDIUM_USER_ID (Medium User Token)

Note: the Environment variables must be labeled as is above.

## Deployment

Upload the zipped folder to the cloud function you have set up.

## Features

- ✔️ Deploys Published Posts.

&nbsp;

&nbsp;

## Authors

👤 **Author**

- Github: [solomonakp](https://github.com/solomonakp)
- twitter: [@dev_chuck](https://twitter.com/dev_chuck)

&nbsp;

&nbsp;

## 📝 License

This project is [MIT](lic.url) licensed.
