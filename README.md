# ProductCard Component

Простой и адаптивный компонент карточки товара на React + TypeScript.

## Описание

Компонент принимает:
- Название (`title`)
- Страну происхождения (`origin`)
- Цену в копейках и валюту (`price.amount`, `price.currency`)
- URL изображения (`imageUrl`)

Цена отображается с корректным форматированием через `Intl.NumberFormat`.

## Адаптивность

На экранах < 500px карточки выводятся вертикально.

## Пример использования

```tsx
<ProductCard
  title="iPhone 15"
  origin="США"
  price={{ amount: 34900, currency: 'RUB' }}
  imageUrl="https://example.com/iphone15.jpg" 
/>
