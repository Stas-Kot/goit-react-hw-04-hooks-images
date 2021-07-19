import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  Form,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

function Searchbar({ handleSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSearch = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Enter a search word!');
      return;
    }
    handleSubmit(searchQuery);
  };

  return (
    <Header>
      <Form onSubmit={handleSearch}>
        <SearchFormButton type="submit">
          <span>Search</span>
        </SearchFormButton>

        <SearchFormInput
          onChange={handleInput}
          value={searchQuery}
          type="text"
          autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
}

// function Searchbar({ handleSubmit }) {
//   const handleSearch = e => {
//     const searchQuery = e.target.elements.searchInput.value;
//     e.preventDefault();
//     if (searchQuery.trim() === '') {
//       toast.error('Enter a search word!');
//       return;
//     }
//     handleSubmit(searchQuery);
//   };
//   return (
//     <Header>
//       <Form onSubmit={handleSearch}>
//         <SearchFormButton type="submit">
//           <span>Search</span>
//         </SearchFormButton>

//         <SearchFormInput
//           name="searchInput"
//           type="text"
//           autocomplete="off"
//           // autofocus
//           placeholder="Search images and photos"
//         />
//       </Form>
//     </Header>
//   );
// }

export default Searchbar;
