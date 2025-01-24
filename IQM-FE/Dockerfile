# Get npm package
FROM node:22 AS build
#working directory 
WORKDIR /app
#copy packge.json 
COPY package*.json ./
#install npm from package
RUN npm install
#copy all data 
COPY . .
#run build cmoonad 
RUN npm run build
#serve the app using Nginx 
FROM nginx:alpine
#Copy the production build from the build stage
COPY --from=build /app/dist /usr/share/nginx/html
#expose port
EXPOSE 80
#start Nginx
CMD ["nginx","-g","daemon off;"]