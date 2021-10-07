import React from 'react';
import { Link } from 'react-router-dom';

// cmp
import Spinner from '../layout/Spinner';

// redux
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface Props {}

const Users: React.FC<Props> = (props) => {
  const { data, loading } = useTypedSelector((state) => state.userSummary);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-3 mt-6 gap-4">
      {'items' in data &&
        data.items.map((user) => (
          <div
            key={user.id}
            className="flex flex-col justify-center items-center space-y-2 text-center bg-gray-200 px-8 py-4 rounded-sm border border-gray-400"
          >
            <img
              src={user.avatar_url}
              alt="Avatar"
              className="w-16 rounded-full"
            />
            <h1 className="font-bold text-lg">{user.login}</h1>
            <Link
              to={`/user/${user.login}`}
              className="bg-gray-900 py-1 px-2 text-sm text-white rounded-sm hover:opacity-90"
            >
              More
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Users;
