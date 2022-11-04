export const ImageGalleryItem = ({id, webformatURL, largeImageURL}) => {
    return (
    <li><a href={largeImageURL}> <img src={webformatURL} alt="" /></a>
 
</li>)

}