import PhotoHero from './PhotoHero';
import PhotoFullBleed from './PhotoFullBleed';
import PhotoProductHero from './PhotoProductHero';
import PhotoFinalCTA from './PhotoFinalCTA';

export const PhotoLanding = () => {
  return (
    <div className="min-h-screen">
      <PhotoHero />
      <PhotoFullBleed />
      <PhotoProductHero />
      <PhotoFinalCTA />
    </div>
  );
};

export default PhotoLanding;
