# Cliente React

Este pequeño proyecto es un CRUD que consume una API construida con Java utilizando Spring Boot, se encarga de leer, crear, editar y eliminar tarjetas con información de ejercicios.

## 🚀 Tecnologías

- **React 18.2.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 5.0.8** - Herramienta de compilación rápida para desarrollo frontend
- **React Router v6** - Enrutamiento para aplicaciones React
- **Bootstrap 5** - Framework CSS para diseño responsive

## 📦 Instalación

```bash
npm install
```

## 🛠️ Comandos disponibles

### Modo desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:3000`

### Compilar para producción
```bash
npm run build
```
Genera los archivos optimizados en la carpeta `dist/`

### Vista previa de producción
```bash
npm run preview
```
Previsualiza la compilación de producción localmente

## Listando ejercicios

![listando](https://github.com/LuisEGM/React-ListarCards-Ejercicios-ConsAPI/blob/master/src/imagenes/screen1.PNG)

## Agregando ejercicios

![listando](https://github.com/LuisEGM/React-ListarCards-Ejercicios-ConsAPI/blob/master/src/imagenes/screen2.png)

## 📝 Notas

- El proyecto ha sido migrado de Create React App a Vite para mejor rendimiento
- La API backend debe estar ejecutándose en `http://localhost:8080` para que el CRUD funcione correctamente
