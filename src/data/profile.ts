import mongoose, { Document, Model, Schema } from 'mongoose';

interface IProfile extends Document {
    id: string;
    cash: number;
}

const profileSchema: Schema = new Schema({
    id: { type: String, unique: true, required: true },
    cash: { type: Number, default: 200 },
});

const Profile: Model<IProfile> = mongoose.model<IProfile>('profile', profileSchema);

export { Profile, IProfile };