# HernandezCarlosEx2Contador

## Como crear la imagen
docker build -t img-hernandezcarlos_ex2_contador .
## Como subir la imagen
docker push carlosha176/angular-uwu
## Como crear el contenedor
docker run -dit -p 8082:80 --name c-contador --rm img-hernandezcarlos_ex2_contador



