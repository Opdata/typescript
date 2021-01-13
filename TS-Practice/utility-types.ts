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

// utility-types Partial 구현 방식1부터 개선해가며 방식4까지 Partial 순차적으로 구현
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// Optinal 을 사용한 구현 방식1
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// Optinal 사용과 직접 속성에 접근하여 구현 방식2
// type UserProfileUpdate = {
//   // UserProfileUpdate interface 와 동일한 구조
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// Optinal과 Mapped Type 반복을 활용한 구현 방식3( 2번 방식을 더 간결하게 표현한 방식)
// type UserProfileUpdate = {
//   [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
// };

// keyof를 사용한 구현 방식4
// type UserProfileUpdate = {
//   // 방식3을 더 간결하게 표현한 방식
//   [p in keyof UserProfile]?: UserProfile[p];
// };

// Generic 사용하여 더 간결하게
type UserProfileUpdate<T> = {
  // 방식4을 더 간결하게 표현한 방식,
  // Mapped Type을 활용한 구현, 실제 Partial 구현 구조
  [p in keyof T]?: T[p];
};
