FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY target/liberte-0.0.1-SNAPSHOT.jar libert-server.jar
COPY mails.txt mails.txt
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "libert-server.jar"]