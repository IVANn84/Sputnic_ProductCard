export interface IProductCard {
     title: string;
     origin: string;
     price: {
          amount: number;
          currency: 'RUB' | 'USD' | 'EUR';
     };
     imageUrl: string;
}
