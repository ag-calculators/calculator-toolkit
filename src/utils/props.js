export const read = (obj, str) => {
    try {
        return str.split('.').reduce( (a, b) => {
            return a[b];
        }, obj);
    } catch (e) {
        return null;
    }
}