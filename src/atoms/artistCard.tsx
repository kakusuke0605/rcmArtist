import { FC } from 'react';
import { Link } from 'react-router-dom';
import { updateState } from '../action/action'

export interface ArtistCardProps {
  device: string;
  artistImageRef: string;
  artistName: string;
  artistId: string;
  dispatch: any;
  nowState: { text: string, id: string };
  nowPage: string;
}

export const ArtistCard: FC<ArtistCardProps> = ({
  device,
  artistImageRef,
  artistName,
  artistId,
  dispatch,
  nowState,
  nowPage,
}) => (
  <Link to={nowPage=='search'?'/result':'/detail'}
    className={device == 'PC' ? 'artistCard' : 'artistCard-smartphone'} onClick={() => {
      if (nowPage == 'search') {
        dispatch(updateState({ text: nowState.text, id: artistId ,lastId:''}));
      } else if (nowPage == 'result') {
        dispatch(updateState({ text: nowState.text, id: nowState.id, lastId: artistId }));
      }
  }}>
    <img src={artistImageRef} />
    <p>{artistName}</p>
  </Link>
);
