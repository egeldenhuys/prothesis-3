export interface GenericQuestion {
    id: string;
    question: string;
    answer?: string;
}

export function to_generic_question(json: JSON): GenericQuestion {
    return {
        id: json['id'],
        question: json['data']['question'],
        answer: json['data']['answer']
    };
}
