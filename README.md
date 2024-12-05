[YouTube Link](https://www.youtube.com/watch?v=xldTxXtNiuk&ab_channel=PedroTech)[GitHub](https://github.com/machadop1407/react-django-tutorial)
[]()

manipulate data related to books

Front-end: react
1.  check the basic installation
```bash
python --version
yarn --version
npm --version
```
2. create virtual environmnt and avtivate it 
```bash
python -m venv env
env\Scripts\activate.bat
```
3. create the requirement.txt file, and install required libraries, if needed
```bash
pip install -r requirements.txt
```
4. start first vite project
```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app (--template react)

# pnpm
pnpm create vite my-vue-app --template vue

# Bun
bun create vite my-vue-app --template vue
```

5 go to the generated directory and install the vite packages as required  
```bash
cd frontend
yarn
yarn dev
```
the website is Local:   http://localhost:5173/


Back-end： Django
1.  check the installatin of python,pip, install restframework
```bash
pip install django djandorestframework
```
2. 
Start a Django project
```bash
django-admin startproject project_name
```
3. after the get and post action in backend, make some actions in frontend to make interaction