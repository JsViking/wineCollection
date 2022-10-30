import classes from './mainPage.module.scss';
import { IWine } from 'models/wines';
import Card from 'components/Card';

interface Props {
  data: IWine[];
}
const MainPage = ({ data }: Props) => {
  return (
    <div className={classes.MainPage}>
      {data.map((wine) => (
        <Card {...wine} />
      ))}
    </div>
  );
};

export default MainPage;
