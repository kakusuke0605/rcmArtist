import { FC } from 'react';


export interface ResultProps{
  device: string;
  searchResult: any;
}

export const Result: FC<ResultProps> = ({
  device,
  searchResult
}): JSX.Element => {
  return (
    <div className="main" style={{
      backgroundColor:'gray'
    }}>
      <div className="copy-wrapper">
        {searchResult}
      </div>
    </div>
  );
};
