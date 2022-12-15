import { useEffect, useState } from 'react';
import BannerImage from '../../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import Card from '../../components/Card';
import MediaThinBanner from '../../components/MediaThinBanner';
import Loader from '../../components/Loader';
import './_style.scss';

export default function Home() {
  const [accomodations, setAccomodations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('./__mocks__/logements.json')
      .then((res) => res.json())
      .then((res) => {
        setAccomodations(res);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="home">
      <MediaThinBanner
        imageUrl={BannerImage}
        text="Chez vous, partout et ailleurs"
        isTiny
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className="cards-wrapper">
            {
              accomodations.map(({ cover, title, id }) => (
                <Card
                  key={id}
                  imageUrl={cover}
                  title={title}
                  id={id}
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
}
