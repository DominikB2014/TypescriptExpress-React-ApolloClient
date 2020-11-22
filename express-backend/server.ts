import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req,res) => {
    res.send({
        json: 'hi'
    })
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`server has started on ${port}`);
})