const express = require('express');
const router = express.Router();
const User = require('./schemas/user');

router.get('/users', (req, res) => {
    User.find({})
    .then(user => {
        res.send(user);
    })
});

router.post('/users', (req, res) => {
    User.create(req.body)
    .then(user =>{
        res.send(user);
    })
});

router.post('/users/login', (req, res) => {
    User.findOne({email: req.body.email, password: req.body.password}
        )
        .then(user => {
            res.send(user);
        })
});

router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=>
        User.findOne({_id: req.params.id})
    )
    .then(user => {
        res.send(user);
    })
});

router.delete('/users/:id', (req, res) => {
    User.deleteOne({_id : req.params.id})
    .then(user =>{
        res.send(user);
    })
});

module.exports = router;

// var cookieSession = require('cookie-session')

// app.set('trust proxy', 1);

// app.use(cookieSession({
//     name: "session",
//     keys: ['key1', 'key2']
// }))
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use('/graphql', express_graphql(req => ({
//     schema: TransactionSchema,
//     rootValue: TransactionResolver,
//     graphiql: true,
//     context: { session: req.session }
// })));

// const gql = new GraphQLClient("http://localhost:8000/graphql", { credentials: 'include' });