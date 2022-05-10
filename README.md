# Chat Application
A Realtime Chat Application built using React and Kafka as MessageBroker




## Before Running the Project 

*Start Docker*
```shell script
docker-compose up --build
```

*Create a Topic*
```
kafka-topics --create --topic kafka-chat --zookeeper localhost:2181 --replication-factor 1 --partitions 1
```

*Start Backend*
```
mvn spring-boot:run
```

*Start Frontend*
```
npm start
```



