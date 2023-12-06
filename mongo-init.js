// Crear el usuario en la base de datos "admin"
db.createUser({
    user: "admin",
    pwd: "admin123",
    roles: [
        {
            role: "readWrite",
            db: "torneo_deportivo"
        }
    ]
});

// inicializar el conjunto de réplicas.
rs.initiate({
    _id: "rs0",
    members: [
      { _id: 0, host: "torneo_deportivo_mongo_primary:27017" },
      { _id: 1, host: "torneo_deportivo_mongo_secondary_1:27018" },
      { _id: 2, host: "torneo_deportivo_mongo_secondary_2:27019" }
    ]
});

// Crear las colecciones (tablas) de la BD
db.createCollection("deportistas");
db.createCollection("entrenadores");
db.createCollection("arbitros");
db.createCollection("encuentros_deportivos");
db.createCollection("resultados");
db.createCollection("posiciones");

// Lista de deportistas
var deportistasData = [
    {   
        "nombre": "Juan", 
        "apellido": "Gomez", 
        "edad": 28, 
        "numero_camiseta": 10, 
        "entrenador": { 
            "nombre": "Luis", 
            "apellido": "Gonzalez", 
            "edad": 35, 
            "anios_experiencia_tenis": 10 
        } 
    },
    {   
        "nombre": "Maria", 
        "apellido": "Rodriguez", 
        "edad": 25, 
        "numero_camiseta": 7,
        "entrenador": { 
            "nombre": "Ana", 
            "apellido": "Rodriguez", 
            "edad": 40, 
            "anios_experiencia_tenis": 15 
        } 
    },
    {   
        "nombre": "Carlos", 
        "apellido": "Perez", 
        "edad": 23, 
        "numero_camiseta": 14,
        "entrenador": { 
            "nombre": "Carlos", 
            "apellido": "Fernandez", 
            "edad": 32, 
            "anios_experiencia_tenis": 8 
        }
    },
    {   
        "nombre": "Laura", 
        "apellido": "Fernandez", 
        "edad": 30, 
        "numero_camiseta": 5,
        "entrenador": { 
            "nombre": "Laura", 
            "apellido": "Lopez", 
            "edad": 38, 
            "anios_experiencia_tenis": 12 
        }
    },
    { 
        "nombre": "Alejandro", 
        "apellido": "Lopez", 
        "edad": 27, 
        "numero_camiseta": 21,
        "entrenador": { 
            "nombre": "Alejandro", 
            "apellido": "Martinez", 
            "edad": 33, 
            "anios_experiencia_tenis": 9 
        }
    },
    { 
        "nombre": "Ana", 
        "apellido": "Martinez", 
        "edad": 22, 
        "numero_camiseta": 3,
        "entrenador": { 
            "nombre": "Sofia", 
            "apellido": "Gomez", 
            "edad": 36, 
            "anios_experiencia_tenis": 11 
        }
    },
    { 
        "nombre": "Pedro", 
        "apellido": "Hernandez", 
        "edad": 29, 
        "numero_camiseta": 9,
        "entrenador": { 
            "nombre": "Javier", 
            "apellido": "Perez", 
            "edad": 37, 
            "anios_experiencia_tenis": 14 
        }
    },
    { 
        "nombre": "Sofia", 
        "apellido": "Gutierrez", 
        "edad": 26, 
        "numero_camiseta": 18,
        "entrenador": { 
            "nombre": "Isabel", 
            "apellido": "Hernandez", 
            "edad": 42, 
            "anios_experiencia_tenis": 18 
        }
    }
];

db.deportistas.insertMany(deportistasData);

// Lista de entrenadores
var entrenadoresData = [
    { 
        "nombre": "Luis", 
        "apellido": "Gonzalez", 
        "edad": 35, 
        "anios_experiencia_tenis": 10 
    },
    { 
        "nombre": "Ana", 
        "apellido": "Rodriguez", 
        "edad": 40, 
        "anios_experiencia_tenis": 15 
    },
    { 
        "nombre": "Carlos", 
        "apellido": "Fernandez", 
        "edad": 32, 
        "anios_experiencia_tenis": 8 
    },
    { 
        "nombre": "Laura", 
        "apellido": "Lopez", 
        "edad": 38, 
        "anios_experiencia_tenis": 12 
    },
    { 
        "nombre": "Alejandro", 
        "apellido": "Martinez", 
        "edad": 33, 
        "anios_experiencia_tenis": 9 
    },
    { 
        "nombre": "Sofia", 
        "apellido": "Gomez", 
        "edad": 36, 
        "anios_experiencia_tenis": 11 
    },
    { 
        "nombre": "Javier", 
        "apellido": "Perez", 
        "edad": 37, 
        "anios_experiencia_tenis": 14 
    },
    { 
        "nombre": "Isabel", 
        "apellido": "Hernandez", 
        "edad": 42, 
        "anios_experiencia_tenis": 18 
    }
];

// Instrucción insertMany para insertar la lista de entrenadores en la colección
db.entrenadores.insertMany(entrenadoresData);
  
// Instrucción insertOne para insertar cada uno de los arbitros
db.arbitros.insertOne({ "nombres": "Carlos", "apellidos": "Gomez", "edad": 35, "anios_experiencia_arbitraje": 5 });
db.arbitros.insertOne({ "nombres": "Ana", "apellidos": "Fernandez", "edad": 40, "anios_experiencia_arbitraje": 8 });
db.arbitros.insertOne({ "nombres": "Luis", "apellidos": "Rodriguez", "edad": 32, "anios_experiencia_arbitraje": 6 });
db.arbitros.insertOne({ "nombres": "Sofia", "apellidos": "Lopez", "edad": 28, "anios_experiencia_arbitraje": 7 });

var encuentrosDeportivos = [
    {
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a1"),
        "deportista_local": {   
            "nombre": "Juan", 
            "apellido": "Gomez", 
            "edad": 28, 
            "numero_camiseta": 10, 
            "entrenador": { 
                "nombre": "Luis", 
                "apellido": "Gonzalez", 
                "edad": 35, 
                "anios_experiencia_tenis": 10 
            } 
        }, 
        "deportista_visitante": {   
            "nombre": "Maria", 
            "apellido": "Rodriguez", 
            "edad": 25, 
            "numero_camiseta": 7,
            "entrenador": { 
                "nombre": "Ana", 
                "apellido": "Rodriguez", 
                "edad": 40, 
                "anios_experiencia_tenis": 15 
            } 
        }, 
        "arbitro": { "nombres": "Carlos", "apellidos": "Gomez", "edad": 35, "anios_experiencia_arbitraje": 5 } 
    },
    {
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a2"),
        "deportista_local": {   
            "nombre": "Carlos", 
            "apellido": "Perez", 
            "edad": 23, 
            "numero_camiseta": 14,
            "entrenador": { 
                "nombre": "Carlos", 
                "apellido": "Fernandez", 
                "edad": 32, 
                "anios_experiencia_tenis": 8 
            }
        }, 
        "deportista_visitante": {   
            "nombre": "Laura", 
            "apellido": "Fernandez", 
            "edad": 30, 
            "numero_camiseta": 5,
            "entrenador": { 
                "nombre": "Laura", 
                "apellido": "Lopez", 
                "edad": 38, 
                "anios_experiencia_tenis": 12 
            }
        }, 
        "arbitro": { "nombres": "Carlos", "apellidos": "Gomez", "edad": 35, "anios_experiencia_arbitraje": 5 }
    },
    {
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a3"),
        "deportista_local": { 
            "nombre": "Alejandro", 
            "apellido": "Lopez", 
            "edad": 27, 
            "numero_camiseta": 21,
            "entrenador": { 
                "nombre": "Alejandro", 
                "apellido": "Martinez", 
                "edad": 33, 
                "anios_experiencia_tenis": 9 
            }
        }, 
        "deportista_visitante": { 
            "nombre": "Ana", 
            "apellido": "Martinez", 
            "edad": 22, 
            "numero_camiseta": 3,
            "entrenador": { 
                "nombre": "Sofia", 
                "apellido": "Gomez", 
                "edad": 36, 
                "anios_experiencia_tenis": 11 
            }
        }, 
        "arbitro": { "nombres": "Ana", "apellidos": "Fernandez", "edad": 40, "anios_experiencia_arbitraje": 8 }
    },
    {
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a4"),
        "deportista_local": { 
            "nombre": "Pedro", 
            "apellido": "Hernandez", 
            "edad": 29, 
            "numero_camiseta": 9,
            "entrenador": { 
                "nombre": "Javier", 
                "apellido": "Perez", 
                "edad": 37, 
                "anios_experiencia_tenis": 14 
            }
        }, 
        "deportista_visitante": { 
            "nombre": "Sofia", 
            "apellido": "Gutierrez", 
            "edad": 26, 
            "numero_camiseta": 18,
            "entrenador": { 
                "nombre": "Isabel", 
                "apellido": "Hernandez", 
                "edad": 42, 
                "anios_experiencia_tenis": 18 
            }
        }, 
        "arbitro": { "nombres": "Ana", "apellidos": "Fernandez", "edad": 40, "anios_experiencia_arbitraje": 8 }
    },
    {
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a5"),
        "deportista_local": {   
            "nombre": "Juan", 
            "apellido": "Gomez", 
            "edad": 28, 
            "numero_camiseta": 10, 
            "entrenador": { 
                "nombre": "Luis", 
                "apellido": "Gonzalez", 
                "edad": 35, 
                "anios_experiencia_tenis": 10 
            } 
        }, 
        "deportista_visitante": {   
            "nombre": "Laura", 
            "apellido": "Fernandez", 
            "edad": 30, 
            "numero_camiseta": 5,
            "entrenador": { 
                "nombre": "Laura", 
                "apellido": "Lopez", 
                "edad": 38, 
                "anios_experiencia_tenis": 12 
            }
        }, 
        "arbitro": { "nombres": "Luis", "apellidos": "Rodriguez", "edad": 32, "anios_experiencia_arbitraje": 6 }
    },
    {
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a5"),
        "deportista_local": { 
            "nombre": "Alejandro", 
            "apellido": "Lopez", 
            "edad": 27, 
            "numero_camiseta": 21,
            "entrenador": { 
                "nombre": "Alejandro", 
                "apellido": "Martinez", 
                "edad": 33, 
                "anios_experiencia_tenis": 9 
            }
        }, 
        "deportista_visitante": { 
            "nombre": "Pedro", 
            "apellido": "Hernandez", 
            "edad": 29, 
            "numero_camiseta": 9,
            "entrenador": { 
                "nombre": "Javier", 
                "apellido": "Perez", 
                "edad": 37, 
                "anios_experiencia_tenis": 14 
            }
        }, 
        "arbitro": { "nombres": "Luis", "apellidos": "Rodriguez", "edad": 32, "anios_experiencia_arbitraje": 6 }
    },
    {
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a5"),
        "deportista_local": {   
            "nombre": "Juan", 
            "apellido": "Gomez", 
            "edad": 28, 
            "numero_camiseta": 10, 
            "entrenador": { 
                "nombre": "Luis", 
                "apellido": "Gonzalez", 
                "edad": 35, 
                "anios_experiencia_tenis": 10 
            } 
        }, 
        "deportista_visitante": { 
            "nombre": "Alejandro", 
            "apellido": "Lopez", 
            "edad": 27, 
            "numero_camiseta": 21,
            "entrenador": { 
                "nombre": "Alejandro", 
                "apellido": "Martinez", 
                "edad": 33, 
                "anios_experiencia_tenis": 9 
            }
        }, 
        "arbitro": { "nombres": "Luis", "apellidos": "Rodriguez", "edad": 32, "anios_experiencia_arbitraje": 6 }
    }
];

db.encuentros_deportivos.insertMany(encuentrosDeportivos);

var resultadoEncuentros = [
    {
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a1"),
        "set1": "6-4", 
        "set2": "7-5", 
        "set3": "6-4"
    },
    { 
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a2"),
        "set1": "4-6", 
        "set2": "6-7", 
        "set3": "2-6" 
    },
    { 
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a3"),
        "set1": "6-3", 
        "set2": "5-7", 
        "set3": "7-5" 
    },
    { 
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a4"),
        "set1": "7-5", 
        "set2": "4-6", 
        "set3": "6-3" 
    },
    { 
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a5"),
        "set1": "6-4", 
        "set2": "7-6", 
        "set3": "3-6" 
    },
    { 
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a6"),
        "set1": "3-6", 
        "set2": "6-4", 
        "set3": "7-5" 
    },
    { 
        "encuentro_id": ObjectId("5fc5b4183d1a2c4f32a5b4a7"),
        "set1": "7-6", 
        "set2": "6-4", 
        "set3": "4-6" 
    }
];

// Resultados
db.resultados.insertMany(resultadoEncuentros);

var posiciones = [
    {
        "deportista": {   
            "nombre": "Maria", 
            "apellido": "Rodriguez", 
            "edad": 25, 
            "numero_camiseta": 7,
            "entrenador": { 
                "nombre": "Ana", 
                "apellido": "Rodriguez", 
                "edad": 40, 
                "anios_experiencia_tenis": 15 
            } 
        }, 
        "posicion": 8
    },
    {
        "deportista": {   
            "nombre": "Carlos", 
            "apellido": "Perez", 
            "edad": 23, 
            "numero_camiseta": 14,
            "entrenador": { 
                "nombre": "Carlos", 
                "apellido": "Fernandez", 
                "edad": 32, 
                "anios_experiencia_tenis": 8 
            }
        }, 
        "posicion": 7
    },
    {
        "deportista": { 
            "nombre": "Ana", 
            "apellido": "Martinez", 
            "edad": 22, 
            "numero_camiseta": 3,
            "entrenador": { 
                "nombre": "Sofia", 
                "apellido": "Gomez", 
                "edad": 36, 
                "anios_experiencia_tenis": 11 
            }
        }, 
        "posicion": 6
    },
    {
        "deportista": { 
            "nombre": "Sofia", 
            "apellido": "Gutierrez", 
            "edad": 26, 
            "numero_camiseta": 18,
            "entrenador": { 
                "nombre": "Isabel", 
                "apellido": "Hernandez", 
                "edad": 42, 
                "anios_experiencia_tenis": 18 
            }
        }, 
        "posicion": 5
    },
    {
        "deportista": {   
            "nombre": "Laura", 
            "apellido": "Fernandez", 
            "edad": 30, 
            "numero_camiseta": 5,
            "entrenador": { 
                "nombre": "Laura", 
                "apellido": "Lopez", 
                "edad": 38, 
                "anios_experiencia_tenis": 12 
            }
        }, 
        "posicion": 4
    },
    {
        "deportista": { 
            "nombre": "Pedro", 
            "apellido": "Hernandez", 
            "edad": 29, 
            "numero_camiseta": 9,
            "entrenador": { 
                "nombre": "Javier", 
                "apellido": "Perez", 
                "edad": 37, 
                "anios_experiencia_tenis": 14 
            }
        }, 
        "posicion": 3
    },
    {
        "deportista": { 
            "nombre": "Alejandro", 
            "apellido": "Lopez", 
            "edad": 27, 
            "numero_camiseta": 21,
            "entrenador": { 
                "nombre": "Alejandro", 
                "apellido": "Martinez", 
                "edad": 33, 
                "anios_experiencia_tenis": 9 
            }
        }, 
        "posicion": 2
    },
    {
        "deportista": {   
            "nombre": "Juan", 
            "apellido": "Gomez", 
            "edad": 28, 
            "numero_camiseta": 10, 
            "entrenador": { 
                "nombre": "Luis", 
                "apellido": "Gonzalez", 
                "edad": 35, 
                "anios_experiencia_tenis": 10 
            } 
        }, 
        "posicion": 1
    }
];

db.posiciones.insertMany(posiciones);

// Borrar la colección dummy para que no quede en la base de datos final
//db.torneo_deportivo.drop();