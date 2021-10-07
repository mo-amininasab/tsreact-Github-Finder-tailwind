import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { userDetailActionCreators } from '../../redux';

interface MatchParams {
  login: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const UserDetail: React.FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useTypedSelector(
    (state) => state.userDetail
  );

  const userName = match.params.login;

  useEffect(() => {
    dispatch(userDetailActionCreators.getUserDetail(userName));
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      {'login' in data && (
        <Fragment>
          <section className="flex items-center space-x-3 mb-2">
            <Link
              to="/"
              className="bg-light border border-gay-500 px-3 py-1 rounded-sm"
            >
              Back To Search
            </Link>
            <h3>
              Hireable:{' '}
              {data.hireable ? (
                <span className="fas fa-check text-success"></span>
              ) : (
                <span className="fas fa-times-circle text-primary"></span>
              )}
            </h3>
          </section>
          <section className="flex border border-gray-400 bg-light rounded-sm px-8 py-4">
            <div className="flex flex-col justify-center items-center space-y-3 w-1/2">
              <img
                src={data.avatar_url}
                alt="Avatar"
                className="w-40 rounded-full"
              />
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <h3>Location: {data.location}</h3>
            </div>
            <div className="flex flex-col w-1/2 items-start">
              <h2 className="text-xl font-semibold">Bio</h2>
              <p>{data.bio}</p>
              <a
                href={data.html_url}
                target="_blank"
                className="bg-dark text-white py-2 px-4 my-2 rounded-sm"
              >
                Visit Github Profile
              </a>
              <ul>
                {data.login && (
                  <li>
                    <span className="font-bold">Username</span>: {data.login}
                  </li>
                )}
                {data.company && (
                  <li>
                    <span className="font-bold">Company</span>: {data.company}
                  </li>
                )}
                {data.blog && (
                  <li>
                    <span className="font-bold">Website</span>: {data.blog}
                  </li>
                )}
              </ul>
            </div>
          </section>

          <section className="flex border space-x-3 text-xs justify-center items-center border-gray-400 bg-light rounded-sm px-8 py-4">
            <div className="bg-primary text-white px-2 py-1 rounded-md">
              Followers: {data.followers}
            </div>
            <div className="bg-success text-white px-2 py-1 rounded-md">
              Following: {data.following}
            </div>
            <div className="bg-white text-black px-2 border border-gray-400 py-1 rounded-md">
              Public Repos: {data.public_repos}
            </div>
            <div className="bg-dark text-white px-2 py-1 rounded-md">
              Public Gists: {data.public_gists}
            </div>
          </section>
        </Fragment>
      )}
    </div>
  );
};

export default UserDetail;
