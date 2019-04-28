const typeDefs = `
    type Block {
      id: String!
      links: String!
      number: String!
      blockHash: String!
      blockBeneficiaryReward: String
      blockCreationTime: String
      blockDifficulty: String
      blockGasLimit: String
      blockGasUsed: String
      hasBeneficiaryAlias: String
      parentBlock: Block
    }

    type Account {
      id: String!
      links: String!
      address: String! 
      nonce: Int! 
      balance: String!
    }

    type Query {
      blocks(number: String id: String blockHash: String label: String): Block
      accounts(address: String): Account
    }

    type Subscription {
        latestBlock: Block
    }
`

module.exports = typeDefs
