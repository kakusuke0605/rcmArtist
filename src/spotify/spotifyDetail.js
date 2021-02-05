import MediaQuery from "react-responsive";
import { Artist, ArtistTracks } from "react-spotify-api";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


//SpotifyAPIを叩いて関連アーティストを取得する
export const getArtistDetail = (id) => {

  if (id) {
    console.log(id);
    return (
      <div>
        <MediaQuery query="(min-width: 1000px)">
          <Artist id={id}>
            {({ data, loading, error }) => (
              data ? (
                <>
                <div style={{
                  backgroundImage: `url(${data.images[0] ? data.images[0].url : 'images/icon.png'})`,
                  backgroundSize: 'cover',
                  height:'1000px'
                }}>
                </div>
                <div className={'detail-title'}>
                    <h1>{data.name}</h1>
                  </div>
                </>
              ) : null
            )}
          </Artist>
          <div className={'main-detail'}>
          <ArtistTracks id={id}>
            {({ data, loading, error }) => (
              data ? (
                  data.tracks.map(track => (
                  <div className={'artistCard-wrapper'}>
                  <div className='artistCard'>
                    <img src={track.album.images[0]?track.album.images[0].url:'images/icon.png'} />
                    <p>{track.name}</p>
                    <ReactPlayer
                      url={track.preview_url}
                      controls={true}
                      height='100%'
                      width='40%'
                      className='react-player'
                    />
                      </div>
                      </div>
                ))
              ):null
            )}
            </ArtistTracks>
            <div className={'backbtn-wrpper'}>
              <Link to="/result" type="button" className="one-backbtn" style={{fontSize:'30px'}}>おすすめ一覧に戻る</Link>
              <Link to="/" type="button" className="backbtn" style={{fontSize:'30px'}}>ホームに戻る</Link>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1000px)">
          <Artist id={id}>
            {({ data, loading, error }) => (
              data ? (
                <>
                <div style={{
                  backgroundImage: `url(${data.images[0] ? data.images[0].url : 'images/icon.png'})`,
                  backgroundSize: 'cover',
                  height:'600px'
                }}>
                  </div>
                  <div className={'detail-title'}>
                    <h1>{data.name}</h1>
                  </div>
                </>
              ) : null
            )}
          </Artist>
          <div className={'main-detail-smartphone'}>
          <ArtistTracks id={id}>
            {({ data, loading, error }) => (
              data ? (
                  data.tracks.map(track => (
                  <div className='artistCard-smartphone'>
                    <img src={track.album.images[0]?track.album.images[0].url:'images/icon.png'} />
                    <p>{track.name}</p>
                    <ReactPlayer
                      url={track.preview_url}
                      controls={true}
                      height='100%'
                      width='40%'
                      className='react-player'
                    />
                      </div>
                ))
              ):null
            )}
            </ArtistTracks>
            <div className={'backbtn-wrpper'}>
              <Link to="/result" type="button" className="one-backbtn" style={{fontSize:'30px'}}>おすすめ一覧に戻る</Link>
              <Link to="/" type="button" className="backbtn" style={{fontSize:'30px'}}>ホームに戻る</Link>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
    }
    return null;
}
