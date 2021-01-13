interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function fetch(): Promise<Product[]> {}

/* utility-types Pick Example */

// type ShoppingItem = Pick<Product, "id" | "name" | "price">; // preview 를 위한 코드

function display(shoppingitem: Pick<Product, "id" | "name" | "price">) {}
