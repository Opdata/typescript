// /* Generic을 쓰지 않고 Union Type 사용 */

// const emails: { value: string; selected: boolean }[] = [
//   { value: "naver.com", selected: true },
//   { value: "google.com", selected: false },
//   { value: "kakao.com", selected: false },
// ];

// const products: { value: number; selected: boolean }[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// function CreateDropdown(item: { value: string | number; selected: boolean }) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// emails.forEach((email) => {
//   const item = CreateDropdown(email);
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });

// products.forEach((email) => {
//   const item = CreateDropdown(email);
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });

// /* Interface 사용 및 Union Type 사용 형태 */
// interface email {
//   value: string;
//   selected: boolean;
// }

// interface product {
//   value: number; // 코드 중복
//   selected: boolean; // 코드 중복
// }

// const useInterfaceemails: email[] = [
//   { value: "naver.com", selected: true },
//   { value: "google.com", selected: false },
//   { value: "kakao.com", selected: false },
// ];

// const useInterfaceproducts: product[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// function useInterfaceCreateDropdown(item: email | product) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// useInterfaceemails.forEach((email) => {
//   const item = useInterfaceCreateDropdown(email);
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });

// useInterfaceproducts.forEach((email) => {
//   const item = useInterfaceCreateDropdown(email);
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });

/* Interface Generic 사용 */

interface GenericItem<T> {
  value: T;
  selected: boolean;
}

const GenericEmail: GenericItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "google.com", selected: false },
  { value: "kakao.com", selected: false },
];

const GenericProduct: GenericItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function GenericCreateDropdown(
  item: GenericItem<string> | GenericItem<number>
) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

GenericEmail.forEach((email) => {
  const item = GenericCreateDropdown(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

GenericProduct.forEach((email) => {
  const item = GenericCreateDropdown(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

/* 위를 더 개선한 코드 부분 */

// function GenericCreateDropdown<T>(item: GenericItem<T> | GenericItem<T>) { // 함수 정의부분과 매개변수 Generic 추가
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// GenericEmail.forEach((email) => {
//   const item = GenericCreateDropdown<string>(email); // Generic 추가
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });

// GenericProduct.forEach((email) => {
//   const item = GenericCreateDropdown<number>(email); // Generic 추가
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });
