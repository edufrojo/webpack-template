# webpack-template

Project "webpack-template"

[![Build Status](https://travis-ci.org/edufrojo/webpack-template.svg?branch=master)](https://travis-ci.org/edufrojo/webpack-template)
[![dependencies Status](https://david-dm.org/edufrojo/webpack-template/status.svg)](https://david-dm.org/edufrojo/webpack-template)
[![devDependencies Status](https://david-dm.org/edufrojo/webpack-template/dev-status.svg)](https://david-dm.org/edufrojo/webpack-template?type=dev)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/edufrojo/webpack-template/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/edufrojo/webpack-template/?branch=master)
[![HitCount](http://hits.dwyl.io/edufrojo/webpack-template.svg)](http://hits.dwyl.io/edufrojo/webpack-template)
[![GitHub license](https://img.shields.io/github/license/edufrojo/webpack-template.svg)](https://github.com/edufrojo/webpack-template/blob/master/LICENSE)

## Despliegue con Docker

Descargar repositorio:

```sh
git clone https://github.com/edufrojo/webpack-template.git
```

Crear imagen:

```sh
docker build -t webpack-template .
```

Crear contenedor:

```sh
docker run -d -p 8080:8080 --name webpack webpack-template
```

Acceder a través del navegador a `localhost:8080`