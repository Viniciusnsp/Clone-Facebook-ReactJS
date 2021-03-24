import React from 'react';

import FaceComment from './FaceComment';
import profile from '../assets/perfil.jpg'

function FacePost() {
  return(
     <div className="post">
       <div className="postPadding">
       <img src={profile} />
       </div>
       <FaceComment />
     </div>
  )
}

export default FacePost;