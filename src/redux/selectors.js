export const selectTasks = (state) => state.tasks.items;

export const selectError = (state) => state.tasks.selectError;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectFilters = (state) => state.filters.status;
