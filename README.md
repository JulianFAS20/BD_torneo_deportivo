# BD_torneo_deportivo
# Requisitos previos:
- Tener instalado Docker Desktop
- Tener git instalado para poder bajar el repositorio

Este proyecto contiene un archivo docker-compose.yml que me permite levantar un servicio (contenedor) de MongoDB, el cual contiene una BD poblada con informacion relevante para un torneo_deportivo, para poder ejecutar los comandos de docker, debes abrir una terminal dentro de la carpeta descargada del repositorio

Para levantar el servicio de docker usaremos el siguiente comando:
docker-compose up -d

luego de ello el contenedor se habra levantado he iniciado, por lo cual ahora entraremos al contenedor por medio de una terminal interactiva ejecutando el siguiente comando:
docker exec -it torneo_deportivo_mongo /bin/bash

alli estaremos dentro de la terminal del contenedor, luego ejecutaremos el siguiente comando para iniciar la terminal de mongo:
mongosh -u admin -p admin123 --authenticationDatabase torneo_deportivo

luego nos pararemos sobre la BD
use torneo_deportivo

y finalmente para consultar las colecciones ejecutamos:
show collections

y para ver la informacion alojada dentro de cada tabla ejecutamos:
db.nombreDeLaColeccion.find()