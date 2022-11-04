import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items}) => {
    return (
        <ul>
            {items.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem key={id}><a href={largeImageURL}><img src={webformatURL} alt=""></img></a></ImageGalleryItem>
  })}
</ul>
    )
}