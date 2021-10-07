import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSummaryActionCreators } from '../../redux';

interface Props {}

const Search: React.FC<Props> = (props) => {
  const [term, setTerm] = useState<string>('');

  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSummaryActionCreators.getUserSummaries(term));
  };

  return (
    <div className="flex flex-col space-y-4">
      <form onSubmit={onSubmitHandler} className="flex flex-col space-y-4">
        <input
          type="text"
          name="userName"
          placeholder="Search Users..."
          className="border border-black py-1 px-2 rounded-sm"
          value={term}
          onChange={onChangeHandler}
        />
        <button
          type="submit"
          className="bg-dark text-white py-1 px-2 rounded-sm"
        >
          Search
        </button>
      </form>
      <button className="bg-light py-1 px-2 rounded-sm">Clear</button>
    </div>
  );
};

export default Search;
