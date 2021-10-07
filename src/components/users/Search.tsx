import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { alertActionCreators, userSummaryActionCreators } from '../../redux';
import Alert from '../layout/Alert';

interface Props {}

const Search: React.FC<Props> = (props) => {
  const [term, setTerm] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const { data } = useTypedSelector((state) => state.userSummary);
  const { alertType, message } = useTypedSelector((state) => state.alert);
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (term.trim().length > 0) {
      dispatch(userSummaryActionCreators.getUserSummaries(term));
    } else {
      dispatch(
        alertActionCreators.showAlert('Please enter something.', 'WARNING')
      );

      setTimeout(() => {
        dispatch(alertActionCreators.removeAlert());
      }, 3000);
    }
  };

  const onClearHandler = () => {
    dispatch(userSummaryActionCreators.clearUserSummaries());
    setTerm('');

    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col space-y-4">
      {message.length > 0 && <Alert message="Please enter something." />}
      <form onSubmit={onSubmitHandler} className="flex flex-col space-y-4">
        <input
          type="text"
          name="userName"
          placeholder="Search Users..."
          className="border border-black py-1 px-2 rounded-sm"
          value={term}
          onChange={onChangeHandler}
          autoFocus
          ref={inputRef}
        />
        <button
          type="submit"
          className="bg-dark text-white py-1 px-2 rounded-sm hover:opacity-90"
        >
          Search
        </button>
      </form>
      {'total_count' in data && data.total_count > 0 && (
        <button
          onClick={onClearHandler}
          className="bg-light py-1 px-2 rounded-sm"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
