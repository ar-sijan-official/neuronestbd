export type Language = 'bn' | 'en';

export type Page = 'about' | 'centers' | 'tools' | 'guide';

export interface Center {
  id: string;
  nameBn: string;
  nameEn: string;
  typeBn: string;
  typeEn: string;
  addressBn: string;
  addressEn: string;
  phone: string;
  servicesBn: string[];
  servicesEn: string[];
  district: 'barisal' | 'patuakhali' | 'bhola' | 'pirojpur' | 'jhalokathi' | 'barguna';
  verified: 'verified' | 'partial';
  openTimeBn: string;
  openTimeEn: string;
}

export interface Product {
  id: string;
  nameBn: string;
  nameEn: string;
  typeBn: string;
  typeEn: string;
  descBn: string;
  descEn: string;
  url: string;
  colorTheme: 'teal' | 'rose';
}
