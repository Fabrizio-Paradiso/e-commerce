export const getItem = (products) => {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
} 
export default getItem