import Link from 'next/link';
import classes from './Header.module.scss';
import Typography from '../typography';

const menu = [
  {
    title: 'Моя коллекция',
    href: '/',
  },
  {
    title: 'Добавить вино',
    href: '/add',
  },
];

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.content}>
        {menu.map(({ title, href }) => (
          <Link href={href} key={title}>
            <a>
              <Typography transform="uppercase" color="white">
                {title}
              </Typography>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
