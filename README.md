### E-STORE-API

<u><small>Author: Dr. Mntasir Mirghani.</small></u>

<small>copyright © 2022 - 2023 Montasir Mirghani</small>

---

##### `This is a tutorial project for building an e-commerce RESTful API from scratch by following code comments via GitHub`

---

#### <u>Built With</u>

| Technology        | Description                                                                                                                 | Link                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Node.js**       | _a JavaScript runtime built on Chrome's V8 JavaScript engine_                                                               | https://nodejs.org                                                                         |
| **Express.js**    | _a fast, unopinionated, minimalist web framework for Node.js_                                                               | https://expressjs.com                                                                      |
| **MongoDB**       | an open source NoSQL (Not only SQL) database management program                                                             | https://www.mongodb.com                                                                    |
| **VS Code**       | a code editor redefined and optimized for building and debugging modern web and cloud applications                          | https://code.visualstudio.com                                                              |
| **ThunderClient** | Hand-crafted lightweight Rest Client for Testing APIs                                                                       | https://www.thunderclient.com                                                              |
| **Cloudinary**    | MEDIA EXPERIENCE CLOUD The Most Powerful Image and Video APIs                                                               | https://console.cloudinary.com/invites/lpov9zyyucivvxsnalc5/bwfgxdpwmiid2be2wdng?t=default |
| **Railway**       | Made for any language, for projects big and small. Railway is the cloud that takes the complexity out of shipping software. | https://railway.app?referralCode=Dr.montasir                                               |

<svg aria-label="Railway Logo" width="32" height="32" viewBox="0 0 1024 1024" fill="none"><path d="M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z" fill="#000"></path><path d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z" fill="#000"></path></svg>

**Note**: **Railway** cloud is used in this tutorial to `host` the `database` and `deploy` the project.

#### <u>Features</u>

- JWT Authentication
- super-admin control
- handling errors
- internationalization i18n (for response message)
- model field translation (for the content stored in the database)

#### <u>Project comments</u>

Each comment has a headline related to a specific programming concept or unit. Changes in the project build, such as additions, modifications, and deletions, can be followed by referring to the specified comment through the project link on GitHub.

##### **Comment No. 1: Project Initialization**

- **npm**

  ```shell
  npm i express dotenv
  npm -D i nodemon
  ```

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── node_modules
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
          new file:   .gitignore
          new file:   LICENCE
          new file:   README.md
          new file:   example.env
          new file:   package.json
          new file:   server.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 1: https://youtu.be/fuofr7P7izk

##### **Comment No. 2: HTTP request logger middleware**

- **npm**

  ```shell
  npm i morgan
  ```

- **Changes**

  ```shell
          modified:   README.md
          modified:   package.json
          modified:   server.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 2: https://www.youtube.com/watch?v=YWTOyrTDB-I

##### **Comment No. 3: Railway cloud. Database hosting, and Project deployment**

- **Changes**

  ```shell
          modified:   README.md
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 3: https://www.youtube.com/watch?v=EPCV6lNvCQM

##### **Comment No. 4: Thunder Client. Testing in Production**

- **Changes**

  ```shell
          modified:   README.md
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 4: https://www.youtube.com/watch?v=1r2VhUIYChU

##### **Comment No. 5: Routes Setup**

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── node_modules
  ├── routes
  │   └── index.js
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
          modified:   README.md
          modified:   example.env
          modified:   server.js
          new file:   routes/index.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 5: https://www.youtube.com/watch?v=_W6oOWauQa8

##### **Comment No. 6: Railway cloud. Environment Variables**

- **Changes**

  ```shell
          modified:   README.md
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 6: https://www.youtube.com/watch?v=_2bdi2X0Xl0

##### **Comment No. 7: Native Math Package**

- **Changes**

  ```shell
        modified:   README.md
        modified:   package.json
        modified:   routes/index.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 7: https://www.youtube.com/watch?v=OOvhJ67LTd0

##### **Comment No. 8: Controllers Setup**

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── controllers
  │   └── index.js
  ├── node_modules
  ├── routes
  │   └── index.js
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
          modified:   README.md
          modified:   routes/index.js
          new file:   controllers/index.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 8: https://www.youtube.com/watch?v=515IICGLoO0

##### **Comment No. 9: Sources Folder**

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── node_modules
  ├── sources
  │   ├── controllers
  │   │   └── index.js
  │   └── routes
  │       └── index.js
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
        modified:   README.md
        deleted:    controllers/index.js
        deleted:    routes/index.js
        modified:   server.js
        new file:   sources/controllers/index.js
        new file:   sources/routes/index.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 9: https://www.youtube.com/watch?v=IDanDNsMaaY

##### **Comment No. 10: The Start Folder**

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── node_modules
  ├── sources
  │   ├── controllers
  │   │   └── index.js
  │   └── routes
  │       └── index.js
  ├── start
  │   └── app.js
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
        modified:   README.md
        modified:   server.js
        new file:   start/app.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 10: https://www.youtube.com/watch?v=OroYPsCVjGI

##### **Comment No. 11: Configuration File**

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── node_modules
  ├── sources
  │   ├── controllers
  │   │   └── index.js
  │   └── routes
  │       └── index.js
  ├── start
  │   ├── app.js
  │   └── config.js
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
        modified:   README.md
        modified:   start/app.js
        new file:   start/config.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 11: https://www.youtube.com/watch?v=ma92qSEl4qY

##### **Comment No. 12: Database Setup**

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── node_modules
  ├── sources
  │   ├── controllers
  │   │   └── index.js
  │   └── routes
  │       └── index.js
  ├── start
  │   ├── app.js
  │   ├── config.js
  │   └── db.js
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
        modified:   README.md
        modified:   example.env
        modified:   package.json
        modified:   start/app.js
        modified:   start/config.js
        new file:   start/db.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 12: https://www.youtube.com/watch?v=USV6NKNC37k

#### **Comment No. 13: Models Setup**

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── node_modules
  ├── sources
  │   ├── controllers
  │   │   └── index.js
  │   ├── models
  │   │   └── User.js
  │   └── routes
  │       └── index.js
  ├── start
  │   ├── app.js
  │   ├── config.js
  │   └── db.js
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
        modified:   README.md
        new file:   sources/models/User.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 13: https://www.youtube.com/watch?v=1IdwRYpxb_Q

#### **Comment No. 14: User Schema**

- **Changes**

  ```shell
        modified:   README.md
        modified:   sources/models/User.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 14: https://www.youtube.com/watch?v=yeahyw3rTHg

#### **Comment No. 15: New User Registration**

- **npm**

  ```shell
  npm i body-parser
  ```

- **Project Structure**

  ```shell
  e-store-api
  .
  ├── node_modules
  ├── sources
  │   ├── controllers
  │   │   ├── index.js
  │   │   └── users.js
  │   ├── models
  │   │   └── User.js
  │   └── routes
  │       ├── index.js
  │       └── users.js
  ├── start
  │   ├── app.js
  │   ├── config.js
  │   └── db.js
  ├── .env
  ├── .gitignore
  ├── example.env
  ├── LICENCE
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server.js
  ```

- **Changes**

  ```shell
        modified:   README.md
        modified:   package.json
        modified:   start/app.js
        new file:   sources/controllers/users.js
        new file:   sources/routes/users.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 15: https://www.youtube.com/watch?v=Yq-F-zV2S7g

#### **Comment No. 16: HTTP status codes**

- **Changes**

  ```shell
        modified:   README.md
        modified:   sources/controllers/index.js
        modified:   sources/controllers/users.js
  ```

- **Result**

  Playlist: https://youtube.com/playlist?list=PLoqJtXvBJ39S-sFs6rVrbbQRfI8o9j4tz

  comment no. 16: https://www.youtube.com/watch?v=BtCMJHHyl6o
