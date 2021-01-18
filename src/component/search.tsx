import { FC } from 'react';


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
    </div>
  );
};
