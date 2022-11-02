up:
	docker-compose up -d
start: 
	docker-compose start
stop:
	docker-compose stop

inspect:
	docker ps

exec:
	docker-compose exec mysql /bin/bash
# username: root
# password: root

phpmyadmin:
	open http://localhost:8081