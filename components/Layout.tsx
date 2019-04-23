import React, {ReactChild} from 'react';

interface ILayout {
  children: ReactChild
}

export const Layout: React.FC<ILayout> = ({children}) => {
  return (
    <div css={{
      maxWidth: '100rem',
      margin: '0 auto'
    }}>
      {children}
    </div>
  );
};
