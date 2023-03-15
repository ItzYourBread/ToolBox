import { Document, Model } from 'mongoose';
interface IProfile extends Document {
    id: string;
    cash: number;
}
declare const Profile: Model<IProfile>;
export { Profile, IProfile };
