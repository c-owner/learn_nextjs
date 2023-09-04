import path from "node:path";
import {promises as fs} from "fs";


export type Product = {
    id: string;
    name: string;
    price: number;
};

export async function getProducts(): Promise<Product[]> {
    // getProducts 속도를 좀 늦추기 위해 for문을 돌림
    for (let i = 0; i < 1000000000; i++) {
        // do nothing
    }
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    // promise 이기 떄문에 async await 비동기 데이터 사용
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((product) => product.id === id);
}