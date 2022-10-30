import classes from './Card.module.scss';
import { IWine } from 'models/wines';
import Typography from 'components/typography';

interface Props extends IWine {}

const Card = ({ title, image, description, year }: Props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.imageWrapper}>
        {' '}
        <img src={image}></img>
      </div>
      <Typography size="size__22">{title}</Typography>
      <Typography size="size__18" color="secondary">
        {description}
      </Typography>

      <div className={classes.year}>
        <Typography size="size__16">
          <span>Год: </span>
          {year}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
