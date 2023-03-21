import mongoose, { Document, Model, Schema } from 'mongoose';

interface IProfile extends Document {
    id: string;
	usage: number;
	resource: number;
}

const profileSchema: Schema = new Schema({
    id: { type: String, unique: true, required: true },
	usage: { type: Number, default: 0 },
	resource: { type: Number, default: 2700 }
});

const Profile: Model<IProfile> = mongoose.model<IProfile>('profile', profileSchema);

export { Profile, IProfile };