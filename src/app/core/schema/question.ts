export interface QuestionModel {
    id?: string;
    label?: string;
    percent?: number;
    title?: string;
    items?: Item[];
}

export interface Item {
    id?: string;
    label?: string;
    title?: string;
    points?: number;
    selectedValue?: string;
    questions?: Question[];
}

export interface Question {
    id?: number;
    description?: string;
    evidence?: string;
    argument?: string;
    files?: File[];
}

export interface File {
    url?: string;
    name?: string;
    size?: number;
    progress?: number;
}


