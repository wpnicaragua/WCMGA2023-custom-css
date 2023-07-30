# WCMGA2023-Custom-CSS
Custom CSS for the WCMGA 2023 web site

## Guia de personalizacion

### Requerimientos

* tener instalado GIT
* tener instalado Node (npm)
* Google crhome como Browser
* sublime text como editor de codigo
* instalar emmet livestyle http://livestyle.io/ 
* acceso al website del WordCamp
* acceso al repositorio

### Generalidaes
WordCamp central nos brinda una instancia de WordPress una vez autorizado el WordCamp. Sin embargo esta instancia no nos permite realizar modificaciones a los archivos de la instalacion ni del theme. Para realizar personalizacion en el sitio se nos brinda la herramienta **Remote CSS** con la cual enlazamos un repositorio de github que reemplaze el css por defecto del tema instaldo.

### configurar Remote CSS
* en github
1. ir a la pagina de configuracion del respositorio.
2. click en Webhooks.
3. Add bhooks
4. en Payload URL ingresar: https://managua.wordcamp.org/2023/wp-admin/admin-ajax.php?action=wcrcss_webhook 
5. los demas valores los podemos dejar por defecto

* en el dashboard de WordPress
1. dentro del dashoard, en **appareance** click en **Remote CSS**.
2. en Remote CSS URL ingresamos lar ruta de la hoja de estilos ya compilada guardada en github: https://api.github.com/repos/wpnicaragua/WCMGA2023-custom-css/contents/style.css
3. en Output Mode dejamos la opcion Replace para que la hoja de estilos del theme sea reemplazada por la nuestra. nota: la primera opcion hara que nuestra hoja de estilos solo sea agreada a la hoja de estilos del theme.
4. click en update.

### empezar a personalizar los estilos.
* en la terminal
1. clonar el repositorio del website https://github.com/wpnicaragua/WCMGA2023-custom-css.git
`git clone [path/to/repositorie]`

2. ir al directorio descargado.
`cd [nombre del directorio]`

3. ejecutar la instalacion de package.json 
`npm install`

4. correr gulp
`gulp watch`


* en el editor de codigo (sublime text)
1. abrir el archivo de estilos compilado (style.css)
2. trabajar los estilos desde los archivs sass.
3. cualquier archivo sass agregado importarlo desde style.scss

* en el dashboard de WordPress / navegador web
1. crear las paginas que se utilizaran
2. pucblicarlas o hacer preview de cualquiera de las paginas que se quiera personalizar.
3. abrir el inspector de codigo
4. click en el logo de livestyle en el avegador
5. hacer click en **on**
6. click en **add stylesheet** y seleccionar style.css

nota: todos los cambios que realizemos en el editor de codigo al correr gulp se compilaran en el archivo style.css
este esta sido escuchado por la extension emmet livestyle instalada en el navegador. y al realizar dichos cambios estos se mostraran en el navegador. se podra notar un delay y tambien al eliminar bloques de codigo es posible que no se muestren correctamente, por lo que se recomienda que los elementos que se vayan a borrar se les aplique un `display: none`

* nuevamente en la terminal
1. hacer commit local de los cambios.
2. crear una rama propia 
`git checkout -b [nombre]`
3. hacer push en la rama
`git push origin [nombre]`

https://projects.invisionapp.com/share/2PQ3TD9Z9FM#/342325813_landing_Page