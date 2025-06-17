import reactSvg from '../../assets/react.svg';
import type { IProductCard } from '../../types';

export const MOCK_PROPS: IProductCard = {
     title: 'Название',
     origin: 'Россия',
     price: { amount: 34900, currency: 'RUB' },
     imageUrl: reactSvg,
};
