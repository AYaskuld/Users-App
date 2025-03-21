# Основные команды
.PHONY: build up down restart

# Сборка образов
build:
	docker compose build

# Запуск сервисов в фоновом режиме
up:
	docker compose up -d

# Остановка сервисов
down:
	docker compose down

# Перезапуск сервисов
restart:
	docker compose down
	docker compose up -d

# show help
help:
	@echo ''
	@echo 'Usage:'
	@echo ' make [target]'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
	helpMessage = match(lastLine, /^# (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 2, RLENGTH); \
			printf "\033[36m%-22s\033[0m %s\n", helpCommand,helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help
