import BannerImage from '../../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import MediaThinBanner from '../../components/MediaThinBanner';
import './_style.scss';

export default function Home() {
  return (
    <div className="home">
      <MediaThinBanner
        imageUrl={BannerImage}
        text="Chez vous, partout et ailleurs"
        isTiny
      />
      <h1>Homepage</h1>
    </div>
  );
}
