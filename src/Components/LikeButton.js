import React from 'react';

let backgroundColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
let idx = 0;

let data = {
  state: {
    likes: 0,
    likeText: 'likes',
  },
  style: {
    backgroundColor: backgroundColors[idx],
    color: 'white',
  },
};

function LikeButton() {
  const [dataState, setData] = React.useState(data);
  const handleData = () => {
      let newCount = ++data.state.likes;
      let newTitle = 'likes'
      if (data.state.likes === 1) {
          newTitle = 'like';
      }
      let newBackground = backgroundColors[idx++];
    if (idx === 5) {
      idx = 0;
    }
      
    setData({
      state: {
        likes: newCount,
        likeText: newTitle,
      },
      style: {
        backgroundColor: newBackground,
        color: 'white',
      },
    });
  };

  return (
    <div>
      <button onClick={handleData} style={dataState.style}>
        {dataState.state.likes} {dataState.state.likeText}
      </button>
    </div>
  );
}

export default LikeButton;
