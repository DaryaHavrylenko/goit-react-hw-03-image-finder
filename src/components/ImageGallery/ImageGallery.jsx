import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import styled from 'styled-components';

const List = styled.ul`
     display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const ImageGallery = ({ items}) => {
    return (
        <List>
            {items.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL}></ImageGalleryItem>
  })}
</List>
    )
}