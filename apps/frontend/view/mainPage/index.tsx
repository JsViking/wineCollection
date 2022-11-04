import classes from './mainPage.module.scss';
import { IWine } from 'models/wines';
import Card from 'components/Card';
import AddCard from 'components/AddCard';
import { useCrudContext } from 'store/crud.context';
import { getWines } from 'request';

interface Props {
  data: IWine[];
}
const MainPage = ({ data }: Props) => {
  const { setEditWine } = useCrudContext();
  return (
    <div className={classes.MainPage}>
      <AddCard onClick={() => setEditWine('new')} />
      {data?.map((wine) => (
        <Card {...wine} />
      ))}
    </div>
  );
};

export default MainPage;
