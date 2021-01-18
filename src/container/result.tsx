import { FC, useState, useContext } from 'react';
import { useDispatch, useSelector ,connect} from 'react-redux';
import { CombineState } from '../reducers/index';
import { Result } from '../component/result';
import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';




export const ResultContainer: FC = (
): JSX.Element => {
  const reduxState = useSelector((state: CombineState) => state);
  const id = reduxState.Keyword.id;
  return (
    <div className="container">
      <header>
        <img src='images/icon.png' />
        <h1><Link to="/">rcmArtist</Link></h1>
      </header>
      <MediaQuery query="(min-width: 670px)">　
        <Result device={'PC'} searchResult={id}/>
      </MediaQuery>
      {/* スマホ向けデザイン */}
      <MediaQuery query="(max-width: 670px)">
        <Result device={'smartphone'} searchResult={id}/>
      </MediaQuery>
      <footer>
      </footer>
    </div>
  );
};
