import { useAppContext } from '../context/appContext';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
const PageBtnContainer = () => {
  const { page, numOfPages } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);
  console.log(pages);

  const prevPage = () => {
    console.log('prev button');
  };
  const nextPage = () => {
    console.log('next button');
  };
  return (
    <Wrapper>
      <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber, idx) => {
          return (
            <button
              key={idx}
              type='button'
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              onClick={() => console.log('page number')}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
