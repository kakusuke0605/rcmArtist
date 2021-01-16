import { FC } from 'react';


export interface HomeProps{
  device: string;
  keyword: string;
  setKeyword: any;
  onSubmit: () => void;
}

export const Home: FC<HomeProps> = ({
  device,
  keyword,
  setKeyword,
  onSubmit
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
            device == 'smartphone' ? '20px': ''
        }}>自分の音域に合ったアーティストは？</h1>
        <h2 style={{
          fontSize:
            device == 'smartphone' ? '15px': '',
        }}>新しい歌との出会いの手助けをします。</h2>
      </div>
      <div className="input-form">
        <h3>よく歌うアーティストを入力してください</h3>
        <form action="/search" onSubmit={onSubmit}>
          <input className="input-txt"
            type="text"
            value={keyword}
            onChange={event => setKeyword(event.target.value)} />
          <input className="btn" type="submit" value="検索" />
        </form>
      </div>
    </div>
  );
};
