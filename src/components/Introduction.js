
import { InputGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

// <img id="logo" src='https://img.freepik.com/free-vector/software-developers-working-script-coding-engineer-character-programming-php-python-javascript-other-languages_90220-243.jpg?w=740&t=st=1659485948~exp=1659486548~hmac=c9b6d11c76746839fb57e651d45b6839a94a2ca1c1ca1c2ef57b86964753f18a' alt="logo" />


const Introduction = () => {
  return (
    <div className="Introduction">
      <div className='carousel-container'>
        <Carousel fade='true'>
          <Carousel.Item interval={5000}>
            <img 
              className='carousel-image'
              src="https://img.freepik.com/free-vector/computer-programming-camp-illustration_335657-434.jpg?w=826&t=st=1659636983~exp=1659637583~hmac=38333336866efa7f44586e66e7ada8ecbaf2dd88090710484f64697914393875"
              />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className='carousel-image'
              src='https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?w=826&t=st=1659634104~exp=1659634704~hmac=874e77bc3cb486913218e43ee5e9becc50ba6c8475916880d2942dc1240fe188://img.freepik.com/free-vector/programmer-work-with-working-day-symbols-flat-illustration_1284-60322.jpg?w=1060&t=st=1659633463~exp=1659634063~hmac=1ea339bd6c13939f1dbbda5151d69cf749fc46dcad206aa90d47323958459f7f'
              />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className='carousel-image'
              src='https://img.freepik.com/free-vector/css-html-programming-languages-computer-programming-coding-it-female-programmer-cartoon-character-software-website-development_335657-760.jpg?w=826&t=st=1659633658~exp=1659634258~hmac=b4ef0064b8ad99642192c274010fd89cf4a560408649c51dddec030ab0074c5c'
              />
          </Carousel.Item>
        </Carousel>
        </div>
        <div className='intro-text-container'>
          <h2>WE CONNECT DEVELOPERS</h2>
          <p>
            Coding, sometimes called computer programming, is how we communicate with computers. Code tells a computer what actions to take, and writing code is like creating a set of instructions. By learning to write code, you can tell computers what to do or how to behave in a much faster way. You can use this skill to make websites and apps, process data, and do lots of other cool things.
            </p>
      </div>
    </div>
  );
}

export default Introduction;

