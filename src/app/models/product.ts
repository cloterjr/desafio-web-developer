import { Image } from "./image";

export class Product {
    id : number;
    name : string;
    idCategorie : number;
    price: number;
    images: Image[];
    description: string;
    detail: string;
}