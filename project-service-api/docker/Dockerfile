FROM openjdk:8
ADD /project-service-api-0.0.1-SNAPSHOT.jar project-service-api.jar
EXPOSE 8089
RUN bash -c 'touch /project-service-api.jar'
ENTRYPOINT ["java","-jar","project-service-api.jar"]