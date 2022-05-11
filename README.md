# Chat Application
A Realtime Chat Application built using React and Kafka as MessageBroker




## Before Running the Project 

*Start Docker*
```
docker-compose up --build
```

*Add topic*
```
docker exec broker kafka-topics --create --topic kafka-chat --bootstrap-server broker:9092 --replication-factor 1 --partitions 1
```

*Start Backend*
```
./gradlew run
```

*Start Frontend*
```
npm start
```



