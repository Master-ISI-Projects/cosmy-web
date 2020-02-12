export interface Product {
  id?: number;
  title?: string;
  category: string;
  image?: string;
  price?: number;
  qty?: number;
  weight?: number;
  description?: string;
  applicationProtocol?: string;
  video?: string;
  inSolde?: boolean;  
  pourcentagePromotion? : number,
  favourite? : boolean,
  productSeller?: string,
  createdAt : string,
}
