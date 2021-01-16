import { FC } from 'react';


export interface SearchProps{
  device: string;
  searchKeyword: string;
}

export const Search: FC<SearchProps> = ({
  device,
  searchKeyword
}): JSX.Element => {
  return (
    <div className="main" style={{
      backgroundColor:'gray'
    }}>
      <div className="copy-wrapper">
        <h1>{searchKeyword}</h1>
      </div>
    </div>
  );
};
