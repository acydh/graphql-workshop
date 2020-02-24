const { forwardTo } = require('prisma-binding');

const Query = {
    facts: forwardTo('db'),
}

module.exports = Query;
