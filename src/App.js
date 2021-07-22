import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from '@emotion/styled/macro';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import { Spinner, SpinnerBottom } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import getImages from 'components/api/api';
import Button from 'components/Button/Button';

const per_page = 12;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [showBtnMore, setShowBtnMore] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const updateActiveImgIdx = index => {
    setActiveImgIdx(index);
    toggleModal();
  };

  const onSubmit = query => {
    setSearchQuery(query);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
    setStatus('pendingMore');
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setStatus('pending');
    if (page === 1) {
      setGallery([]);
    }
    getImages(searchQuery, page, per_page)
      .then(data => {
        if (data.totalHits === 0) {
          toast.error(`No results were found for your query: ${searchQuery}`);
          setStatus('idle');
        } else if (page > data.totalHits / per_page) {
          toast.error(`No more results for your query: ${searchQuery}`);
          setStatus('resolved');
          setShowBtnMore(false);
        } else {
          setGallery(prevHits => [...prevHits, ...data.hits]);
          setStatus('resolved');
          setShowBtnMore(true);
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [searchQuery, page]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [gallery]);

  if (status === 'rejected') {
    toast.error(`${error.message}`);
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
      <Searchbar handleSubmit={onSubmit} />
      <ImageGallery
        gallery={gallery}
        handleModal={toggleModal}
        handeleActiveIdx={updateActiveImgIdx}
        onLoadMore={onLoadMore}
      />
      {status === 'resolved' && showBtnMore && <Button onClick={onLoadMore} />}
      {status === 'pending' && <Spinner />}
      {status === 'pendingMore' && <SpinnerBottom />}
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

export default App;
