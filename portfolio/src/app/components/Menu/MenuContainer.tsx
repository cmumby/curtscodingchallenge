'use client';

import Menu from './Menu';

interface MenuProps {
  logoText: string;
  logoDescriptionHidden: boolean;
}

const MenuContainer = ({ logoText, logoDescriptionHidden }: MenuProps) => {
  return (
    <Menu logoText={logoText} logoDescriptionHidden={logoDescriptionHidden} />
  );
};

export default MenuContainer;
