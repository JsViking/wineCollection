import { ReactElement } from 'react';
import Layout from 'layouts/baseLayout';
import MainPage from 'view/mainPage';
import { getWines } from 'request';
import { GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import { IWine } from 'models/wines';

interface mainPageProps extends AppProps {
  wines: IWine[];
}

const Home = ({ wines }: mainPageProps) => {
  return <MainPage data={wines} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const responses = await Promise.all([getWines()]);
  const [wines] = responses;
  return {
    props: {
      wines,
    },
    revalidate: 1,
  };
};

export default Home;
