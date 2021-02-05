import { FC } from 'react';
import { Link } from 'react-router-dom';


export interface ResultProps{
  device: string;
  Result: any;
}

export const Result: FC<ResultProps> = ({
  device,
  Result
}): JSX.Element => {
  return (
    <div className={device == 'PC' ? "main-result" : "main-result-smartphone"}>
      <h1>おすすめのアーティストはこちらです</h1>
      {Result}
      <div className={'backbtn-wrpper'}>
        <Link to="/" type="button" className="backbtn" style={{fontSize:'30px'}}>ホームに戻る</Link>
      </div>
    </div>
  );
};
