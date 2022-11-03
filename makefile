up:
	docker-compose up -d
start:
	docker-compose start
stop:
	docker-compose stop
down:
	docker-compose down
inspect:
	docker ps

exec:
	docker-compose exec mysql /bin/bash
# username: root
# password: root

phpmyadmin:
	open http://localhost:8001
