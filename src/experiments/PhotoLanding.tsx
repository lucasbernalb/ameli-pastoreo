import PhotoHero from './PhotoHero';
import PhotoBenefits from './PhotoBenefits';
import PhotoProduct from './PhotoProduct';

export const PhotoLanding = () => {
  return (
    <div className="min-h-screen">
      <PhotoHero />
      <PhotoBenefits />
      <PhotoProduct />
    </div>
  );
};

export default PhotoLanding;
