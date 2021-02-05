import { FC } from 'react';


export interface DetailProps{
  device: string;
  ArtistDetail: any;
}

export const Detail: FC<DetailProps> = ({
  device,
  ArtistDetail
}): JSX.Element => {
  return (
    <div>
      {ArtistDetail}
    </div>
  );
};
