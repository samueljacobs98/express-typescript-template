.PHONY: local development staging production stop logs

export APP_NAME := express-typescript-template

env ?= local

local:
	sh docker/scripts/start.local.sh

development:
	ENVIRONMENT=development sh docker/scripts/start.sh

staging:
	ENVIRONMENT=staging sh docker/scripts/start.sh

production:
	ENVIRONMENT=production sh docker/scripts/start.sh

logs:
	@echo "Fetching logs for '$(env)' environment..."; \
	ENVIRONMENT="$(env)" sh docker/scripts/logs.sh

stop:
stop:
	@echo "Stopping services for '$(env)' environment..."; \
	ENVIRONMENT="$(env)" sh docker/scripts/stop.sh