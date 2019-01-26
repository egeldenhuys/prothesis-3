export interface PeopleOrientation {
    id: string;
    tag: string;
    options: {
        description: string;
        tooltip: string;
    }[];
    answers?: string[];
}

export function toPeopleOrientation(json: JSON): PeopleOrientation {
    return {
        id: json['id'],
        tag: json['tag'],
        options: json['data']['options'],
        answers: json['data']['answers']
    };
}

export function toAnswer(po: PeopleOrientation): any {
    const obj = po;
    delete obj['options'];
    return obj;
}
