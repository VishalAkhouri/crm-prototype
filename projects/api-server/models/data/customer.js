import mongoose, {Schema} from 'mongoose';

const customer = new Schema({
    firstName: String,
    lastname: String,
    dob: String,
    email: String,
    phone: String,
    address: String,
    fullName: String,
    customerCode: String,
});

export default mongoose.model('Customer', customer);
