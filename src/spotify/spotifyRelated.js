import { useDispatch, useSelector ,connect} from 'react-redux';
import MediaQuery from "react-responsive";
import { ArtistCard } from '../atoms/artistCard';
import { ArtistRelated } from "react-spotify-api";

//SpotifyAPIを叩いて関連アーティストを取得する
export const getRelatedArtists = (id) => {
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();
  const nowState = reduxState.Keyword;

  if (id) {
    return (
      <div>
        <MediaQuery query="(min-width: 1000px)">
          <ArtistRelated id={id}>
            {({ data ,loading , error }) => (
              data?(
              data.artists.map(artist => (
                <div className={'relatedCardContainer'}>
                  <ArtistCard
                    device='PC'
                    artistImageRef={artist.images[0] ? artist.images[0].url : 'images/icon.png'}
                    artistName={artist.name}
                    artistId={artist.id}
                    dispatch={dispatch}
                    nowState={nowState}
                    nowPage='result'
                  />
                </div>
              ))): null
            )}
          </ArtistRelated>
        </MediaQuery>
        <MediaQuery query="(max-width: 1000px)">
          <ArtistRelated id={id}>
            {({ data ,loading , error }) => (
              data?(
              data.artists.map(artist => (
                <div className={''}>
                  <ArtistCard
                    device='smartphone'
                    artistImageRef={artist.images[0] ? artist.images[0].url : 'images/icon.png'}
                    artistName={artist.name}
                    artistId={artist.id}
                    dispatch={dispatch}
                    nowState={nowState}
                    nowPage='result'
                  />
                </div>
              ))): null
            )}
          </ArtistRelated>
        </MediaQuery>
      </div>
    )
    }
    return null;
}
