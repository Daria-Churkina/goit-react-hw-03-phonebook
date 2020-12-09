const load = key => {
  try {
    const keyState = localStorage.getItem(key);

    return keyState === null ? undefined : JSON.parse(keyState);
  } catch (err) {
    return console.error('Get state error: ', err);
  }
};

const save = (key, value) => {
  try {
    const keyState = JSON.stringify(value);
    localStorage.setItem(key, keyState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const storage = {
  load,
  save,
};

export default storage;
