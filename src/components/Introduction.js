import myImage from '../vecteezy_teamwork-or-team-building-office-business-meeting-vector_4154417.jpg'
const Introduction = () => {

  return (
    <div className="Introduction">
        <p id="web-description">If you want to do coding challenges, practice interview skills, or prepare for a whiteboard interview join us to practice with others Software Developers. Whether you are Python, React, or JavaScript enthusiast this is the right place for you!</p>
        <img id="logo" src={myImage} alt="logo" />
    </div>
  );
}

export default Introduction;