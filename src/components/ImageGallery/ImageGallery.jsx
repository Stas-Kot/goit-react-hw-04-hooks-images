import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({
  gallery,
  handleModal,
  handeleActiveIdx,
}) {
  return (
    <>
      <ImageGalleryList>
        {gallery.map(({ webformatURL, tags }, index) => (
          <ImageGalleryItem
            key={index}
            webformatURL={webformatURL}
            tags={tags}
            openModal={handleModal}
            activeImgIndex={() => handeleActiveIdx(index)}
          />
        ))}
      </ImageGalleryList>
    </>
  );
}
