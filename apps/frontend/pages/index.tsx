import { ReactElement } from 'react';
import { Button } from 'ui';
import Layout from 'layouts/baseLayout';

const Home = () => {
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
