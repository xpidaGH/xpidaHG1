import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Tutorial() {
  const str001 = "mkdir React-Django";
  const copy001 = (
    <CopyToClipboard text={str001}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str002 = "cd React-Django";
  const copy002 = (
    <CopyToClipboard text={str002}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str003 = "python3 -m venv env";
  const copy003 = (
    <CopyToClipboard text={str003}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str004 = "py -m venv env";
  const copy004 = (
    <CopyToClipboard text={str004}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str005 = "source env/bin/activate";
  const copy005 = (
    <CopyToClipboard text={str005}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str006 = "./env/Scripts/activate";
  const copy006 = (
    <CopyToClipboard text={str006}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str007 = "pip install django";
  const copy007 = (
    <CopyToClipboard text={str007}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str008 = "django-admin startproject project1";
  const copy008 = (
    <CopyToClipboard text={str008}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str009 = "cd project1";
  const copy009 = (
    <CopyToClipboard text={str009}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str010 = "python manage.py migrate";
  const copy010 = (
    <CopyToClipboard text={str010}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str011 = "python manage.py runserver";
  const copy011 = (
    <CopyToClipboard text={str011}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str012 = "npx create-react-app frontend --template typescript";
  const copy012 = (
    <CopyToClipboard text={str012}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str013 = "yarn create react-app frontend --template typescript";
  const copy013 = (
    <CopyToClipboard text={str013}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str014 = "cd frontend";
  const copy014 = (
    <CopyToClipboard text={str014}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str015 = "npm start";
  const copy015 = (
    <CopyToClipboard text={str015}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str016 = "npm run build";
  const copy016 = (
    <CopyToClipboard text={str016}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str017 = "cd ..";
  const copy017 = (
    <CopyToClipboard text={str017}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str018 = "import os";
  const copy018 = (
    <CopyToClipboard text={str018}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str019 =
    "TEMPLATES = [\n    {\n        'BACKEND': 'django.template.backends.django.DjangoTemplates', \n        'DIRS': [os.path.join(BASE_DIR, 'frontend', 'build')], \n        'APP_DIRS': True, \n        'OPTIONS': {\n            'context_processors': [\n                'django.template.context_processors.debug', \n                'django.template.context_processors.request', \n                'django.contrib.auth.context_processors.auth', \n                'django.contrib.messages.context_processors.messages', \n            ], \n        },\n    },\n]";
  const copy019 = (
    <CopyToClipboard text={str019}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str020 =
    "STATICFILES_DIRS = [os.path.join(BASE_DIR, 'frontend', 'build', 'static')]";
  const copy020 = (
    <CopyToClipboard text={str020}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str021 = "python manage.py startapp core";
  const copy021 = (
    <CopyToClipboard text={str021}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str022 =
    "def front(request): \n    context = { }\n    return render(request, 'index.html', context)";
  const copy022 = (
    <CopyToClipboard text={str022}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str023 =
    "from django.contrib import admin\nfrom django.urls import path\nfrom core.views import front\n\nurlpatterns = [\n    path('admin/', admin.site.urls), \n    path('', front, name='front'),";
  const copy023 = (
    <CopyToClipboard text={str023}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str024 = "python manage.py runserver";
  const copy024 = (
    <CopyToClipboard text={str024}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str025 = "cd React-Django/project1";
  const copy025 = (
    <CopyToClipboard text={str025}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str026 = "pip install djangorestframework";
  const copy026 = (
    <CopyToClipboard text={str026}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str027 =
    "INSTALLED_APPS = [\n    'django.contrib.admin', \n    'django.contrib.auth', \n    'django.contrib.contenttypes', \n    'django.contrib.sessions', \n    'django.contrib.messages', \n    'django.contrib.staticfiles', \n \n    'core', \n    'rest_framework', \n]";
  const copy027 = (
    <CopyToClipboard text={str027}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str028 =
    "class Notes(models.Model): \n    title = models.CharField(max_length=60) \n    content = models.CharField(max_length=120) \n\n    def __str__(self): \n        return self.title";
  const copy028 = (
    <CopyToClipboard text={str028}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str029 =
    "from rest_framework import serializers\n from .models import Notes\n\n class NoteSerializer(serializers.ModelSerializer): \n    class Meta: \n        model = Notes\n        fields = ('id', 'title', 'content')";
  const copy029 = (
    <CopyToClipboard text={str029}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str030 = "fields = '__all__'";
  const copy030 = (
    <CopyToClipboard text={str030}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str031 =
    "from rest_framework.decorators import api_view\n from rest_framework.response import Response\n from rest_framework import status\n from .serializers import NoteSerializer\n from .models import Notes";
  const copy031 = (
    <CopyToClipboard text={str031}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str032 =
    "@api_view(['GET', 'POST']) \n def note(request): \n\n    if request.method == 'GET': \n        note = Notes.objects.all()\n        serializer = NoteSerializer(note, many=True) \n        return Response(serializer.data) \n\n    elif request.method == 'POST': \n        serializer = NoteSerializer(data=request.data) \n        if serializer.is_valid():\n            serializer.save()\n            return Response(status=status.HTTP_201_CREATED) \n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)";
  const copy032 = (
    <CopyToClipboard text={str032}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str033 =
    "@api_view(['DELETE']) \n def note_detail(request, pk): \n    try: \n        note = Notes.objects.get(pk=pk) \n    except Notes.DoesNotExist: \n        return Response(status=status.HTTP_404_NOT_FOUND) \n\n    if request.method == 'DELETE': \n        note.delete()\n        return Response(status=status.HTTP_204_NO_CONTENT)";
  const copy033 = (
    <CopyToClipboard text={str033}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str034 =
    "from django.shortcuts import render\n from rest_framework.decorators import api_view\n from rest_framework.response import Response\n from rest_framework import status\n from .serializers import NoteSerializer\n from .models import Notes\n # Create your views here. \n\n def front(request): \n    context = {\n        }\n\n    return render(request, 'index.html', context) \n\n @api_view(['GET', 'POST']) \n def note(request): \n\n    if request.method == 'GET': \n        note = Notes.objects.all()\n        serializer = NoteSerializer(note, many=True) \n        return Response(serializer.data) \n\n    elif request.method == 'POST': \n        serializer = NoteSerializer(data=request.data) \n        if serializer.is_valid():\n            serializer.save()\n            return Response(status=status.HTTP_201_CREATED) \n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) \n\n @api_view(['DELETE']) \n def note_detail(request, pk): \n    try: \n        note = Notes.objects.get(pk=pk) \n    except Notes.DoesNotExist: \n        return Response(status=status.HTTP_404_NOT_FOUND) \n\n    if request.method == 'DELETE': \n        note.delete()\n        return Response(status=status.HTTP_204_NO_CONTENT)";
  const copy034 = (
    <CopyToClipboard text={str034}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str035 = "from core.views import front, note, note_detail";
  const copy035 = (
    <CopyToClipboard text={str035}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str036 =
    '    path("notes/", note, name="note"),\n    path("notes/<int:pk>/", note_detail, name="detail"),';
  const copy036 = (
    <CopyToClipboard text={str036}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str037 =
    "from django.contrib import admin\n from django.urls import path\n from core.views import front, note, note_detail\n\n urlpatterns = [\n    path('admin/', admin.site.urls), \n    path('', front, name='front'),\n    path('notes/', note, name='note'),\n    path('notes/<int:pk>/', note_detail, name='detail'),\n]";
  const copy037 = (
    <CopyToClipboard text={str037}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str038 = "python manage.py makemigrations";
  const copy038 = (
    <CopyToClipboard text={str038}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str039 = "python manage.py migrate";
  const copy039 = (
    <CopyToClipboard text={str039}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str040 = "python manage.py runserver";
  const copy040 = (
    <CopyToClipboard text={str040}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str041 =
    '    {\n        "title": "Hello Ace!", \n        "content": "This is a new note." \n    }';
  const copy041 = (
    <CopyToClipboard text={str041}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div id="tutorial" className="py-5 px-10 text-xl">
      <section id="about">
        <div className="container mx-auto flex p-1 md:flex-row flex-col items-left">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0">
              Page 1 - Getting Started 1
            </p>
          </div>
          <div className="text-right">
            <NavLink
              to="/Tutorial1"
              className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0"
            >
              Go to Page 2 - Notes App 1
            </NavLink>
          </div>
        </div>
      </section>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Introduction
      </h1>
      <ul className="list-disc">
        <li className="text-b0ld">
          The internet has leveled the playing field in business and anyone with
          a computer can start a money-making online business. You can also live
          anywhere you want, operate from any location (e.g. home/hostel), set
          your own time-table, and work as little or as much as you want,
          depending on how big you want your business to be. However, a website
          or blog is vital for such online business.
        </li>
        <li className="text-b0ld">
          We are offering these tutorials to introduce beginners (pupils,
          students, teachers, hobbyists, and other professionals) to the world
          of computer programming, including website design and programming of
          different devices - PCs, Macs, mobile phones, palmtop computers etc.
          The aim is to introduce people and students who have no programming
          and website design experience to:
        </li>
        <ol className="list-decimal">
          <li>Take up posts in organizations that use a lot of IT.</li>
          <li>
            Prepare students for a future career in IT and participate in
            programming/website design competitions.
          </li>
        </ol>
        <li className="text-b0ld">
          With the website tutorials, you should be able to produce an excellent
          website for your school, church, business, or simply for your own
          personal website. If you:
        </li>
        <ol className="list-decimal">
          <li>have trouble understanding something</li>
          <li>would like to see additional information on a topic</li>
          <li>feel something we have written is in error</li>
          <li>know of a useful link to supplement a topic</li>
          <li>would like to see a specific lesson added to our lessons</li>
        </ol>
        <li className="text-b0ld">
          then please send me an e-mail at{" "}
          <a className="bg-teal-100 text-blue-900" href="tuffuornana@gmail.com">
            tuffuornana@gmail.com
          </a>
        </li>
      </ul>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Creating a Website using Django/React/Typescript/TailwindCSS
      </h1>
      <ul className="list-disc">
        <li className="text-b0ld">
          Initial functionalities include a Notes, Portfolio, and E-Commerce
          applications.
        </li>
      </ul>
      <ul className="list-disc">
        <li className="text-b0ld">Prerequisites</li>
      </ul>
      <table className="border-separate border border-lime-400 ...">
        <thead>
          <tr>
            <th className="border border-lime-300 ...">
              Technologies/Installations
            </th>
            <th className="border border-lime-300 ...">Homepage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-lime-300 ...">
              Install Visual Studio Code
            </td>
            <td className="border border-lime-300 ...">
              code.visualstudio.com
            </td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Install Python - verify with python --version and pip --version
            </td>
            <td className="border border-lime-300 ...">Python.org</td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Install Node.js - verify version Node &gt;= 10.16 and npm &gt;=
              5.6
            </td>
            <td className="border border-lime-300 ...">Nodejs.org</td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Install Git on your computer
            </td>
            <td className="border border-lime-300 ...">git-scm.com</td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Sign Up/In to a free GitHub account
            </td>
            <td className="border border-lime-300 ...">github.com</td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Sign Up/In to a free Netlify account
            </td>
            <td className="border border-lime-300 ...">netlify.com</td>
          </tr>
        </tbody>
      </table>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Setting up the Django backend
      </h1>
      <ol className="list-decimal">
        <li>
          Open the Command Line on Windows, Terminal on Mac, and Linux and
          navigate to the directory where you want to store the project and
          create a new directory:
        </li>
        <table id="001" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy001}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str001}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Move into the new directory with:</li>
        <table id="002" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy002}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str002}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Open the React-Django folder in VS Code (e.g. Launch VS Code --&gt;
          File --&gt; Open Folder... )
        </li>
        <li>Create a Virtual environment:</li>
        <ul className="list-disc">
          <li>For mac/unix users:</li>
        </ul>
        <table id="003" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy003}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str003}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>For windows users:</li>
        </ul>
        <table id="004" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy004}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str004}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>After creating the environment, activate it by running :</li>
        <ul className="list-disc">
          <li>For mac/unix users:</li>
        </ul>
        <table id="005" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy005}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str005}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>For windows users:</li>
        </ul>
        <table id="006" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy006}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str006}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            You can deactivate it by simply running the command:{" "}
            <code>deactivate</code>, but you don't have to deactivate it yet.
          </li>
        </ul>
        <li>Install Django with:</li>
        <table id="007" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy007}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str007}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Create a new Django project and name it <code>project1</code>:
        </li>
        <table id="008" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy008}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str008}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Move into the project directory with:</li>
        <table id="009" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy009}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str009}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Migrate your “changes” with this command:</li>
        <table id="010" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy010}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str010}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Then start the development server to ensure that everything is working
          properly with:
        </li>
        <table id="011" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy011}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str011}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Copy this URL: http://127.0.0.1:8000 and open it in any browser of
          your choice. You should be able to see the Django Wellcome page.
        </li>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Setting up the react frontend
      </h1>
      <ol className="list-decimal">
        <li>
          Next, create the frontend react application in the current directory{" "}
          <code>project1</code> that contains the <code>manage.py</code> file
          with:
        </li>
        <table id="012" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy012}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str012}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>or:</li>
        </ul>
        <table id="013" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy013}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str013}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Move into the frontend directory with:</li>
        <table id="014" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy014}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str014}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Start the frontend application by running:</li>
        <table id="015" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy015}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str015}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li className="text-b0ld">
            You should see the default react application page in your browser
            now; if you cannot see it open this link http://localhost:3000 in
            your browser.
          </li>
        </ul>
        <li>
          Build the package which the backend will make use of by running:
        </li>
        <table id="016" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy016}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str016}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Remove <code>/build</code> from the gitignore file since the backend
          would need to make use of the <code>templates</code> and{" "}
          <code>staticfiles</code> in the build folder. Now let's head to the
          backend setup and connect it to the react application we just created.
        </li>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Interfacing the front end application to the Django backend.
      </h1>
      <ol className="list-decimal">
        <li>Move back into the root folder:</li>
        <table id="017" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy017}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str017}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Make some changes to the <code>settings.py</code> file in the backend
          project file so that the Django backend can recognize the react
          application we created as the default frontend directory. Open up the{" "}
          <code>settings.py</code> file and make the following changes:
        </li>
        <ul className="list-disc">
          <li>Import 'os' at the top of the file</li>
        </ul>
        <table id="018" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy018}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str018}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            then configure the template directory by pointing it towards the
            build folder in our frontend react directory
          </li>
        </ul>
        <table id="019" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy019}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str019}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We need to configure the static files directory as well; add this line
          to the bottom of the page below the STATIC_URL line.
        </li>
        <table id="020" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy020}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str020}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Create a simple view (app) called <code>core</code> that will display
          our default react page.
        </li>
        <table id="021" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy021}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str021}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Add the new app "core" to the "INSTALLED APPS" section in your
          settings.py file.
        </li>
        <li>
          Open the views.py file and create a simple function-based view that
          just renders our page.
        </li>
        <table id="022" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy022}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str022}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Then we map the created view to a URL in our urls.py file in the
          project1 folder. We import the "front" view function from the core app
          and we map it to the default URL " ".
        </li>
        <table id="023" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy023}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str023}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Run the server</li>
        <table id="024" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy024}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str024}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <SyntaxHighLighter language="javascript" style={dracula}>
          {"python manage.py runserver"}
        </SyntaxHighLighter>
        <li>Reload the page in your browser and observe the following:</li>
        <ul className="list-disc">
          <li>
            You see the <code>REACT</code> page we saw earlier but the URL is
            now http://127.0.0.1:8000.
          </li>
        </ul>
        <ul className="list-disc">
          <li>
            We have successfully connected our Django backend to a react
            frontend.
          </li>
        </ul>
        <ul className="list-disc">
          <li>
            You will need the Django REST framework to create the APIs the react
            frontend application will make use of to get backend data.
          </li>
        </ul>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Building a REST API with Django REST Framework
      </h1>
      <ol className="list-decimal">
        <li>
          To Create Api endpoints, you should still be in the project1
          directory. If not, navigate to the directory.
        </li>
        <table id="025" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy025}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str025}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Please ensure you are in the folder with the manage.py file. and
          install Django REST framework - a powerful and flexible toolkit for
          building Web APIs
        </li>
        <table id="026" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy026}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str026}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Register it under the installed apps section in the settings.py file.
          The INSTALLED_APPS section in your settings.py file should look like
          this:
        </li>
        <table id="027" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy027}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str027}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Then we create the models in the models.py file inside the app
          directory core
        </li>
        <table id="028" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy028}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str028}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Create a new file serializers.py inside the app directory "core". This
          will contain the serializer that will be responsible for converting
          the model into data types understandable by javascript and the react
          framework.
        </li>
        <table id="029" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy029}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str029}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            Here we import the serializers class from the installed Django REST
            framework package and also the Notes model created earlier. Then we
            declare the fields of the model that we want to have their data
            converted. If you have a model with several fields and you want to
            serialize all; you can simply add the line below in place of the
            fields line above.
          </li>
        </ul>
        <table id="030" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy030}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str030}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Finally, to complete the backend setup, we need to update the views.py
          file. Add these import lines to the top of the file.
        </li>
        <table id="031" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy031}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str031}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We'll make use of function-based views with the api_view decorator.
          This will allow us to declare the method type. By default only the GET
          method is allowed so we have to specify the POST and DELETE methods
          that we need. Directly below the previous front view, we'll create the
          note view with the api_view decorator. This view will handle the GET
          and POST methods so we have to add it to the decorator as well.
        </li>
        <table id="032" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy032}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str032}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          What we are doing here is to check for the type of request method and
          if it is a get request method we query the database to retrieve all
          the available notes and then we serialize the data received from the
          database. The many=True flag is being used here because we are getting
          a list of objects from the database and not just an object instance.
          Then we return the serialized data to the frontend for display.
        </ul>
        <ul className="list-disc">
          However, if the request method is a post method; we deserialize the
          data submitted from the front end and we check to see if all the data
          is valid with is_valid method before accessing and storing the data in
          the database. We then return a successful status message to the
          frontend without any data. You'll see the reason for this when we
          start working on the front end.
        </ul>
        <li>
          Next, we create the note_detail view. This view will handle the DELETE
          method so we will include it in the api_view decorator.
        </li>
        <table id="033" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy033}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str033}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          Here we are passing primary key field(pk) together with the request to
          the note_detail function as we need to add the primary key to the
          database query so we can get the particular note to be deleted. Once
          the note with the specified primary key has been retrieved
          successfully we check for the method type; if it is DELETE, that
          particular note is deleted from the database. We have finished
          creating the views, if you followed all the steps above your views.py
          file should look like this:
        </ul>
        <table id="034" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy034}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str034}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We need to import the new view functions from the core app into the
          urls.py file. We will just add new lines to the existing ones.
        </li>
        <table id="035" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy035}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str035}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>and then map them to various urls.</li>
        <table id="036" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy036}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str036}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">Your urls.py file should look like this </ul>
        <table id="037" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy037}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str037}
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
        <table id="038" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy038}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str038}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="039" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy039}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str039}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>and then we run the application with</li>
        <table id="040" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy040}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str040}
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
        <table id="041" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy041}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str041}
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
        <a className="bg-teal-300 rounded" href="#tutorial">
          Go to Top
        </a>
      </div>
    </div>
  );
}

export default Tutorial;
