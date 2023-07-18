import { BiSolidCircle } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

const Card = ({ name }) => {
  switch (name) {
    case 'circle':
      return (
        <h1>
          <BiSolidCircle className='icon' />
        </h1>
      );

    case 'cross':
      return (
        <h1>
          <ImCross className='icon' />
        </h1>
      );

    default:
      return '';
  }
};
export default Card;
