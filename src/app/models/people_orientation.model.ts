export interface PeopleOrientation {
    id: string;
    options: {
        description: string;
        tooltip: string;
    }[];
    answers?: string[];
}

export function to_people_orientation(json: JSON): PeopleOrientation {
    return {
        id: json['id'],
        options: json['data']['options'],
        answers: json['data']['answers']
    };
}
