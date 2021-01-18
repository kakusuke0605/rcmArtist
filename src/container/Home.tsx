import React, { FC, useState, useContext } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Home } from '../component/Home';
import { CombineState } from '../reducers/index';
import MediaQuery from "react-responsive";
import { updateState } from '../action/action';
import { Link } from 'react-router-dom';



export const HomeContainer: FC = (
): JSX.Element => {
  const reduxState = useSelector((state:CombineState) => state);
  const [keyword, setKeyword] = useState<string>('');
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(updateState({ text: keyword ,id:''}));
  }

  return (
    <div className="container">
      <header>
        <img src='images/icon.png' />
        <h1><Link to="/">rcmArtist</Link></h1>
      </header>
      <MediaQuery query="(min-width: 670px)">
        <Home
          device={'PC'}
          keyword={keyword}
          setKeyword={setKeyword}
          onClick={onClick}
        />
      </MediaQuery>
      {/* スマホ向けデザイン */}
      <MediaQuery query="(max-width: 670px)">
        <Home
          device={'smartphone'}
          keyword={keyword}
          setKeyword={setKeyword}
          onClick={onClick}
        />
      </MediaQuery>
      <footer>
      </footer>
    </div>
  );
};
