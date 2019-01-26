export interface Priorities {
    id: string;
    tag: string;
    options: string[];
    answers?: string[];
}

export function toPriority(json: JSON): Priorities {
    return {
        id: json['id'],
        tag: json['tag'],
        options: json['data']['options'],
        answers: json['data']['answers']
    };
}

export function toAnswer(po: Priorities): any {
    const obj = po;
    delete obj['options'];
    return obj;
}
