import React from 'react';
import WordCloud from 'react-wordcloud';

const WordCloudComponent = ({ words }) => {
  const options = {
    rotations: 2,
    rotationAngles: [0],
    fontSizes: [10, 40],
  };

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <WordCloud words={words} options={options} />
    </div>
  );
};

export default WordCloudComponent;
