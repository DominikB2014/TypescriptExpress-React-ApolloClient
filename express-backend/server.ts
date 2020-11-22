import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const app = express();
const port = 8080;


app.get('/', (req,res) => {
    res.send({
        json: 'hi'
    })
})

app.use('/graphql', graphqlHTTP({
    schema: undfined,
    graphiql: true
}))

app.listen(port, () => {
    console.log('server has started');
})