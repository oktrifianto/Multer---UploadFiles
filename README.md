# Multer Example for Upload Files

Upload Files Using Node.js + Express + Multer

---

## How to Run Back-end

Running back-end server
```
node server.js
```

Using nodemon for development
```
nodemon server.js
```

---

## How to Run Front-end

Install `http-server` globally
```
npm install http-server -g
```

Run front-end
```
http-server front-end -o
```

---

## How to Running Conccurently ?

Add on `package.json`
```
concurrently \"npm run back-end\" \"npm run front-end\
```

Running faster from config
```
npm run dev
```