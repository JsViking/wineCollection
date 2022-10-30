import { ReactElement } from 'react';
import Layout from 'layouts/baseLayout';
import MainPage from 'view/mainPage';

const mock = [
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
  {
    title: 'Rooibos Ridge Pinotage',
    description: `Вино насыщенного рубиново-красного цвета, с выразительными ароматами вишни, горького шоколада, лакрицы, мяты и кофе. Среднетелое, плотное и хорошо сложенное во вкусе, с фруктовым характером, бархатистыми танинами и пряными нотками в долгом послевкусии.
  🍷 Читайте подробнее на SimpleWine.ru: https://simplewine.ru/catalog/product/fairview_rooibos_ridge_pinotage_2020_075_135837/`,
    image:
      'https://static.simplewine.ru/upload/iblock/31c/31c8fa22e8563ed82fb4f65bc9a91169.jpg@x860',
    year: 2020,
  },
];

const Home = () => {
  return <MainPage data={mock} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
