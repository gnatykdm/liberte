# Сначала создаём образ с Maven для сборки приложения
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Копируем файл pom.xml и загружаем все зависимости
COPY pom.xml .
RUN mvn dependency:go-offline

# Копируем исходники и собираем приложение
COPY src /app/src
RUN mvn clean package -DskipTests

# Теперь создаём финальный образ с JAR файлом
FROM openjdk:17-jdk-alpine
WORKDIR /app

# Копируем собранный JAR файл из стадии сборки
COPY --from=build /app/target/liberte-0.0.1-SNAPSHOT.jar /app/libert-server.jar

# Копируем keystore.jks из ресурсов
COPY src/main/resources/keystore.jks /app/keystore.jks

# Копируем файл mails.txt, если он нужен
COPY mails.txt /app/mails.txt

# Устанавливаем переменные окружения для Java
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75"

# Открываем порт 8443 для HTTPS
EXPOSE 8443

# Запуск приложения с использованием SSL
ENTRYPOINT ["java", "-Dserver.ssl.key-store=file:/app/keystore.jks", "-Dserver.ssl.key-store-password=qwerty", "-Dserver.ssl.keyAlias=tomcat", "-Dserver.port=8443", "-jar", "/app/libert-server.jar"]
