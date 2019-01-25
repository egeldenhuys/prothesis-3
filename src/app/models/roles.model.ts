export interface Roles {
    id: string;
    options: {
        description: string;
        tooltip: string;
    }[];
    answers?: string[];
}

export function to_role(json: JSON): Roles {
    return {
        id: json['id'],
        options: json['data']['options'],
        answers: json['data']['answers']
    };
}
