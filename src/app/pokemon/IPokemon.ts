export interface IPokemon {
    id : number;

    name : Record<string, string>;

    type : string[];

    stats : Record<string, number>;
};