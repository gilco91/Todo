export interface ITodo {
    id:string;
    title: string;
    description : string ;
    isCompleted : boolean ;
    isArchived : boolean ;
    endDate : Date | number |string;//כדי שנוכל לפרסר אותו למשהו אחר 
    selected: boolean;
}       