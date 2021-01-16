import React, { FC, useState, useContext } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Home } from '../component/Home';
import { CombineState } from '../reducers/index';
import MediaQuery from "react-responsive";
import { inputText } from '../action/action';


export const HomeContainer: FC = (
): JSX.Element => {
  const reduxState = useSelector((state:CombineState) => state);
  const [keyword, setKeyword] = useState<string>('');
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(inputText({ text: keyword }));
  }

  return (
    <div className="container">
      <header>
        <img src='images/icon.png' />
        <h1><a href="/">rcmArtist</a></h1>
      </header>
      <MediaQuery query="(min-width: 670px)">　
        <Home
          device={'PC'}
          keyword={keyword}
          setKeyword={setKeyword}
          onSubmit={onSubmit}
        />
      </MediaQuery>
      {/* スマホ向けデザイン */}
      <MediaQuery query="(max-width: 670px)">
        <Home
          device={'smartphone'}
          keyword={keyword}
          setKeyword={setKeyword}
          onSubmit={onSubmit}
        />
      </MediaQuery>
      <footer>
      </footer>
    </div>
  );
};
