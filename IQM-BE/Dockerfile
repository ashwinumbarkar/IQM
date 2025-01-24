# take image
FROM node:22
# workdir
WORKDIR /app
#copy package json
COPY package*.json ./
#npm install
RUN npm install
#copy all data 
COPY . .
#Expose port 
EXPOSE 5000
#start app
CMD ["node","index.js"]