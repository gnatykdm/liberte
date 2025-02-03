FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src /app/src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine
WORKDIR /app

COPY --from=build /app/target/liberte-0.0.1-SNAPSHOT.jar /app/libert-server.jar
COPY src/main/resources/keystore.jks /app/keystore.jks

COPY mails.txt /app/mails.txt
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75"

EXPOSE 8443
ENTRYPOINT ["java", "-Dserver.ssl.key-store=file:/app/keystore.jks", "-Dserver.ssl.key-store-password=qwerty", "-Dserver.ssl.keyAlias=tomcat", "-Dserver.port=8443", "-jar", "/app/libert-server.jar"]
