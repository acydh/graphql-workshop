const Mutations = {
    async submitFact(parent, args, ctx, info) {
        const { type, text, upvotes } = args;
        const post = await ctx.db.mutation.createFact({
            data: {
                text,
                upvotes
            }
        }, info);
        return post;
    }
}

module.exports = Mutations;