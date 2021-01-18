import { FC } from 'react';
import { Link } from 'react-router-dom';


export interface HomeProps{
  device: string;
  keyword: string;
  setKeyword: any;
  onClick: () => void;
}

export const Home: FC<HomeProps> = ({
  device,
  keyword,
  setKeyword,
  onClick
}): JSX.Element => {

  return (
    <div className="main" style={{
      backgroundImage:
        device == 'PC' ? 'url(images/background-1.jpg)' : 'url(images/background-2.jpg)',
    }}>
      <div className="copy-wrapper">
        <h1 style={{
          paddingBottom: "20px",
          fontSize:
            device == 'smartphone' ? '20px': '50px'
        }}>自分の趣味に合ったアーティストは？</h1>
        <h2 style={{
          fontSize:
            device == 'smartphone' ? '15px': '',
        }}>新しいアーティストとの出会いの手助けをします</h2>
      </div>
      <div className="input-form">
        <h3>よく聴くアーティストを入力してください</h3>
        <input className="input-txt"
          type="text"
          value={keyword}
          onChange={event => setKeyword(event.target.value)} />
        <Link to="/search" type="button" className="btn" onClick={onClick}>検索</Link>
      </div>
    </div>
  );
};
