// types 관련 파일

/* fetchCovidSummary Types */

export interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Global {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CovidSummaryResponse {
  Countries: Array<Country>;
  Date: string;
  Global: Global;
  Message: string;
}

/* fetchCountryInfo Types */

interface CountryInfo {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: number;
  Lon: number;
  Cases: number;
  Status: string;
  Date: string;
}

export type CountryInfoResponse = Array<CountryInfo>;
