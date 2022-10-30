import Header from 'components/Header';
import EditModal from 'feature/editModal';
import classes from './baseLayout.module.scss';

interface Props {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <div className={classes.BaseLayout}>
        <Header />
        <div className={classes.body}>{children}</div>
      </div>
      <EditModal />
    </>
  );
};

export default BaseLayout;
