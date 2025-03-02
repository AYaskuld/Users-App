# Test User Management App

## Описание
Приложение для управления пользователями с возможностью их создания, получения и мягкого удаления (soft delete). Приложение использует PostgreSQL в качестве базы данных.

## Используемые технологии для развертывания

- **[Docker+docker-compose](https://www.docker.com/)**: Инструменты для контейнеризации приложений.

## Настройка

Для запуска необходим `.env` файл в корне репозитория.

### Пример `.env` файла

```bash
VERSION=latest

SERVER_PORT=8080

POSTGRES_HOST=user_db
POSTGRES_PORT=5432
POSTGRES_USER=secret_user
POSTGRES_PASSWORD=secret_passwd
POSTGRES_DB=users

VITE_API_BASE_URL=http://localhost/api
```

## Запуск приложения

- **Запуск сервисов в фоновом режиме:**

```bash
make up
```

- **Остановка сервиса:**

```bash
make down
```

- **Перезапуск сервисов:**

```bash
make restart
```
Другие команды см. [Makefile](Makefile)

## Автор
KVOTHE 😊

