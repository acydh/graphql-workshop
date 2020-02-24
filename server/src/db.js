const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: "https://eu1.prisma.sh/graphql-workshop/graphql-workshop/dev",
    debug: false,
})

module.exports = db;