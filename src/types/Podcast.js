const { gql } = require("apollo-server");

module.exports = gql`
  type Podcast {
    id: ID!
    name: String!
    url: String!
  }

  type Query{
      podcast: [Podcast]
  }

  input CreatePodcastInput{
      name: String!
      url: String!
  }

  input UpdatePodcastInput{
      name: String
      url: String
  }

  type DeletePayload{
      id: ID!
  }

  type{
      createPodcast(input: CreatePodcastInput!): Podcast!
      updatePodcast(input: UpdatePodcastInput!): Podcast!
      deletePodcast(id: ID): DeletePayload!
  }
`;
