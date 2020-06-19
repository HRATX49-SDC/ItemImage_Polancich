import React from 'react';

export default function Carousel({ images, mainImage, changeImage, likes }) {
  return (

    <div id='carousel'>
      <div id='carousel-wrapper'>
        {/* <div id='mutiple-image-wrapper'> */}
        <div className='carousel-items' id='image-legend'>
          <div id='legend-grid'>
            {images.map((image, index) => {
              return (
                <button key={index} className="image-button" onClick={(e) => changeImage(e)}>
                  <img src={image} id={index} className='thumbnail' />
                </button>
              );
            })}
          </div>
        </div>
        <div className='carousel-items' id='main-image'>
          <img id='#main-class' src={images[mainImage]} />
          <button className="like-button dotted-outline">
            {/* <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M21.281 9.076c-.317 1.427-1.031 2.776-2.142 3.966a108.712 108.712 0 01-4.284 4.284c-.872.872-1.824 1.745-2.776 2.618l-.08.08-.079-.08c-.952-.873-1.904-1.746-2.776-2.618a108.137 108.137 0 01-4.283-4.284c-1.111-1.19-1.825-2.539-2.142-3.966-.397-1.666.158-2.856.635-3.57.696-1.046 1.903-1.81 3.18-1.895 2.027-.136 3.465 1.45 4.498 2.982.29.43.603.847.9 1.274l.068.099.068-.099c.296-.427.609-.843.9-1.274 1.033-1.531 2.47-3.118 4.497-2.982 1.278.085 2.484.849 3.181 1.895.477.714 1.032 1.904.635 3.57M12 5.004a6.535 6.535 0 00-1.476-1.72c-1.207-1.003-3.06-1.661-4.632-1.269-2.46.397-5.553 3.253-4.76 7.298.352 1.799 1.321 3.41 2.539 4.755 1.376 1.52 2.868 2.951 4.363 4.369A203.883 203.883 0 0012 22.1a201.526 201.526 0 003.966-3.663c1.496-1.418 2.986-2.848 4.362-4.369 1.219-1.345 2.187-2.956 2.54-4.755.793-4.045-2.301-6.9-4.76-7.298-1.571-.392-3.425.266-4.633 1.27A6.532 6.532 0 0012 5.004" fill-rule="evenodd"></path></svg> */}
            <i className="gg-shape-circle"></i>
            <i className={`gg-heart ${likes[mainImage] ? 'red-fill' : ''}`}></i>
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}