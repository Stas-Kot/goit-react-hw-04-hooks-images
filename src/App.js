import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from '@emotion/styled/macro';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

function App() {
  const [searchQuery, setsearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [page, setPage] = useState(1);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const updateActiveImgIdx = index => {
    setActiveImgIdx(index);
    toggleModal();
  };

  const handleNewFetch = hits => {
    setGallery(hits);
  };

  const handleLoadMoreFetch = hits => {
    setGallery(gallery => [...gallery, ...hits]);
  };

  const onSubmit = query => {
    setsearchQuery(query);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <Container>
      <Searchbar handleSubmit={onSubmit} />
      <ImageGallery
        query={searchQuery}
        handleModal={toggleModal}
        handeleActiveIdx={updateActiveImgIdx}
        onNewFetch={handleNewFetch}
        onLoadMoreFetch={handleLoadMoreFetch}
        currentPage={page}
        onLoadMore={onLoadMore}
      />
      <ToastContainer autoClose={3000} />
      {showModal && (
        <Modal
          tags={gallery[activeImgIdx].tags}
          onClose={toggleModal}
          largeImageURL={gallery[activeImgIdx].largeImageURL}
        />
      )}
    </Container>
  );
}

// class App extends Component {
//   state = {
//     searchQuery: '',
//     showModal: false,
//     gallery: null,
//     activeImgIdx: 0,
//     page: 1,
//   };

//   setActiveImgIdx = index => {
//     this.setState({ activeImgIdx: index });
//     this.toggleModal();
//   };

// handleNewFetch = hits => {
//   this.setState({ gallery: hits });
// };

//   handleLoadMoreFetch = hits => {
//     this.setState(prevState => ({
//       gallery: [...prevState.gallery, ...hits],
//     }));
//   };

//   onSubmit = query => {
//     this.setState({ searchQuery: query, page: 1 });
//   };

// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <Searchbar handleSubmit={this.onSubmit} />
//         <ImageGallery
//           query={this.state.searchQuery}
//           handleModal={this.toggleModal}
//           handeleActiveIdx={this.setActiveImgIdx}
//           onNewFetch={this.handleNewFetch}
//           onLoadMoreFetch={this.handleLoadMoreFetch}
//           currentPage={this.state.page}
//           onLoadMore={this.onLoadMore}
//         />
//         <ToastContainer autoClose={3000} />
//         {this.state.showModal && (
//           <Modal
//             tags={this.state.gallery[this.state.activeImgIdx].tags}
//             onClose={this.toggleModal}
//             largeImageURL={
//               this.state.gallery[this.state.activeImgIdx].largeImageURL
//             }
//           />
//         )}
//       </Container>
//     );
//   }
// }

export default App;
