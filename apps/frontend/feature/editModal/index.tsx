import classes from './editModal.module.scss';
import { useCrudContext } from 'store/crud.context';
import Typography from 'components/typography';
import Input from 'components/input';
import { useState } from 'react';
import Button from 'components/Button';

const EditModal = () => {
  const { setEditWine, editWine } = useCrudContext();
  const [state, setState] = useState({
    title: '',
    description: '',
    year: 0,
    image: '',
  });
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
          <div className={classes.form}>
            <Input
              label="Название"
              value={state.title}
              onChange={(value) => setState({ ...state, title: String(value) })}
            />
            <Input
              label="Описание"
              value={state.description}
              onChange={(value) =>
                setState({ ...state, description: String(value) })
              }
            />
            <Input
              label="Год"
              value={state.year}
              onChange={(value) => setState({ ...state, year: Number(value) })}
              type="number"
            />
          </div>
          <Button className={classes.submit}>
            {editWine === 'new' ? 'Добавить' : 'Обновить'}
          </Button>
        </div>
      </div>
      <div className={classes.overlay} onClick={() => setEditWine(null)} />
    </>
  );
};

export default EditModal;
