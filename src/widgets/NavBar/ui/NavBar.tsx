import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.links}>
        /
      </div>
    </div>
  );
};
