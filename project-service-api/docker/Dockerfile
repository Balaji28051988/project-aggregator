FROM openjdk:8
ADD /project-service-api-0.0.1-SNAPSHOT.jar project-service-api.jar
EXPOSE 8089
RUN bash -c 'touch /project-manager-service.jar'
ENTRYPOINT ["java","-jar","project-service-api.jar"]