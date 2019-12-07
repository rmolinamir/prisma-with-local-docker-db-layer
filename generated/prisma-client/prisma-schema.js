module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateClipsClip {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type ClipsClip {
  id: Int!
  description: String!
  url: String!
}

type ClipsClipConnection {
  pageInfo: PageInfo!
  edges: [ClipsClipEdge]!
  aggregate: AggregateClipsClip!
}

input ClipsClipCreateInput {
  id: Int
  description: String!
  url: String!
}

type ClipsClipEdge {
  node: ClipsClip!
  cursor: String!
}

enum ClipsClipOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
}

type ClipsClipPreviousValues {
  id: Int!
  description: String!
  url: String!
}

type ClipsClipSubscriptionPayload {
  mutation: MutationType!
  node: ClipsClip
  updatedFields: [String!]
  previousValues: ClipsClipPreviousValues
}

input ClipsClipSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClipsClipWhereInput
  AND: [ClipsClipSubscriptionWhereInput!]
  OR: [ClipsClipSubscriptionWhereInput!]
  NOT: [ClipsClipSubscriptionWhereInput!]
}

input ClipsClipUpdateInput {
  description: String
  url: String
}

input ClipsClipUpdateManyMutationInput {
  description: String
  url: String
}

input ClipsClipWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ClipsClipWhereInput!]
  OR: [ClipsClipWhereInput!]
  NOT: [ClipsClipWhereInput!]
}

input ClipsClipWhereUniqueInput {
  id: Int
}

scalar Long

type Mutation {
  createClipsClip(data: ClipsClipCreateInput!): ClipsClip!
  updateClipsClip(data: ClipsClipUpdateInput!, where: ClipsClipWhereUniqueInput!): ClipsClip
  updateManyClipsClips(data: ClipsClipUpdateManyMutationInput!, where: ClipsClipWhereInput): BatchPayload!
  upsertClipsClip(where: ClipsClipWhereUniqueInput!, create: ClipsClipCreateInput!, update: ClipsClipUpdateInput!): ClipsClip!
  deleteClipsClip(where: ClipsClipWhereUniqueInput!): ClipsClip
  deleteManyClipsClips(where: ClipsClipWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  clipsClip(where: ClipsClipWhereUniqueInput!): ClipsClip
  clipsClips(where: ClipsClipWhereInput, orderBy: ClipsClipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClipsClip]!
  clipsClipsConnection(where: ClipsClipWhereInput, orderBy: ClipsClipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClipsClipConnection!
  node(id: ID!): Node
}

type Subscription {
  clipsClip(where: ClipsClipSubscriptionWhereInput): ClipsClipSubscriptionPayload
}
`
      }
    