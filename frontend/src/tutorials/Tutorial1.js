import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Tutorial1() {
  const str101 = "cd project1/frontend";
  const copy101 = (
    <CopyToClipboard text={str101}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str102 =
    '// Wellcome.tsx \nimport React from "react";\n import ReactDOM from "react-dom";\n import "./index.css";\n import App from "./App";\n import reportWebVitals from "./reportWebVitals";\n\n ReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById("root")\n); \n reportWebVitals();';
  const copy102 = (
    <CopyToClipboard text={str102}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str103 =
    '  "name": "frontend",\n  "version": "0.1.0",\n  "private": true, \n  "proxy": "http://localhost:8000",';
  const copy103 = (
    <CopyToClipboard text={str103}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str104 =
    'import React from "react";\n\nfunction List(){\n\n    return (\n        <div>\n\n        </div>;\n    ) \n  }\n\n export default List;';
  const copy104 = (
    <CopyToClipboard text={str104}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str105 = "3";
  const copy105 = (
    <CopyToClipboard text={str105}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str106 =
    'import React, {useState, useEffect} from "react"\n import axios from "axios"\n import  List from "./List"';
  const copy106 = (
    <CopyToClipboard text={str106}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str107 =
    'function Note() {\n    const [notes , setNewNotes] = useState<any[]>([]); \n    const [formNote, setFormNote] = useState({\n          title: "",\n          content: ""\n          })\n    }';
  const copy107 = (
    <CopyToClipboard text={str107}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str108 = "    useEffect(() => {\n      getNotes()\n        } ,[])";
  const copy108 = (
    <CopyToClipboard text={str108}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str109 =
    'function getNotes() {\n  axios({\n      method: "GET",\n      url:"/notes/",\n    }).then((response)=>{ \n      const data = response.data\n      setNewNotes(data) \n    }).catch((error) => {\n      if (error.response) {\n        console.log(error.response); \n        console.log(error.response.status); \n        console.log(error.response.headers); \n        }\n    })}';
  const copy109 = (
    <CopyToClipboard text={str109}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str110 =
    'function createNote(event) {\n    axios({\n      method: "POST",\n      url:"/notes/",\n      data:{ \n        title: formNote.title, \n        content: formNote.content\n       }\n    })\n    .then((response) => {\n      getNotes()\n    })\n\n    setFormNote(({\n      title: "",\n      content: ""}))\n\n    event.preventDefault()\n }';
  const copy110 = (
    <CopyToClipboard text={str110}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str111 =
    'function DeleteNote(id) {\n    axios({\n      method: "DELETE",\n      url:`/notes/${id}/`,\n    })\n    .then((response) => {\n      getNotes()\n    });\n }';
  const copy111 = (
    <CopyToClipboard text={str111}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str112 =
    "function handleChange(event) { \n  const {value, name} = event.target\n  setFormNote(prevNote => ({\n      ...prevNote, [name]: value})\n  )}";
  const copy112 = (
    <CopyToClipboard text={str112}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str113 =
    '  return (\n <div className="">\n\n      <form className="create-note">\n          <input onChange={handleChange}\n          // text={formNote.title}\n          name="title"\n          placeholder="Title"\n          value={formNote.title} />\n          <textarea onChange={handleChange} name="content"\n          placeholder="Take a note..." value={formNote.content} />\n          <button onClick={createNote}>Create Post</button>\n      </form>\n          { notes && notes.map(note => <List\n          key={note.id}\n          id={note.id}\n          title={note.title}\n          content={note.content} \n          deletion ={DeleteNote}\n          />\n          )} \n\n    </div>\n  );';
  const copy113 = (
    <CopyToClipboard text={str113}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str114 =
    'import React from "react";\n\nfunction List(props: any){\n      function handleClick(){\n    props.deletion(props.id) \n  }\n    return (\n        <div className="note">\n          <h1 >  Title: {props.title} </h1>\n          <p > Content: {props.content}</p>\n          <button onClick={handleClick}>Delete</button>\n        </div>\n    ) \n  }\n\n export default List;';
  const copy114 = (
    <CopyToClipboard text={str114}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str115 =
    'import React from "react";\nimport Note from "./notes/Notes";\n\n function App() {\n\n  return (\n    <div className="App">\n      <Note />\n\n    </div>\n );\n}\nexport default App;';
  const copy115 = (
    <CopyToClipboard text={str115}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str116 = "npm run build";
  const copy116 = (
    <CopyToClipboard text={str116}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str117 = "cd ..";
  const copy117 = (
    <CopyToClipboard text={str117}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str118 = "python manage.py runserver";
  const copy118 = (
    <CopyToClipboard text={str118}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str119 = "cd frontend";
  const copy119 = (
    <CopyToClipboard text={str119}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str120 = "npm install -g react-devtools tree eslint prettier";
  const copy120 = (
    <CopyToClipboard text={str120}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str121 =
    "npm install react-router-dom redux react-redux redux-thunk redux-devtools-extension";
  const copy121 = (
    <CopyToClipboard text={str121}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str122 =
    "npm install @paypal/react-paypal-js react-textarea-autosize react-icons react-easy-swipe";
  const copy122 = (
    <CopyToClipboard text={str122}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str123 =
    "npm install emailjs-com react-paginate react-syntax-highlighter web-vitals --save";
  const copy123 = (
    <CopyToClipboard text={str123}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str124 =
    "npm install --save reactjs-social-login react-copy-to-clipboard";
  const copy124 = (
    <CopyToClipboard text={str124}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str125 = "npm i @types/rebass @heroicons/react";
  const copy125 = (
    <CopyToClipboard text={str125}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str126 = "npm i --save-dev @types/node";
  const copy126 = (
    <CopyToClipboard text={str126}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str127 = "npm i -D tailwindcss postcss autoprefixer postcss-cli";
  const copy127 = (
    <CopyToClipboard text={str127}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str128 = "@tailwind base;\n@tailwind components;\n@tailwind utilities;";
  const copy128 = (
    <CopyToClipboard text={str128}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str129 = "npx tailwindcss init --full";
  const copy129 = (
    <CopyToClipboard text={str129}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str130 = "npx tailwindcss init tailwindcss-config.js -p";
  const copy130 = (
    <CopyToClipboard text={str130}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str130b =
    'content: ["./public/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],';
  const copy130b = (
    <CopyToClipboard text={str130b}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str131a =
    '"scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },';
  const str131 =
    '"scripts": {\n    "start": "npm run watch:css && react-scripts start",\n    "build": "npm run watch:css && react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "watch:css": "postcss src/styles/tailwind.css -o src/styles/output.css"\n},';
  const copy131 = (
    <CopyToClipboard text={str131}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str132 = "import './styles/output.css'\nimport './index.css';";
  const copy132 = (
    <CopyToClipboard text={str132}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str132b =
    "INSTALLED_APPS = [\n    'django.contrib.admin', \n    'django.contrib.auth', \n    'django.contrib.contenttypes', \n    'django.contrib.sessions', \n    'django.contrib.messages', \n    'django.contrib.staticfiles', \n\n    'core', \n    'rest_framework', \n    'corsheaders', \n] \n\n CORS_ORIGIN_ALLOW_ALL = False\n CORS_ORIGIN_WHITELIST = ['localhost:3000',] \n\n MIDDLEWARE = [\n    'corsheaders.middleware.CorsMiddleware', \n    'django.middleware.security.SecurityMiddleware', \n    'django.contrib.sessions.middleware.SessionMiddleware', \n    'django.middleware.common.CommonMiddleware', \n    'django.middleware.csrf.CsrfViewMiddleware', \n    'django.contrib.auth.middleware.AuthenticationMiddleware', \n    'django.contrib.messages.middleware.MessageMiddleware', \n    'django.middleware.clickjacking.XFrameOptionsMiddleware', \n]";
  const copy132b = (
    <CopyToClipboard text={str132b}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str133 =
    'import React from "react";\nimport "./styles/output.css";\nimport "./index.css";\n import { Box, Flex } from "rebass";\nimport Note from "./notes/Notes";\n import Wellcome from "./components/Wellcome";\n \n var date = new Date().getDate(); //To get the Current Date. \n var month = new Date().getMonth() + 1; //To get the Current Month. \n var year = new Date().getFullYear(); //To get the Current Year. \n var hours = new Date().getHours();\n var min = new Date().getMinutes();\n var sec = new Date().getSeconds();\n var milsec = new Date().getMilliseconds();\n\n const App = (props: any) => (\n  <Flex\n    sx={{\n      flexDirection: "column",\n      minHeight: "100vh",\n    }}\n  >\n    <Box>\n      <div><p>header</p></div>\n    </Box>\n    <Flex\n      sx={{\n        flex: 1, \n        flexDirection: ["column", "row"],\n      }}\n    >\n      <Box\n        sx={{\n          flex: 1, \n          minWidth: 0, \n        }}\n      >\n        <div className="text-center">\n          <p>\n            {date}/{month}/{year} {hours}:{min}:{sec}:{milsec}{" "}\n          </p>\n        </div>\n        <div><p>main content</p></div>\n        <Note />\n        <Wellcome />\n      </Box>\n      <Box\n        sx={{\n          flexBasis: ["auto", 128], \n          order: -1, \n        }}\n      >\n        <div><p>navigation</p></div>\n      </Box>\n      <Box\n        sx={{\n          flexBasis: ["auto", 128], \n        }}\n      >\n        <div><p>ads</p></div>\n      </Box>\n    </Flex>\n    <Box>\n      <div><p>footer</p></div>\n    </Box>\n  </Flex>\n); \n\n export default App; \n';
  const copy133 = (
    <CopyToClipboard text={str133}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str134 = 'import {BrowserRouter} from "react-router-dom";';
  const copy134 = (
    <CopyToClipboard text={str134}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str135 = "<BrowserRouter>\n    <App />\n  </BrowserRouter>,";
  const copy135 = (
    <CopyToClipboard text={str135}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str136 = "from core.views import front, note, note_detail";
  const copy136 = (
    <CopyToClipboard text={str136}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str137 =
    "from django.contrib import admin\n from django.urls import path\n from core.views import front, note, note_detail\n\n urlpatterns = [\n    path('admin/', admin.site.urls), \n    path('', front, name='front'),\n    path('notes/', note, name='note'),\n    path('notes/<int:pk>/', note_detail, name='detail'),\n]";
  const copy137 = (
    <CopyToClipboard text={str137}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str138 = "python manage.py makemigrations";
  const copy138 = (
    <CopyToClipboard text={str138}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str139 = "python manage.py migrate";
  const copy139 = (
    <CopyToClipboard text={str139}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str140 = "python manage.py runserver";
  const copy140 = (
    <CopyToClipboard text={str140}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str141 =
    '    {\n        "title": "Hello Ace!", \n        "content": "This is a new note." \n    }';
  const copy141 = (
    <CopyToClipboard text={str141}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div id="tutorial1" className="py-5 px-10 text-xl">
      <section id="about">
        <div className="container mx-auto flex p-1 md:flex-row flex-col items-left">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0">
              Page 2 - Notes App 1
            </p>
          </div>
          <div className="text-right">
            <NavLink
              to="/Tutorial2"
              className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0"
            >
              Go to Page 3 - Getting Started 2
            </NavLink>
          </div>
        </div>
      </section>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Frontend - Notes App
      </h1>
      <ul className="list-disc">
        <li className="text-b0ld">
          After the backend setup and development, we are going to create the
          frontend for the react applications. Familiarity with react is needed
          for this tutorial but you don't need to be an expert, basic knowledge
          is good enough for you to follow and understand.
        </li>
      </ul>
      <ol className="list-decimal">
        <li>Navigate to the frontend application directory.</li>
        <table id="101" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy101}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str101}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          There happens to be a lot of files in the public and src folders that
          we won't make use of in the Notes application but we can keep them for
          educational purposes. In the src folder, create new folders:
          components, notes, portfolio, screens, and tutorials.
        </li>
        <li>
          Inside the notes folder, create the following files: Notes.tsx and
          List.tsx
        </li>
        <li>
          Inside the components folder, create the following file: Wellcome.tsx
          and add the code in App.tsx (as below) so that we can always run the
          starter app:
        </li>
        <table id="102" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy102}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str102}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          To make requests to the API endpoints on the Django backend server, we
          will need a JavaScript library called axios. Make sure it is installed
          or install it using npm: npm install axios Next, open the package.json
          file and add the proxy below the "private": true, line so it ends up
          like
        </li>
        <table id="103" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy103}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str103}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            This will make it possible for you to use relative paths when you
            are making the API requests. Instead of making use of
            http://localhost:8000/notes/ you can simply make use of /notes/.
          </li>
        </ul>
        <li>
          List.tsx: Let's start with the List component. We won't be doing much
          here yet, we just need to simply declare and export the function.
        </li>
        <table id="104" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy104}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str104}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Notes.tsx: Copy and paste the following codes:</li>
        <table id="105" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy105}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str105}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            Let us discuss the above coding. You don't have to copy and paste
            these sections again. First we import the required hooks; useState
            and useEffect. We also need to import axios and the List component
            we created before.
          </li>
          <table id="106" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy106}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str106}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
            useState: Next, we create the Note function in which we will make
            use of the useState hook. In the first line, we declare the state
            variable as notes with an initial state of null. The second line is
            to handle the state of the form data. Here we declare the state
            variable as formNote with empty strings as its initial state.
          </li>
          <table id="107" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy107}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str107}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
            Please note that every other function created below should be inside
            the Note function above.
          </li>
          <li>
            useEffect: We'll also use the useEffect hook, so that the getNotes
            function executes right after the render has been displayed on the
            screen.
          </li>
          <table id="108" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy108}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str108}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
            To prevent the function from running in an infinite loop, you can
            pass an empty array ([]) as a second argument. This tells React that
            the effect doesn’t depend on any values from props or state, so it
            never needs to be re-run.
          </li>
          <li>
            GET API function where we are declaring the request method type as
            GET and then passing the relative path /notes/ as the URL. If we had
            not added the proxy "http://localhost:8000" to the package.json
            file. We would need to declare the URL here as
            "http://localhost:8000/notes/". When the GET request is made with
            axios, the data in the received response is assigned to the
            setNewNotes function, and this updates the state variable notes with
            a new state. Thus the value of the state variable changes from null
            to the data in the received response. We also have the error
            handling function in case something goes wrong with the get request.
          </li>
          <table id="109" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy109}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str109}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
            POST API function: Here we are declaring the request method type as
            POST and then passing the relative path /notes/ as the URL. We also
            have an additional field here data. This will contain the data which
            we'll send to the backend for processing and storage in the
            database. That is the data from the title and content inputs in the
            form. When the POST request is made with Axios, we don't process the
            response (remember that this was mentioned in part 2 when we were
            setting up the POST API function); we just use the response function
            to recall the getNotes function so that the previous notes can be
            displayed together with the newly added note. After this, we reset
            the form inputs to empty strings using the setFormNote function.
            Then we also have to ensure that the form submission does not make
            the page reload so we add the event.preventDefault function which
            prevents the default action of the form submission.
          </li>
          <table id="110" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy110}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str110}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
            DELETE API function: We create the function with an id parameter so
            that we can pass the id of the particular note which we want to
            delete as an argument later on. When the DELETE request is made with
            Axios, we don't process the response as well; we just use the
            response function to call the getNotes function so that the notes
            get method can get executed once again and we'll now see the
            remaining notes retrieved from the database.
          </li>
          <table id="111" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy111}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str111}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
            form input change: We need to ensure that the input is a controlled
            one, so we handle the changes with the code below. The function
            monitors every single change in the form inputs and updates/delete
            where necessary. Without this function, you won't see what you are
            typing in the form input fields and the values of your input
            elements won't change as well. We de-structure event.target to get
            the value and name then we use the spread syntax to retain the value
            of the previous input and finally we assign a new value to the
            particular input being worked on.
          </li>
          <table id="112" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy112}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str112}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
            return: Now we return the React elements to be displayed as the
            output of the Note function. In the form, we add the input and text
            area elements. Then we add the onChange event handler which calls
            the handleChange function when we make any change to the input
            fields. Then in the next line where we render the List component, we
            need to first confirm that at least one single note was retrieved
            from the database so that we don't pass null data to the List
            component. If notes were actually retrieved with the GET function;
            we pass the content of the data (id, title, content) and also the
            delete function to the List component. Finally don't forget to
            export the Note component so it can be used in the App.tsx file:{" "}
            <code>export default Note;</code>
          </li>
          <table id="113" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy113}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str113}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
        </ul>
        <li>
          List.tsx: Now we have to go back to the List.tsx file to finish
          creating the List component.
        </li>
        <table id="114" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy114}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str114}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            Here we access the data sent from the Note function using props;
            which gives us access to the title, content and id of the note. We
            pass the id to an onClick function which in turn calls the delete
            function in the Note function with id as the argument. Note: If you
            pass the delete function into the onClick function directly, the
            delete function will run automatically and delete all your notes. A
            solution to this is to pass the delete function into a function
            called by the onClick function just like we did above.
          </li>
        </ul>
        <li>
          App.tsx: Now let us import the Note function into the App.tsx file.
        </li>
        <table id="115" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy115}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str115}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          To test the current state of the application, make sure you are at the
          frontend (cd project1/frontend) and run:
        </li>
        <table id="116" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy116}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str116}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          then return to the project1 directory that contains the manage.py file
        </li>
        <table id="117" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy117}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str117}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Finally activate the virtual environment from the root folder
          (.\env\Scripts\activate), if not already activated, cd project1 and
          run:
        </li>
        <table id="118" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy118}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str118}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Installations and Styling
      </h1>
      <ol className="list-decimal">
        <li>Return to the frontend directory</li>
        <table id="119" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy119}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str119}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>npm install -g react-devtools tree eslint prettier</li>
        <table id="120" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy120}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str120}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          npm install react-router-dom redux react-redux redux-thunk
          redux-devtools-extension
        </li>
        <table id="121" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy121}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str121}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          npm install @paypal/react-paypal-js react-textarea-autosize
          react-icons react-easy-swipe
        </li>
        <table id="122" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy122}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str122}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          npm install emailjs-com react-paginate react-syntax-highlighter
          web-vitals --save
        </li>
        <table id="123" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy123}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str123}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>npm install --save reactjs-social-login react-copy-to-clipboard</li>
        <table id="124" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy124}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str124}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <SyntaxHighLighter language="javascript" style={dracula}>
          {"python manage.py runserver"}
        </SyntaxHighLighter>
        <li>npm i @types/rebass @heroicons/react</li>
        <table id="125" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy125}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str125}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>npm i --save-dev @types/node</li>
        <table id="126" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy126}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str126}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>npm i -D tailwindcss postcss autoprefixer postcss-cli</li>
        <table id="127" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy127}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str127}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We can set up Tailwind with React as an alternative to Bootstrap. In
          VS Code, install Tailwind Intellisense extension.
        </li>
        <li>
          Still at the frontend, enter the following two commands at the Command
          Prompt. The first one will create Tailwind config file:
          tailwind.config.js while the second code create Tailwind CSS config
          and PostCSS config files: postcss.config.js and tailwindcss-config.js
          Finally, Configure the new TailwindCSS Configuration file:
          tailwind.config.js by updating the tailwind.config.js file with new
          purge paths. Updating the purge options gives Tailwind CSS access to
          eliminate unused styles from all of the components in the production
          build.
        </li>
        <table id="129" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy129}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str129}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="130" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy130}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str130}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            Copy and paste the following{" "}
            <pre>
              content: ["./public/index.html", "./src/**/*..........."],
            </pre>{" "}
            to replace the old <code>content: [],</code> under{" "}
            <code>module.exports</code> in tailwind.config.js
          </li>
        </ul>
        <table id="130b" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy130b}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str130b}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Update the Following Lines in package.json with the code below:</li>
        <pre>{str131a}</pre>
        <table id="131" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy131}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str131}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Create a styles folder in the src folder and add two files: output.css
          and tailwind.css
        </li>
        <li>
          In the tailwind.css file, paste the following code (Leave the
          Output.css file empty because it will be taken care of by Postcss):
        </li>
        <table id="128" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy128}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str128}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Go to the index.css file generated by create-react-app located in the
          src directory and again add the above @tailwind directive (including
          the base, components, and utilities style) to the index.css file.
        </li>
        <li>
          To wrap up and actually code in tailwind we have to import the
          following line in our App.tsx file:
        </li>
        <table id="132" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy132}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str132}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
      </ol>
      <li>
        In settings.py, add the following to INSTALLED_APPS: 'rest_framework',
        'corsheaders', If prompted to install autopep, click Yes to initiate{" "}
        <code>-m pip install -U autopep8</code>. Then add the
        'corsheaders.middleware.CorsMiddleware', from the previously installed
        CORS package to the MIDDLEWARE setting. Again because the React
        development server will be running at http://localhost:3000, we can add
        CORS_ORIGIN_ALLOW_ALL = False and CORS_ORIGIN_WHITELIST =
        ['localhost:3000',] anywhere in settings.py file.
      </li>
      <table id="132b" className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy132b}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str132b}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
      <li>
        {" "}
        To test the current state of the application, make sure you are at the
        frontend (cd project1/frontend) and run:
      </li>
      <table id="116x1" className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy116}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str116}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
      <li>
        then return to the project1 directory that contains the manage.py file
      </li>
      <table id="117x1" className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy117}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str117}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
      <li>
        Finally activate the virtual environment from the root folder
        (.\env\Scripts\activate), if not already activated, cd project1 and run:
      </li>
      <table id="118x1" className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy118}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str118}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
      <li>
        You may also run the frontend with <code>npm start</code> because of
        CORS_ORIGIN_WHITELIST = ['localhost:3000',]
      </li>
      <li>Continuation Configure? Holy Grail and tailwind Styling </li>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        'Holy Grail Layout'
      </h1>
      <ul className="list-disc">
        <li>
          At its core, the Holy Grail Layout is a page with a header, footer,
          and three columns. The center column contains the main content, and
          the left and right columns contain supplemental content like ads or
          navigation.
        </li>
      </ul>
      <ol className="list-decimal">
        <li>Replace the contents of App.tsx with the following:</li>
        <table id="133" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy133}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str133}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          BrowserRouter keeps the UI in sync with the URL using the HTML5
          history API. In index.tsx, insert the following:
        </li>
        <table id="134" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy134}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str134}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          <span className="py-2 text-white bg-teal-900">and replace</span>{" "}
          <pre>ReactDOM.render(</pre>
          <pre> &lt;React.StrictMode&gt;</pre>
          <pre> &lt;App /&gt;</pre>
          <pre>&lt;/React.StrictMode&gt;,</pre>{" "}
          <span className="py-2 text-white bg-teal-900">with</span>{" "}
          <pre>ReactDOM.render(</pre>
          <pre> &lt;BrowserRouter&gt;</pre>
          <pre> &lt;App /&gt;</pre>
          <pre>&lt;/BrowserRouter&gt;,</pre>
        </li>
        <table id="135" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy135}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str135}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Continuation</li>
        <table id="136" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy136}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str136}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Run the webapp again. From the root folder, activate the environment
          (.\env\Scripts\activate), cd project1, and python manage.py runserver
        </li>
        <li>
          We need to import the new view functions from the core app into the
          urls.py file. We will just add new lines to the existing ones.
        </li>
        <ul className="list-disc">Your urls.py file should look like this </ul>
        <table id="137" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy137}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str137}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We have finished up the API and backend setup. To test this, we
          migrate the changes we made to the models.py file into the database
          schema.
        </li>
        <table id="138" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy138}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str138}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="139" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy139}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str139}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>and then we run the application with</li>
        <table id="140" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy140}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str140}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          You should still see the default react page, change your URL to
          http://127.0.0.1:8000/notes/. You'll see the Django REST framework
          browsable API. Paste the JSON data below in the content box and click
          on the POST button. This will be the format of the POST data that will
          be sent from the front end.
        </li>
        <table id="141" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy141}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str141}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Refresh the page and you'll see the new POST data. Voila! You have
          successfully executed the POST and GET methods. We have confirmed that
          the API endpoints (GET, POST, DELETE) are working as desired.{" "}
        </li>
        <li>
          Let's also test the DELETE method. Change your URL to
          http://127.0.0.1:8000/notes/1/. The digit at the end of the URL is the
          id of the note you want to delete. Click on the DELETE button and then
          return to the previous URL http://127.0.0.1:8000/notes/ (and Refresh
          the page). You'll discover that the note created earlier has been
          deleted.
        </li>
      </ol>
      <Modal />
      <div>
        <a className="bg-teal-300 rounded" href="#tutorial1">
          Go to Top
        </a>
      </div>
    </div>
  );
}

export default Tutorial1;
