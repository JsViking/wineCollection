import { ReactElement } from 'react';
import Layout from 'layouts/baseLayout';
import EditPage from 'view/editPage';

const Edit = () => {
  return <EditPage />;
};

Edit.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Edit;
