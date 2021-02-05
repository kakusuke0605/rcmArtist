import { FC } from 'react';
import { Link } from 'react-router-dom';

export interface SearchProps{
  device: string;
  searchResult: any;
}

export const Search: FC<SearchProps> = ({
  device,
  searchResult
}): JSX.Element => {
  return (
    <div className={device == 'PC' ? "main-search" : "main-search-smartphone"}>
      <h1>よく聴くアーティストを選択してください</h1>
      {searchResult}
      <p className={'backbtn-wrpper'}>
        <Link to="/" type="button" className="backbtn" style={{fontSize:'30px'}}>ホームに戻る</Link>
      </p>
    </div>
  );
};
