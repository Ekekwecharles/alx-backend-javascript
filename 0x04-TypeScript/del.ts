interface duche {
    doubel(a: string, b: string): string;
}

export class Me implements duche {
    doubel(a, b){
        return "apple";
    }
}

//object
export interface obi {
    readonly john: string;
    peter: string;
    james?: string;
    [key: string]: any;
}

const obinn: obi = {
    john: "now",
    peter: "nw",
    james: "not"
}

type duchebag = {
    holyghost: string;
    fire: string;
    supernatural: string;
};