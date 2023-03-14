import Tilt from "react-parallax-tilt";

const ButtonComponent = ({arrow, handleClick}) => {
  return(
      <Tilt>
          <button
              // className='bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md'
              className='bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'
              onClick={handleClick}
          >
              {arrow}
          </button>
      </Tilt>
  )
}

export default ButtonComponent