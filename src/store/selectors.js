export const currentPhotoSelector = (state) => state.currentPhoto;
export const themeSelector = (state) => (state.isLightTheme ? "light" : "dark");
export const photoSelector = (state) => state.photos;
export const lastPhotoNumberSelector = (state) => state.lastPhoto;
export const loadingSelector = (state) => state.isLoading;
export const errorSelector = (state) => state.error;
export const scrollPozitionYSelector = (state) => {
  return state.scrollPositionY;
};
