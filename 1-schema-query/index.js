const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
    # pontos de entrada
    type Query{
       ola: String,
       horaCerta: String
    }
`;

const resolvers = {
    Query:{
        ola(){
            return 'Hello'
        },
        horaCerta(){
            return `${new Date}`;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen().then(({ url }) => {
    console.log(`Executando url:${url}`);
});