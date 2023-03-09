import createGlobalState from 'react-create-global-state';

const USER_KEY = 'username';

const stateInStorage = localStorage.getItem(USER_KEY);

const initialState = stateInStorage ? JSON.parse(stateInStorage) : null;

const [_useGlobalUser, Provider] = createGlobalState(initialState);

function useGlobalUser() {
  const [_user, _setUser] = _useGlobalUser();

  function setUser(user) {
    _setUser(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  return [_user, setUser];
}

export const GlobalUserProvider = Provider;

export default useGlobalUser;
