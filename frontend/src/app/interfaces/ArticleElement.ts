import { CategoryElement } from './CategoryElement';

export interface ArticleElement{
    title:string;
    description:string;
    category:CategoryElement;
    createdDateTime:string;

}