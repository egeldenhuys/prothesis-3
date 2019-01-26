export interface GenericQuestion {
    id: string;
    tag: string;
    question: string;
    answer?: string;
}

export function toGenericQuestion(json: JSON): GenericQuestion {
    if (!json['data']['answer']) {
        json['data']['answer'] = '';
    }

    return {
        id: json['id'],
        tag: json['tag'],
        question: json['data']['question'],
        answer: json['data']['answer']
    };
}

export function toAnswer(po: GenericQuestion): any {
    const obj = {...po};
    delete obj['question'];
    delete obj['id'];
    return obj;
}
