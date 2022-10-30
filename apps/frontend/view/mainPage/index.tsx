import classes from './mainPage.module.scss';
import { IWinde } from 'models/wines';

interface Props {
  data: IWinde[];
}
const MainPage = ({ data }: Props) => {
  return (
    <div className={classes.MainPage}>
      {data.map(() => (
        <div>!</div>
      ))}
    </div>
  );
};

export default MainPage;
