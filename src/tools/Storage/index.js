import React, {
  AsyncStorage
}from 'react-native';

class DeviceStorage {

    async get(key) {
      const value = await
      AsyncStorage.getItem(key);
      const jsonValue = JSON.parse(value);
      return jsonValue;
    }

    save(key, value) {
      return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    update(key, value) {
      return DeviceStorage.get(key).then((item) => {
          value = typeof value === 'string' ? value : Object.assign({}, item, value);
          return AsyncStorage.setItem(key, JSON.stringify(value));
      });
    }

    delete(key) {
        return AsyncStorage.removeItem(key);
    }
}

const Storage = new DeviceStorage();
export default Storage;