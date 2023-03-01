import fs from 'fs';



export default class ProductManager {
    constructor(){
        this.path = './Products.json';
        this.products = [];
    }

    // CODIGO DE LA CLASE
    consultProduct = async () => {
        if (fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path, "utf-8");
            const result = JSON.parse(data);
            console.log(result);
            return result;
        } else{
            return [];
        }
    };

        addProduct = async (product) => { 
            const products = await this.consultProduct();
            if(products.length === 0) {
                product.id = 1;
            } else {
                product.id = products[products.length -1].id +1;
            }
            products.push(product)
            await fs.promises.writeFile(this.path, JSON.stringify(products, null , "\t"))
        }
        getProducts = async () => {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8')
                const result = JSON.parse(data)
                console.log(result)
                return result
            } else {
                return []
            }
        }
        getProductById = async (id) => {
            if (fs.existsSync(this.path)){
                try{
                    const data = await fs.promises.readFile(this.path, 'utf-8')
                    const result = JSON.parse(data)
                    let idSearch = result.find((event) => event.id === id)
                    if (!idSearch) {
                        return "This product with this ID is not found"
                    } else {
                        return idSearch
                    }
                }catch (error) {
                    console.log(error)
                }
            }
        }


        
    }


    //CODIGO MIO
    //     addProduct = async (title,description,price,stock,thumbnail,code) => {
    //         const products = await this.getProducts()
    //         if (products.length === 0) {
    //             product.id = 1;
    //           } else {
    //         product.id = products[products.length - 1].id + 1;
    //           }
    //             products.push(product)
    //         await fs.promises.writeFile(
    //             this.path,
    //             JSON.stringify(products, null, "\t")
    //         )
    //         return product
    //     }
    //     getProducts = async () =>{
    //      if(fs.existsSync(this.path)) {
    //         const data= await fs.promises.readFile(this.path, 'utf-8')
    //         const result = JSON.parse(data)
    //         return result
    //      } else {
    //         return []
    //      }
    // }
    //     getProductsById = async (id) => {
    //         try{
    //             const products = await this.getProducts()
    //             return products.find((product) => product.id ===id)
    //         } catch (error){
    //             console.error(error)
    //             return null
    //         }
    //     }
    //     updateProduct = async (id, updatedProduct) => {
    //         try{
    //         const products = await this.getProducts()
    //         const productIndex = products.findIndex((product) => product.id === id)
    //         if (productIndex === -1){
    //             console.log(`Product with id ${id} not found`)
    //         }
    //         updatedProduct.id= id
    //         products[productIndex]= updatedProduct
    //         await this.saveProducts(products)
    //     } catch (error){
    //         console.error(error)
    //     }
    // }
    //     deleteProduct = async (id) => {
    //         try {
    //             const products = await this.getProducts();
    //             const updatedProducts = products.filter((product) => product.id !== id);
    //             await this.saveProducts(updatedProducts);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //         }
            
    //         saveProducts= async (products)  => {
    //             try {
    //                 const data = JSON.stringify(products, null, 2);
    //                 await fs.promises.writeFile(this.path, data);
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //             }
            
            

    // }