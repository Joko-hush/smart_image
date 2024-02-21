import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkProvider: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String },
    firstName: { type: String},
    lastName: { type: String},
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 1 }
});

// export interface IUser extends Document {
//     clerkProvider: string;
//     email: string;
//     username: string;
//     photo: string;
//     firstName: string;
//     lastName: string;
//     planId?: number;
//     creditBalance?: number;
// }

const User = models?.User || model('User', UserSchema);

export default User;