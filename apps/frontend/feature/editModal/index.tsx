import classes from './editModal.module.scss';

const EditModal = () => {
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
