//定义一个接口，限制每个Person对象的格式 限制单个对象
export interface PersonInter{
    id:string,
    name:string,
    age:number,
    x?:number
}
//定义一个自定义类型Persons
export type Persons=Array<PersonInter>  //限制数组对象


export interface News {
    id: string;
    title: string;
    content: string;
}