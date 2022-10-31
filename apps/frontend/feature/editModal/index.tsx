import classes from './editModal.module.scss';
import { useCrudContext } from 'store/crud.context';
import Typography from 'components/typography';

const EditModal = () => {
  const { setEditWine, editWine } = useCrudContext();
  if (!editWine) return null;
  return (
    <>
      <div className={classes.EditModal}>
        <div className={classes.body}>
          <Typography
            size="size__32"
            className={classes.close}
            color="secondary"
            onClick={() => setEditWine(null)}
          >
            +
          </Typography>
        </div>
      </div>
      <div className={classes.overlay} onClick={() => setEditWine(null)} />
    </>
  );
};

export default EditModal;
