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
        deleteProduct = async (id) => {
            try {
              const products = await this.consultProduct();
              const updatedProducts = products.filter((product) => product.id !== id)
              await fs.promises.writeFile(this.path, JSON.stringify(updatedProducts, null, "\t"))
              console.log(`Product with id ${id} deleted successfully`)
              return updatedProducts
            } catch (error) {
              console.log(`Error deleting product with id ${id}: ${error}`)
            }
          };

          updateProduct = async (id, updatedProduct) => {
            try {
              const products = await this.consultProduct();
              const index = products.findIndex((product) => product.id === id)
              if (index === -1) {
                console.log(`Product with id ${id} not found`)
                return;
              }
              products[index] = { ...products[index], ...updatedProduct };
              await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"))
              console.log(`Product with id ${id} updated successfully`)
              return products;
            } catch (error) {
              console.log(`Error updating product with id ${id}: ${error}`)
            }
          }


        
    }
