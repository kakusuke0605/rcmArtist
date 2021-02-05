import { FC, useState, useContext } from 'react';
import { useDispatch, useSelector ,connect} from 'react-redux';
import { CombineState } from '../reducers/index';
import { Search } from '../component/search';
import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';
import { getSearchResult } from '../spotify/spotifySearch';




export const SearchContainer: FC = (
): JSX.Element => {
  const reduxState = useSelector((state: CombineState) => state);
  const searchKeyword = reduxState.Keyword.text;
  const searchResult = getSearchResult(searchKeyword);


  return (
    <div >
      <header>
        <img src='images/icon.png' />
        <h1><Link to="/">rcmArtist</Link></h1>
      </header>
      <MediaQuery query="(min-width: 1000px)">
        <Search device={'PC'} searchResult={searchResult}/>
      </MediaQuery>
      {/* スマホ向けデザイン */}
      <MediaQuery query="(max-width: 1000px)">
        <Search device={'smartphone'} searchResult={searchResult}/>
      </MediaQuery>
      <footer>
      </footer>
    </div>
  );
};
