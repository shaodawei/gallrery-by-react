require('normalize.css/normalize.css');
require('styles/App.css');

var imageDatas = require('../data/imageDatas.json');

imageDatas = (function getImageUrl(imagesDatasArr) {
  for (let i = 0, j = imagesDatasArr.length; i < j; i++) {
    var singleImageData = imagesDatasArr[i];
    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
    imagesDatasArr[i] = singleImageData;

  }
  return imagesDatasArr;
})(imageDatas);

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (

      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      //   <span>hello dav</span>
      // </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
