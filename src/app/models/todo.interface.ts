export interface ITodo {
    id:number;
    title: string;
    description : string ;
    isCompleted : boolean ;
    isArchived : boolean ;
    endDate : Date | number |string;//כדי שנוכל לפרסר אותו למשהו אחר 
    selected: boolean;
}       