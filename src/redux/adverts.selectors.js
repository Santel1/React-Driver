export const selectAdverts = (state) => state.advertsStore.advertsData;
export const selectAdvertsIsLoading = (state) => state.advertsStore.isLoading;
export const selectAdvertsError = (state) => state.advertsStore.error;
export const selectAdvertsFilter = (state) => state.advertsStore.filter;
export const selectAdvertsModels = (state) => state.advertsStore.carsModel;
export const selectAdvertsFavorites = (state) => state.advertsStore.favorites;
