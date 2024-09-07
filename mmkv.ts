import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

storage.set('user.name', 'Marc');
storage.set('user.age', 21);
storage.set('is-mmkv-fast-asf', true);

export {storage};
