import classes from './editPage.module.scss';

interface Props {
  onClick?: () => void;
}

const EditPage = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} className={classes.EditPage}>
      Snippet
    </div>
  );
};

export default EditPage;
