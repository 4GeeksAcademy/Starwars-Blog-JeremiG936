export const initialStore = () => {
  return {
    favorites: []
  };
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_favorite":
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }
    case "delete_favorite":
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav !== action.payload),
      };
    default:
      throw Error('Unknown action.');
  }
}
