import { FC, useState, useContext } from 'react';
import { useDispatch, useSelector ,connect} from 'react-redux';
import { CombineState } from '../reducers/index';
import { Detail } from "../component/detail";
import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';
import { getArtistDetail } from '../spotify/spotifyDetail';




export const DetailContainer: FC = (
): JSX.Element => {
  const reduxState = useSelector((state: CombineState) => state);
  const id = reduxState.Keyword.lastId;
  const ArtistDetail = getArtistDetail(id);


  return (
    <div >
      <header>
        <img src='images/icon.png' />
        <h1><Link to="/">rcmArtist</Link></h1>
      </header>
      <MediaQuery query="(min-width: 1000px)">
        <Detail device={'PC'} ArtistDetail={ArtistDetail}/>
      </MediaQuery>
      {/* スマホ向けデザイン */}
      <MediaQuery query="(max-width: 1000px)">
        <Detail device={'smartphone'} ArtistDetail={ArtistDetail}/>
      </MediaQuery>
      <footer>
      </footer>
    </div>
  );
};
