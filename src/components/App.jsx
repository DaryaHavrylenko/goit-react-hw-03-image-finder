import React, { Component } from 'react';


import { fetchImages } from 'components/api/pixabeyApi';
import SearchBar from './SearcBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const IMAGE_KEY = "img";
class App extends Component {
  state = {
    pixabeyImgs: [],
   
  }
  
 formSubmitHandler = ({id, webformatURL, largeImageURL}) => {
 const images = {
        id ,
        webformatURL ,
        largeImageURL ,
      }

  this.setState(({ pixabeyImgs }) => ({
        pixabeyImgs: [images, ...pixabeyImgs],
      }))
  }


  getPersistedImg = () => {
    const persistedSerializedImg = localStorage.getItem(IMAGE_KEY);
    let persistedImg;

    try {
      persistedImg = JSON.parse(persistedSerializedImg)
    } catch (erroe) {
      persistedImg = null;
    }

    if (persistedImg && persistedImg.length > 0) {
      this.setState({pixabeyImgs: persistedImg})
    }
  }
  
 async searchImg() {
   const { query } = this.state;
   try {
     const {data} = await fetchImages(query);
    this.setState({pixabeyImgs: data.hits})
   } catch (error) {
     
   }
    
}

  componentDidMount() {
    this.getPersistedImg();
    this.searchImg();
  }

  componentDidUpdate(prevProps, prevState) {
    const { pixabeyImgs, query } = this.state;

    if (query !== prevState.query) {
      this.searchImg();
    }
    if (pixabeyImgs === prevState.pixabeyImgs) {
      return;
    }
    localStorage.setItem(IMAGE_KEY, JSON.stringify(pixabeyImgs));
}


  render() {
  const {pixabeyImgs} = this.state
    
    return (
      <>
        <SearchBar onSubmit={this.formSubmitHandler} ></SearchBar> 
        <ImageGallery items={pixabeyImgs}></ImageGallery>

      </>
    );
  }
}

export default App;
