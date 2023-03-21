import { Document, Model } from 'mongoose';
interface IProfile extends Document {
    id: string;
    usage: number;
    resource: number;
}
declare const Profile: Model<IProfile>;
export { Profile, IProfile };
