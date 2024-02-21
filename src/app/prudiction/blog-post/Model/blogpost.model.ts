import { categorymodel } from "../../Models/category.model";

export interface blogpostmodel
{
    id:string;
    title:string; 
    shortDescription:string;
    content:string;
    featuredImageUrl:string;
    pulishedDate:Date;
    author:string;
    isvisable:boolean;
    urlHandler:string;
    categores:categorymodel[];
}

