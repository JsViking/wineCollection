import classes from './editModal.module.scss';
import { useCrudContext } from 'store/crud.context';
import Typography from 'components/typography';
import Input from 'components/input';
import { useState } from 'react';
import Button from 'components/Button';

type Validation = {
  title?: string;
  description?: string;
  year?: string;
  image?: string;
};

const validation: Validation = {
  title: 'Обязательное поле!',
  description: '',
  year: '',
  image: '',
};

const EditModal = () => {
  const { setEditWine, editWine } = useCrudContext();
  const [state, setState] = useState({
    title: '',
    description: '',
    year: 0,
    image: '',
  });
  const [error, setError] = useState<Validation>({});

  const handleSubmit = () => {
    const newErrors: Validation = {};
    Object.keys(validation).forEach((key) => {
      // @ts-ignore
      if (!state[key]) newErrors[key] = validation[key];
      setError(newErrors);
    });
    if (Object.keys(newErrors).length) return;
    console.log('submit', state);
  };

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
              helperText={error.title}
            />
            <Input
              label="Описание"
              value={state.description}
              onChange={(value) =>
                setState({ ...state, description: String(value) })
              }
              helperText={error.description}
            />
            <Input
              label="Год"
              value={state.year}
              onChange={(value) => setState({ ...state, year: Number(value) })}
              type="number"
              helperText={error.year}
            />
          </div>
          <Button className={classes.submit} onClick={handleSubmit}>
            {editWine === 'new' ? 'Добавить' : 'Обновить'}
          </Button>
        </div>
      </div>
      <div className={classes.overlay} onClick={() => setEditWine(null)} />
    </>
  );
};

export default EditModal;
