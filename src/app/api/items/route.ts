import {NextRequest, NextResponse} from 'next/server';

export enum ItemAcsess {
    PUBLIC = 'public',
    PRIVATE = 'private',
    ADMIN = 'admin',
}

export type Item = {
    id: string;
    name: string;
    acsess: string;

};

const items: Item[] = [
    {id: '1', name: 'Item 1', acsess: ItemAcsess.PUBLIC},
    {id: '2', name: 'Item 2', acsess: ItemAcsess.PRIVATE},
    {id: '3', name: 'Item 3', acsess: ItemAcsess.ADMIN},
];

export  async function GET(request: NextRequest) {
    try{
        return NextResponse.json(items);
    }catch(error){
        return NextResponse.error('Internal Eror',{status: 500})
    }
}
