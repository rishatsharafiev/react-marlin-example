# React Marlin Example

### Версии софти и библиотек
- nvm: 0.33.6
- node: v8.9.4
- yarn: v1.6.0
- npm: 5.6.0
- dependencies: ./package.json
- devDependencies: ./webpack/package.json

### Как запускать
development
```
yarn start # с скачиванием node_modules
yarn start:only # без скачивания node_modules
google-chrome http://localhost:8080
```

production
```
yarn run build # с скачиванием node_modules
yarn run build:only # без скачивания node_modules
```

В production режиме используется следующий конфиг nginx, см. devops/nginx/frontend.conf
