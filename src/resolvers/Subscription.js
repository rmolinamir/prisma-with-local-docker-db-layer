function newClipSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.clipsClip({
    mutation_in: ['CREATED']
  }).node();
}

const newClip = {
  subscribe: newClipSubscribe,
  resolve: payload => payload,
}

module.exports = {
  newClip,
}
