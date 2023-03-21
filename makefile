dev: 
	docker compose -f docker-compose-dev.yaml up
restart:
	docker compose -f docker-compose-dev.yaml down
	docker compose -f docker-compose-dev.yaml up
stop: 
	docker compose -f docker-compose-dev.yaml down
prod:
	docker compose -f docker-compose-prod.yaml up -d
stop-prod:
	docker compose -f docker-compose-prod.yaml down