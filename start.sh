kill -9 $(lsof -t -i:3000)
kill -9 $(lsof -t -i:3001)
cd frontend
npm run dev &
cd ..
cd backend
yarn start