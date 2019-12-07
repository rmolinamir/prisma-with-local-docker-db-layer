async function clips(parent, args, context) {
  return context.prisma.clipsClips();
}

module.exports = {
  clips,
}