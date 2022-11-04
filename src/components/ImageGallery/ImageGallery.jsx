import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items}) => {
    return (
        <ul>
            {items.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL}></ImageGalleryItem>
  })}
</ul>
    )
}