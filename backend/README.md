# User Management API

## Используемые технологии

- **[Python v3.9.21](https://www.python.org/downloads/release/python-3921/)**: Язык программирования Python.
- **[FastApi](https://fastapi.tiangolo.com/ru/)**: Фреймворк для создания микросервисов.

## Настройка

Для запуска необходим `.env` файл.

### Пример `.env` файла

```bash
POSTGRES_HOST=user_db
POSTGRES_PORT=5432
POSTGRES_USER=secret_user
POSTGRES_PASSWORD=secret_passwd
POSTGRES_DB=users
SERVER_PORT=8000
```

### Описание настроек

| Переменная       | Описание                                   | Значение по умолчанию  |
|------------------|--------------------------------------------|------------------------|
| POSTGRES_USER    | Имя пользователя БД                        | `user`                 |
| POSTGRES_PASSWORD| Пароль пользователя БД                     | `super_secret_password`|
| POSTGRES_HOST    | Хост базы данных                           | `localhost`            |
| POSTGRES_PORT    | Порт для подключения к БД                  | `5432`                 |
| POSTGRES_DB      | Название базы данных                       | `db`                   |
| SERVER_PORT      | Порт по которому приложение будет доступно | `8080`                 |

## Документация
Доступно по endpoint 
```
http://localhost/api/docs
```
##  Healthcheck
**GET** `/health`
#### Пример запроса:
```sh
curl --location --request GET 'http://localhost/api/health'
```
#### Ответ:
```json
{"message":"Ok"}
```

## Автор
KVOTHE 😊

