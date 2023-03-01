import ProductManager from "../ProductManager.js";

const manager = new ProductManager();

const env = async ( ) => {
   let primeraConsulta = await manager.consultProduct()
   console.log(primeraConsulta)
    const product ={
        title: "celular",
        description: "celular",
        price: 2,
        thumbnail: "foto",
        code: "123",
        stock: 1,

    }
    let result = await manager.addProduct(product)
    console.log(result)

    let segundaConsulta = await manager.consultProduct()
    console.log(segundaConsulta)

    let terceraConsulta = await manager.getProducts()
    console.log(terceraConsulta)

    let consultaId = await manager.getProductById(2)
    console.log(consultaId)
    //CODIGO MIO
    // const addedProduct = await manager.addProduct(product);
    // console.log("Producto agregado:", addedProduct);
  
    // // Consultar todos los productos
    // const allProducts = await manager.getProducts();
    // console.log("Todos los productos:", allProducts);
  
    // // Consultar un producto por id
    // const productId = 1;
    // const productById = await manager.getProductById(productId);
    // console.log("Producto por id:", productById);
  
    // // Actualizar un producto
    // const productToUpdate = { ...productById, title: "nueva tele" };
    // const updatedProduct = await manager.updateProduct(productId, productToUpdate);
    // console.log("Producto actualizado:", updatedProduct);
  
    // // Eliminar un producto
    // const deletedProduct = await manager.deleteProduct(productId);
    // console.log("Producto eliminado:", deletedProduct);
}

env()