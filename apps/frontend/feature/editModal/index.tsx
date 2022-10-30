import classes from './editModal.module.scss';
import { useCrudContext } from 'store/crud.context';

const EditModal = () => {
  const { setEditWine, editWine } = useCrudContext();
  if (!editWine) return null;
  return (
    <>
      <div className={classes.EditModal}>
        <div className={classes.body}></div>
      </div>
      <div className={classes.overlay} />
    </>
  );
};

export default EditModal;
