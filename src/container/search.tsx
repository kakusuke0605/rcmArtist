import { FC, useState, useContext } from 'react';
import { useDispatch, useSelector ,connect} from 'react-redux';
import { CombineState } from '../reducers/index';
import { Search } from '../component/search';
import MediaQuery from "react-responsive";




export const SearchContainer: FC = (
): JSX.Element => {
  const reduxState = useSelector((state: CombineState) => state);
  const searchKeyword = reduxState.Keyword.text;
  return (
    <div className="container">
      <header>
        <img src='images/icon.png' />
        <h1><a href="/">rcmArtist</a></h1>
      </header>
      <MediaQuery query="(min-width: 670px)">　
        <Search device={'PC'} searchKeyword={searchKeyword}/>
      </MediaQuery>
      {/* スマホ向けデザイン */}
      <MediaQuery query="(max-width: 670px)">
        <Search device={'smartphone'} searchKeyword={searchKeyword}/>
      </MediaQuery>
      <footer>
      </footer>
    </div>
  );
};
