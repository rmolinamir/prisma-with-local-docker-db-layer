// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { APP_SECRET, getUserId } = require('../utils');

function createClip(parent, args, context) {
  // const userId = getUserId(context);
  console.log('creating a clip: ', args)
  return context.prisma.createClipsClip({
    url: args.data.url,
    description: args.data.description,
  });
}

module.exports = {
  createClip,
}