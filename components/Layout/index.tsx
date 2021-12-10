
import { FC } from 'react';
import * as S from './styled'





export const Layout: FC = ({children}) => {
    return  <S.Container><div><h2>freeCodeCamp Survey Form</h2></div> <div> {children}</div></S.Container>
     
};
