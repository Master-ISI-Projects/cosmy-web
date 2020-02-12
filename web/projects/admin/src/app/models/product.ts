export interface Product {
  id?: number;
  title?: string;
  category: string;
  image?: string;
  price?: string;
  weight?: string;
  description?: string;
  applicationProtocol?: string;
  video?: string;
  inSolde?: boolean;  
  pourcentagePromotion? : number,
  favourite? : boolean,
  productSeller?: string,
  createdAt : string,
}
