// startdb.bat

docker-compose down

// Inicializa los servicios de docker
docker-compose up --build -d

// inicializar el conjunto de replicas.
docker exec -it torneo_deportivo_mongo_primary mongosh --eval "rs.initiate({_id:'rs0', members: [{ _id: 0, host: 'torneo_deportivo_mongo_primary' }, { _id: 1, host: 'torneo_deportivo_mongo_secondary_1' }, { _id: 2, host: 'torneo_deportivo_mongo_secondary_2' }]})"

docker exec -it torneo_deportivo_mongo_primary mongosh --eval "rs.status()"

timeout  /t 20 /nobreak