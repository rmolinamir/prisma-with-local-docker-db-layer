const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../generated/prisma-client');

const jwt = require('jsonwebtoken')
const APP_SECRET = 'not-so-secret'

function getUserId(context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('JWT ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }

  throw new Error('Not authenticated');
}

// prisma.createClipsClip

const resolvers = {
  Query: {
    clips: (_, args, context, info) => {
      return context.prisma.clipsClips()
    },
  },
  Mutation: {
    createClip: (_, args, context, info) => {
      // const user = getUserId(context);
      return context.prisma.createClipsClip(
        {
          url: args.url,
          description: args.description,
          // postedBy: "1",
        },
        info,
      )
    },
  },
  Subscription: {
    newClip: {
      subscribe(parent, args, context, info) {
        return context.prisma.$subscribe.clipsClip({
          mutation_in: ['CREATED']
        }).node();
      },
      resolve: payload => payload,
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma
  }),
});

server.start(() => {
  console.log('Server is running on http://localhost:4000');
});
