class ProductManager{

	constructor(){
		this.products= [];	
	}

	getProducts = () => {
	console.log(this.products);
		return 
	};

	createProduct = (title,description,price,stock,thumbnail,code) => {
		const product = {
			code: this.products.length +1,
			title,
			description,
			price,
			stock,
			thumbnail, 
		};

		this.products.push(product);
	};
	//HAY QUE REVISAR ESTA FUNCION Y REEMPLAZAR ADDPRODUCT POR GETPRODUCTBYID (VER EN LA DIAPOSITIVA )
	// addProduct = (productCode, productId) => {
	// 	const productIndex = this.products.findIndex((product) => product.code === productCode)

	// 	if (productIndex === -1) {
	// 		console.log("Not Found")
	// 		return;
	// 	}
		
	// 	const productExists = this.products[productIndex].code.includes(productId)

	// 	if (productExists) {
	// 		console.log("The product already exists")
	// 		return;
	// 	}

	// 	this.products[productIndex].code.push(productId)
	// };


}

const productManager = new ProductManager()


productManager.createProduct("TV Led Curvo","Una TV de 60'' ",100000,50, "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.muycomputer.com%2F2016%2F01%2F20%2Ftelevisores-pantalla-curva-ventajas%2F&psig=AOvVaw3HU0RlpiZLlaZzucqsqEY-&ust=1676587086933000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjcguHLmP0CFQAAAAAdAAAAABAI)")
productManager.createProduct("Microondas","Microondas Samsung ",50000,30, "url(foto)")

productManager.getProducts();
