import React, { Component } from 'react';


import { fetchImages } from 'components/api/pixabeyApi';
import SearchBar from './SearcBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const IMAGE_KEY = "img";
class App extends Component {
  state = {
    pixabeyImgs: [],
   query:''
  }
  
 formSubmitHandler = (query) => {
//  const images = {
//    query
//       }
this.setState({query})
  // this.setState(({ pixabeyImgs}) => ({pixabeyImgs:[images, ...pixabeyImgs]}))
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
     const { data } = await fetchImages(query);
     console.log(data.hits)
     this.setState({ pixabeyImgs: data.hits })
    
   } catch (error) {
     
   }
    
}

  componentDidMount() {
    this.getPersistedImg();
    // this.searchImg();
    const params = new URLSearchParams(window.location.search);
    this.setState({ query: params.get('query') });
  }

  componentDidUpdate(prevProps, prevState) {
    const { pixabeyImgs, query } = this.state;

    if (query !== prevState.query) {
      const params = new URLSearchParams();
      params.set('query', query);
      window.history.replaceState(null, null, `&${params.toString()}`)
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
        <ImageGallery items={pixabeyImgs} list={this.state.query}></ImageGallery>

      </>
    );
  }
}

export default App;
