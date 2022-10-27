import classes from './baseLayout.module.scss';

interface Props {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return <div className={classes.BaseLayout}>{children}</div>;
};

export default BaseLayout;
