class product {
  title;
  price;
  imageUrl;

  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.imageUrl =this.imageUrl;
  }

}

class shoppingCart {
   items = [];

   set setPrice(value){
    this.items.push(value);
    this.totalOutput.innerHTML = `<h2>price \$${this.getPrice}</h2>`;
   }

   get getPrice(){
    const totalPrice = this.items.reduce((prevValue,curValue)=>{
      return prevValue+curValue.price;
    },0) ;
    console.log(totalPrice);
    return totalPrice;
   }

   addProduct(product){
    this.setPrice = product;
  }

   render() {
    const cartEl = document.createElement('Section');
    cartEl.innerHTML = `
    <h2>price \$ 0</h2>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product){
    this.product = product;
  }

  addToCart(){
    console.log("Adding product to cart....");
    console.log(this.product);
    App.addProductToCart(this.product);
  }

  render(){
    const list = document.createElement('li');
    list.className = 'product-list';
    console.log(this.product);
    list.innerHTML = `
    <div class="product-item__content">
      <h2>${this.product.title}</h2>
      <h3>${this.product.price}</h3>
      <h3>${this.product.imageUrl}</h3>
      <button>Add to cart</button>
    </div>
    `
    const button = list.querySelector('button');
    button.addEventListener('click',this.addToCart.bind(this));
    return list;
  }
}

class productList {
  products =[
    new product("prod1",123,"www.prod1"),
    new product("prod2",234,"www.prod2")
  ];

  render() {
    const unorderList = document.createElement('ul');
    unorderList.className = 'product-list';
    for (const product of this.products){
      const productItem = new ProductItem(product);
      const list = productItem.render();
      unorderList.append(list);
    }
    return unorderList;
  }
}

class shop{
  
  render(){
    const renderHook = document.getElementById("app");
    this.cart = new shoppingCart();
    const cartEl = this.cart.render();
    const prodctList = new productList();
    const productListEl = prodctList.render();
    
    renderHook.append(cartEl);
    renderHook.append(productListEl);
  }
}

class App{
  static init() {
    const shp = new shop();
    shp.render();
    this.cart = shp.cart;
    
  }

  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();