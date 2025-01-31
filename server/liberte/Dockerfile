
FROM openjdk:17-jdk-alpine
WORKDIR /app

COPY target/liberte-0.0.1-SNAPSHOT.jar libert-server.jar
COPY src/main/resources/keystore.p12 /app/keystore.p12

COPY mails.txt mails.txt
EXPOSE 8080

ENTRYPOINT ["java", "-Dserver.ssl.key-store=/app/keystore.p12", "-Dserver.ssl.key-store-password=libertpass", "-jar", "libert-server.jar"]
