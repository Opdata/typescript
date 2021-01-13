interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록 받는 API 함수
function fetch(): Promise<Product[]> {}

/* utility-types Pick Example */

// type ShoppingItem = Pick<Product, "id" | "name" | "price">; // preview 를 위한 코드

// 상품 상세 정보 나타내는 함수
function display(shoppingitem: Pick<Product, "id" | "name" | "price">) {}

/* utility-types Omit Example */
interface AddressBook {
  name: string;
  phone: number;
  address: string;
}

const phonebook: Omit<AddressBook, "address"> = {
  name: "근무",
  phone: 123,
};

const addressBook: Omit<AddressBook, "phone"> = {
  name: "이름",
  address: "관악",
};

// type updateProduct = Partial<Product>; // preview 를 위한 코드

// 특정 상품 정보 업데이트 함수
function updateProductItem(productItem: Partial<Product>) {
  //
}
