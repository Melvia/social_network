# gram-1:

1.Добавила папки components, containers, store, Utils

1. Добавлены компоненты Header, Feed, FeedPhoto, Photo, AddButton
1. Добавлены элементы хранилица(store):
   1. actions: addPtotosLoading, getCurrentPhoto, getPhotos, toggleTheme
   1. redusers: lastPhotoReducer, currentPhotoReducer, loadingReducer, photoReducer, themeReducer, rootReducer
   1. Добавлены action_types
   1. Все селекторы вынесены в файл selectors
   1. Создание хранилица в файл store
1. Создана папка Utils: в нее вынесены ключ для unsplash, параметры вывода для unsplash api. В файл titles вынесены надписи
1. В App описан роутинг компонент
1. В index.js корня добавлен Provider
1. В index.css описаны предварительные стили всех элементов

# gram-2:

1. Добавлена функция загрузки фотографий при достижении конца страницы в компоненте Feed
1. Добавлено сохранение позиции скролла при переходе из ленты в детальное изображение на компоненте FeedPhoto
1. Добавлена прокрутка до текущего изображения при переходе с детализации в ленту (Feed)

# gram-3:

1. Добавлена стилизация в компонентах Feed, Card
1. Добавлен функционал по установке и снятию "лайка" в компоненте Photo
