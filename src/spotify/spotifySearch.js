import { useDispatch, useSelector ,connect} from 'react-redux';
import MediaQuery from "react-responsive";
import { useSearch } from "react-spotify-api";
import { updateState } from '../action/action';
import { ArtistCard } from '../atoms/artistCard';

//SpotifyAPIを叩いて検索結果がを取得する
export const getSearchResult = (searchKeyword) => {
  const { data, loading, error } = useSearch(searchKeyword, { artist: true, limit: 10 });
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();
  const nowState = reduxState.Keyword;


  if (data) {
    return data.artists.items.map(artist => (
      <div>
        <MediaQuery query="(min-width: 1000px)">
          <ArtistCard
            device='PC'
            artistImageRef={artist.images[0] ? artist.images[0].url : 'images/icon.png'}
            artistName={artist.name}
            artistId={artist.id}
            dispatch={dispatch}
            nowState={nowState}
        />
        </MediaQuery>
        <MediaQuery query="(max-width: 1000px)">
          <ArtistCard
            device='smartphone'
            artistImageRef={artist.images[0] ? artist.images[0].url : 'images/icon.png'}
            artistName={artist.name}
            artistId={artist.id}
            dispatch={dispatch}
            nowState={nowState}
        />
        </MediaQuery>
      </div>
        ));
    }
    return null;
}
