class ProductManager{

	constructor(){
		this.products= [];	
	}

	getProducts = () => {
	console.log(this.products);
		return 
	};

	createProduct = (title,description,price,stock,thumbnail,code) => {
		if (!title || !description || !price || !stock || !thumbnail || !code) {
			console.log("Error: all fields are mandatory");
			return;
	
	};
	const productIndex = this.products.findIndex((product) => product.code === code);
    if (productIndex !== -1) {
      console.log("Error: code already exists");
      return;
    }
	const product = {
		id: this.products.length + 1,
		code,
		title,
		description,
		price,
		stock,
		thumbnail,
	  };
  
	  this.products.push(product);
	  console.log("Product added successfully");
};
getProductById = (productId) => {
    const product = this.products.find((prod) => prod.id === productId);
    if (product) {
      console.log("Product found");
      console.log(product);
    } else {
      console.log("Error: Product not found");
    }
  };
}



const productManager = new ProductManager()


productManager.createProduct("TV Led Curvo","Una TV de 60'' ",100000,50, "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.muycomputer.com%2F2016%2F01%2F20%2Ftelevisores-pantalla-curva-ventajas%2F&psig=AOvVaw3HU0RlpiZLlaZzucqsqEY-&ust=1676587086933000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjcguHLmP0CFQAAAAAdAAAAABAI)", 1)
productManager.createProduct("Microondas","Microondas Samsung ",50000,30, "url(foto)", 2)
productManager.createProduct("Otro producto","Otra descripcion ",150,20, "url(foto)", 3)

productManager.getProductById(1)
productManager.getProductById(4) // Error: Product not found

productManager.getProducts();