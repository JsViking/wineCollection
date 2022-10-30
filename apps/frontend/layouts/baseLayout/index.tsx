import Header from 'components/Header';
import EditModal from 'feature/editModal';
import classes from './baseLayout.module.scss';
import { WithCrudContext } from 'store/crud.context';

interface Props {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <WithCrudContext>
        <div className={classes.BaseLayout}>
          <Header />
          <div className={classes.body}>{children}</div>
        </div>
        <EditModal />
      </WithCrudContext>
    </>
  );
};

export default BaseLayout;
