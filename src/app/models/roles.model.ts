export interface Roles {
    id: string;
    tag: string;
    options: {
        description: string;
        tooltip: string;
    }[];
    answers?: string[];
}

export function toRole(json: JSON): Roles {
    return {
        id: json['id'],
        tag: json['tag'],
        options: json['data']['options'],
        answers: json['data']['answers']
    };
}


export function toAnswer(po: Roles): any {
    const obj = po;
    delete obj['options'];
    return obj;
}
