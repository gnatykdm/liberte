FROM openjdk:17-jdk-alpine
LABEL authors="gnatykdm"

WORKDIR /app

COPY target/*.jar libert-server.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "libert-server.jar"]
