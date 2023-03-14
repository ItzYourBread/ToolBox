import { Client, Interaction } from "eris";
declare const _default: {
    data: {
        name: string;
        description: string;
        options: {
            name: string;
            description: string;
            type: 1;
        }[];
    };
    execute(client: Client, interaction: Interaction): Promise<void>;
};
export default _default;
