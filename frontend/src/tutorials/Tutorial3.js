import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Tutorial3() {
  const str301 = "cd project1/frontend";
  const copy301 = (
    <CopyToClipboard text={str301}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str302 = "npm install axios";
  const copy302 = (
    <CopyToClipboard text={str302}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str303 =
    '  "name": "frontend",\n  "version": "0.1.0",\n  "private": true, \n  "proxy": "http://localhost:8000",';
  const copy303 = (
    <CopyToClipboard text={str303}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str304 =
    'import React from "react";\n\nfunction List(){\n\n    return (\n        <div>\n\n        </div>;\n    ) \n  }\n\n export default List;';
  const copy304 = (
    <CopyToClipboard text={str304}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str305 =
    'import React, {useState, useEffect} from "react"\nimport axios from "axios"\nimport { PlusIcon } from "@heroicons/react/solid";\nimport  List from "./List"\n\nfunction Note() {\n    const [notes , setNewNotes] = useState<any[]>([]); \n    const [formNote, setFormNote] = useState({\n          title: "",\n          content: ""\n          })\n\n    useEffect(() => {\n      getNotes()\n        } ,[])\nconst [isExpanded, setExpanded]= useState(false)\nconst [rows, setRows]= useState(1)\nvar date = new Date().getDate(); //To get the Current Date.\nvar month = new Date().getMonth() + 1; //To get the Current Month. \n var year = new Date().getFullYear(); //To get the Current Year. \n var hours = new Date().getHours();\n var min = new Date().getMinutes();\n var sec = new Date().getSeconds();\n var milsec = new Date().getMilliseconds();\n\nfunction getNotes() {\n  axios({\n      method: "GET",\n      url:"/notes/",\n    }).then((response)=>{ \n      const data = response.data\n      setNewNotes(data) \n    }).catch((error) => {\n      if (error.response) {\n        console.log(error.response); \n        console.log(error.response.status); \n        console.log(error.response.headers); \n        }\n    })}\n\nfunction createNote(event: any) {\n    axios({\n      method: "POST",\n      url:"/notes/",\n      data:{ \n        title: formNote.title, \n        content: formNote.content\n       }\n    })\n    .then((response) => {\n      getNotes()\n    })\n\n    setFormNote(({\n      title: "",\n      content: ""}))\n    setExpanded(false);\n\n    event.preventDefault()\n }\n\nfunction DeleteNote(id: any) {\n    axios({\n      method: "DELETE",\n      url:`/notes/${id}/`,\n    })\n    .then((response) => {\n      getNotes()\n    });\n }\n\nfunction handleChange(event: any) { \n  const {value, name} = event.target\n  setFormNote((prevNote: any) => ({\n      ...prevNote, [name]: value})\n  )}\nfunction NoteShow(){\n    setExpanded(true) \n    setRows(3) \n   }\n\n  return (\n <div className="bg-teal-600 p-4 m-4">\n      <h1 className="bg-orange-100 m-4 p-4 text-xl shadow font-bold">Notes</h1>\n      <form className="">\n        {isExpanded && (\n          <input className="inline-flex bg-teal-200 border-0 py-1 px-3 focus:outline-none  rounded text-lg mt-4 md:mt-0 m-4"\n            onChange={handleChange}\n            title={formNote.title}\n            name="title"\n            placeholder="Title"\n            value={formNote.title}\n          />\n        )} \n        <textarea className="inline-flex bg-teal-200 border-0 py-1 px-3 focus:outline-none rounded text-lg mt-4 md:mt-0 m-4 w-1/2"\n          onClick={NoteShow}\n          onChange={handleChange}\n          name="content"\n          placeholder="Take a note..." \n          rows={rows}\n          value={formNote.content}\n        />\n        {isExpanded && (\n          <button className="bg-lime-200 rounded-lg border-4 border-lime-900" onClick={createNote}>\n            <PlusIcon />\n            Add\n          </button>\n        )}\n </form>\n          { notes && notes.map((note) => <List\n          key={note.id}\n          id={note.id}\n          title={note.title}\n          content={note.content} \n          deletion ={DeleteNote}\n          />\n          )} \n      <p> className=" w-auto text-center bg-white text-orange-900">\n        {date}/{month}/{year} {hours}:{min}:{sec}:{milsec}</p>\n    </div>\n  )};\n\nexport default Note;';
  const copy305 = (
    <CopyToClipboard text={str305}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str306 =
    'import React, {useState, useEffect} from "react"\n import axios from "axios"\n import  List from "./List"';
  const copy306 = (
    <CopyToClipboard text={str306}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str307 =
    'function Note() {\n    const [notes , setNewNotes] = useState<any[]>([]); \n    const [formNote, setFormNote] = useState({\n          title: "",\n          content: ""\n          })\n    }';
  const copy307 = (
    <CopyToClipboard text={str307}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str308 = "    useEffect(() => {\n      getNotes()\n        } ,[])";
  const copy308 = (
    <CopyToClipboard text={str308}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str309 =
    'function getNotes() {\n  axios({\n      method: "GET",\n      url:"/notes/",\n    }).then((response)=>{ \n      const data = response.data\n      setNewNotes(data) \n    }).catch((error) => {\n      if (error.response) {\n        console.log(error.response); \n        console.log(error.response.status); \n        console.log(error.response.headers); \n        }\n    })}';
  const copy309 = (
    <CopyToClipboard text={str309}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str310 =
    'function createNote(event) {\n    axios({\n      method: "POST",\n      url:"/notes/",\n      data:{ \n        title: formNote.title, \n        content: formNote.content\n       }\n    })\n    .then((response) => {\n      getNotes()\n    })\n\n    setFormNote(({\n      title: "",\n      content: ""}))\n\n    event.preventDefault()\n }';
  const copy310 = (
    <CopyToClipboard text={str310}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str311 =
    'function DeleteNote(id) {\n    axios({\n      method: "DELETE",\n      url:`/notes/${id}/`,\n    })\n    .then((response) => {\n      getNotes()\n    });\n }';
  const copy311 = (
    <CopyToClipboard text={str311}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str312 =
    "function handleChange(event) { \n  const {value, name} = event.target\n  setFormNote(prevNote => ({\n      ...prevNote, [name]: value})\n  )}";
  const copy312 = (
    <CopyToClipboard text={str312}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str313 =
    '  return (\n <div className="">\n\n      <form className="create-note">\n          <input onChange={handleChange}\n          // text={formNote.title}\n          name="title"\n          placeholder="Title"\n          value={formNote.title} />\n          <textarea onChange={handleChange} name="content"\n          placeholder="Take a note..." value={formNote.content} />\n          <button onClick={createNote}>Create Post</button>\n      </form>\n          { notes && notes.map(note => <List\n          key={note.id}\n          id={note.id}\n          title={note.title}\n          content={note.content} \n          deletion ={DeleteNote}\n          />\n          )} \n\n    </div>\n  );';
  const copy313 = (
    <CopyToClipboard text={str313}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str314 =
    'import React from "react";\n\nfunction List(props: any){\n      function handleClick(){\n    props.deletion(props.id) \n  }\n    return (\n        <div className="note">\n          <h1 >  Title: {props.title} </h1>\n          <p > Content: {props.content}</p>\n          <button onClick={handleClick}>Delete</button>\n        </div>\n    ) \n  }\n\n export default List;';
  const copy314 = (
    <CopyToClipboard text={str314}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str315 =
    'import React from "react";\nimport Note from "../notes/Notes";\n\n function HomeScreen() {\n\n  return (\n    <div>\n      <Note />\n\n    </div>\n );\n}\nexport default HomeScreen;';
  const copy315 = (
    <CopyToClipboard text={str315}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str316 = "npm run build";
  const copy316 = (
    <CopyToClipboard text={str316}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str317 = "cd ..";
  const copy317 = (
    <CopyToClipboard text={str317}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str318 = "python manage.py runserver";
  const copy318 = (
    <CopyToClipboard text={str318}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str327 = "npm i -D tailwindcss postcss autoprefixer postcss-cli";
  const copy327 = (
    <CopyToClipboard text={str327}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str328 = "@tailwind base;\n@tailwind components;\n@tailwind utilities;";
  const copy328 = (
    <CopyToClipboard text={str328}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str329 = "npx tailwindcss init --full";
  const copy329 = (
    <CopyToClipboard text={str329}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str330 = "npx tailwindcss init tailwindcss-config.js -p";
  const copy330 = (
    <CopyToClipboard text={str330}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str330b =
    'content: ["./public/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],';
  const copy330b = (
    <CopyToClipboard text={str330b}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str331a =
    '"scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },';
  const str331 =
    '"scripts": {\n    "start": "npm run watch:css && react-scripts start",\n    "build": "npm run watch:css && react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "watch:css": "postcss src/styles/tailwind.css -o src/styles/output.css"\n},';
  const copy331 = (
    <CopyToClipboard text={str331}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str332 = "import './styles/output.css'\nimport './index.css';";
  const copy332 = (
    <CopyToClipboard text={str332}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str333 =
    'import React from "react";\nimport "./styles/output.css";\nimport "./index.css";\n import { Box, Flex } from "rebass";\nimport Note from "./notes/Notes";\n import Wellcome from "./components/Wellcome";\n \n var date = new Date().getDate(); //To get the Current Date. \n var month = new Date().getMonth() + 1; //To get the Current Month. \n var year = new Date().getFullYear(); //To get the Current Year. \n var hours = new Date().getHours();\n var min = new Date().getMinutes();\n var sec = new Date().getSeconds();\n var milsec = new Date().getMilliseconds();\n\n const App = (props: any) => (\n  <Flex\n    sx={{\n      flexDirection: "column",\n      minHeight: "100vh",\n    }}\n  >\n    <Box>\n      <div><p>header</p></div>\n    </Box>\n    <Flex\n      sx={{\n        flex: 1, \n        flexDirection: ["column", "row"],\n      }}\n    >\n      <Box\n        sx={{\n          flex: 1, \n          minWidth: 0, \n        }}\n      >\n        <div className="text-center">\n          <p>\n            {date}/{month}/{year} {hours}:{min}:{sec}:{milsec}{" "}\n          </p>\n        </div>\n        <div><p>main content</p></div>\n        <Note />\n        <Wellcome />\n      </Box>\n      <Box\n        sx={{\n          flexBasis: ["auto", 128], \n          order: -1, \n        }}\n      >\n        <div><p>navigation</p></div>\n      </Box>\n      <Box\n        sx={{\n          flexBasis: ["auto", 128], \n        }}\n      >\n        <div><p>ads</p></div>\n      </Box>\n    </Flex>\n    <Box>\n      <div><p>footer</p></div>\n    </Box>\n  </Flex>\n); \n\n export default App; \n';
  const copy333 = (
    <CopyToClipboard text={str333}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str334 = 'import {BrowserRouter} from "react-router-dom";';
  const copy334 = (
    <CopyToClipboard text={str334}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str335 = "<BrowserRouter>\n    <App />\n  </BrowserRouter>,";
  const copy335 = (
    <CopyToClipboard text={str335}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str336 = "from core.views import front, note, note_detail";
  const copy336 = (
    <CopyToClipboard text={str336}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str337 =
    "from django.contrib import admin\n from django.urls import path\n from core.views import front, note, note_detail\n\n urlpatterns = [\n    path('admin/', admin.site.urls), \n    path('', front, name='front'),\n    path('notes/', note, name='note'),\n    path('notes/<int:pk>/', note_detail, name='detail'),\n]";
  const copy337 = (
    <CopyToClipboard text={str337}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str338 = "python manage.py makemigrations";
  const copy338 = (
    <CopyToClipboard text={str338}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str339 = "python manage.py migrate";
  const copy339 = (
    <CopyToClipboard text={str339}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str340 = "python manage.py runserver";
  const copy340 = (
    <CopyToClipboard text={str340}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str341 =
    '    {\n        "title": "Hello Ace!", \n        "content": "This is a new note." \n    }';
  const copy341 = (
    <CopyToClipboard text={str341}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div id="tutorial3" className="py-5 px-10 text-xl">
      <section id="about">
        <div className="container mx-auto flex p-1 md:flex-row flex-col items-left">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0">
              Page 4 - Notes App 2
            </p>
          </div>
          <div className="text-right">
            <NavLink
              to="/tutor2a"
              className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0"
            >
              Go to Page 5 - Notes: React/Typescript
            </NavLink>
          </div>
        </div>
      </section>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Frontend - Notes App
      </h1>
      <ul className="list-disc">
        <li className="text-b0ld">
          We are going to create a Notes App section of the frontend react
          application.
        </li>
      </ul>
      <ol className="list-decimal">
        <li>Navigate to the frontend application directory.</li>
        <table id="301" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy301}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str301}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          In the src folder, create a notes folder or make sure it had been
          created.
        </li>
        <li>
          Inside the notes folder, create the following files: Notes.tsx and
          List.tsx
        </li>
        <li>
          To make requests to the API endpoints on the Django backend server, we
          will need a JavaScript library called axios. Make sure it is installed
          or install it using npm:
        </li>
        <table id="302" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy302}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str302}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Next, open the package.json file and add the proxy for running the
          Django backend (http://localhost:8000) below the "private": true, line
          so it ends up like
        </li>
        <table id="303" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy303}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str303}
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
        <table id="304" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy304}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str304}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Notes.tsx: Copy and paste the following codes:</li>
        <table id="305" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy305}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str305}
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
          <table id="306" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy306}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str306}
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
          <table id="307" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy307}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str307}
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
          <table id="308" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy308}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str308}
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
          <table id="309" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy309}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str309}
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
          <table id="310" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy310}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str310}
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
          <table id="311" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy311}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str311}
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
          <table id="312" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy312}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str312}
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
          <table id="313" className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy313}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str313}
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
        <table id="314" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy314}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str314}
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
          HomeScreen.tsx: Now let us import the Note function into the
          HomeScreen.tsx file.
        </li>
        <table id="315" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy315}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str315}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Put import React from react; and import HomeScreen from
          ./homescreen/HomeScreen; at the top of App.tsx Then import
          HomeScreen.tsx into App.tsx after the first div tag as &lt;HomeScreen
          /&gt;
        </li>
        <li>
          To test the current state of the application, make sure you are at the
          frontend (cd project1/frontend) and run:
        </li>
        <table id="316" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy316}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str316}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          then return to the project1 directory that contains the manage.py file
        </li>
        <table id="317" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy317}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str317}
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
        <table id="318" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy318}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str318}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>npm i -D tailwindcss postcss autoprefixer postcss-cli</li>
        <table id="327" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy327}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str327}
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
        <table id="329" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy329}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str329}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="330" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy330}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str330}
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
        <table id="330b" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy330b}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str330b}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Update the Following Lines in package.json with the code below:</li>
        <pre>{str331a}</pre>
        <table id="331" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy331}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str331}
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
        <table id="328" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy328}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str328}
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
        <table id="332" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy332}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str332}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
      </ol>
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
        <table id="333" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy333}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str333}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          BrowserRouter keeps the UI in sync with the URL using the HTML5
          history API. In index.tsx, insert the following:
        </li>
        <table id="334" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy334}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str334}
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
        <table id="335" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy335}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str335}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Continuation</li>
        <table id="336" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy336}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str336}
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
        <table id="337" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy337}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str337}
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
        <table id="338" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy338}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str338}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="339" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy339}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str339}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>and then we run the application with</li>
        <table id="340" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy340}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str340}
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
        <table id="341" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy341}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str341}
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

export default Tutorial3;
