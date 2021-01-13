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
