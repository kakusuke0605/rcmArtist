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
}

export const ArtistCard: FC<ArtistCardProps> = ({
  device,
  artistImageRef,
  artistName,
  artistId,
  dispatch,
  nowState
}) => (
  <Link to='/result'
    className={device == 'PC' ? 'artistCard' : 'artistCard-smartphone'} onClick={() => {
    dispatch(updateState({ text: nowState.text, id: artistId }));
  }}>
    <img src={artistImageRef} />
    <p>{artistName}</p>
  </Link>
);
