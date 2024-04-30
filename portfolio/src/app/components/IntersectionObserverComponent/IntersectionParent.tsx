'use client';

import IntersectionObserverComponent from './IntersectionObserverComponent';
import Menu from '../Menu/Menu';

interface MenuProps {
  logoText: string;
  logoDescriptionHidden: boolean;
}

const IntersectionParent = ({ logoText, logoDescriptionHidden }: MenuProps) => {
  return (
    <Menu logoText={logoText} logoDescriptionHidden={logoDescriptionHidden} />
  );
};

export default IntersectionParent;
