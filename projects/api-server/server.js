import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

import Customer from './models/data/customer';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/expenses');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongoDb connection was successful!');
});

router.route('/').get((req, res) => {
    return res.send({ message: 'Testing / route working' });
});

router.route('/customer/add').post((request, response) => {
    let earning = new Customer(request.body);
    earning.save()
        .then(_ => {
            response.status(200).send(earning);
        })
        .catch(_ => {
            response.status(400).send('Failed to create a new customer record');
        });
});

router.route('/customer/list').get((req, res) => {
    Customer.find(((err, customers) => {
        if (err) {
            console.log(err);
        } else {
            console.log('customers is:', customers);
            res.json(customers)
        }

    }));
});

app.use('/', router);

app.listen(5000, () => console.log('Express server running on port 5000'));
