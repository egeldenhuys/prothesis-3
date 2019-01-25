export interface Priorities {
    id: string;
    options: string[];
    answers?: string[];
}

export function to_priority(json: JSON): Priorities {
    return {
        id: json['id'],
        options: json['data']['options'],
        answers: json['data']['answers']
    };
}
