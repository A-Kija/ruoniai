function getId(key) {
    const keyName = key + '_id';
    let id = localStorage.getItem(keyName);
    if (null === id) {
        id = 0;
    } else {
        id = parseInt(id);
    }
    id++;
    localStorage.setItem(keyName, id);
    return id;
}