import { GalleryItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatURL,
  tags,
  activeImgIndex,
}) {
  return (
    <GalleryItem onClick={activeImgIndex}>
      <img src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}
