import React from 'react';
import '../styles/nutrition.css';
import image from '../assets/Group 8.png';
import button from '../assets/Group 10.png';
import leftArrow from '../assets/left.png';
import rightArrow from '../assets/right.png';
import photo1 from '../assets/Group 12.png';  // перше додаткове фото
import photo2 from '../assets/Group 14.png';  // друге додаткове фото

const Nutrition = () => {
  return (
    <>
      <div className="nutrition-container">
        <img src={image} alt="Раціон" className="nutrition-image" />
      </div>

      <div className="button-container">
        <img src={leftArrow} alt="Ліва стрілка" className="arrow arrow-left" />

        <img
          src={button}
          alt="Кнопка"
          className="nutrition-button-image"
          onClick={() => console.log('Кнопка натиснута')}
        />

        <img src={rightArrow} alt="Права стрілка" className="arrow arrow-right" />
      </div>

      <div className="photos-section">
  <div className="photo-container">
    <img src={photo1} alt="Фото 1" className="nutrition-extra-photo" />
  </div>

  <div className="photo-container">
    <img src={photo2} alt="Фото 2" className="nutrition-extra-photo" />
  </div>
</div>

    </>
  );
};

export default Nutrition;
