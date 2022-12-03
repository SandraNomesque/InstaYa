#Descarga una imagen de node 16
FROM node:16
#Cambia al directorio /app
WORKDIR /app
#Copia desde nuestra equipo al contendor en el directorio activo
COPY . .
#Cambia al directorio /app/back
WORKDIR /app/back
#Ejecuatar el comando npm
RUN npm install --production --force
#Cambia al directorio /app/sesion11
WORKDIR /app/InstaYa
#Instala las librerias
RUN npm install --force
#Puerto de escucha
EXPOSE 8000
#Ejecuto el backend
CMD ["node", "/app/back/node-template/server.js"]
#Ejecuto el frontend
CMD ["npm","run","dev"]

