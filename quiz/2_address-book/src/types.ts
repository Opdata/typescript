interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

/* Enum Add */
enum PhoneType {
  /* 제한된 키워드 같은 범위를 정해줄때 유용하게 사용 */
  home = "home",
  office = "office",
  studio = "studio",
}

export { Contact, PhoneType };
