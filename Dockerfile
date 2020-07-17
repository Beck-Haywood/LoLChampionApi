# Step 1
FROM node:12.18.2-buster-slim
# Step 2
ADD . /app
# Step 3
WORKDIR /app
# Step 4
ENV PORT=4040
ENV NODE_ENV=production
ENV JWT_SECRET=0a6b944d-d2fb-46fc-a85e-0295c986cd9f
ENV MONGO_HOST=mongodb://localhost:27017/auth-api-starterpack
ENV MONGODB_URI=mongodb://heroku_bgrgk5n5:nuupvske545daa566un668c488@ds233571.mlab.com:33571/heroku_bgrgk5n5
ENV PRIVATEKEY=123123
# Step 5
COPY package*.json ./
RUN npm install
COPY . .
# Step 6
EXPOSE 4040
# Step 7
CMD [ "node", "src/index.js" ]