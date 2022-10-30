import Typography from 'components/typography';
import classes from './AddCard.module.scss';

interface Props {
  onClick?: () => void;
}

const AddCard = ({ onClick }: Props) => {
  return (
    <div className={classes.AddCard} onClick={onClick}>
      <Typography className={classes.plus} color="secondary" fontWeight="bold">
        +
      </Typography>
    </div>
  );
};

export default AddCard;
