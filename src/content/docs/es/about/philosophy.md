---
title: Filosofía de Tauri
i18nReady: true
---

Tauri es un conjunto de herramientas que ayuda a los desarrolladores a crear aplicaciones para las principales plataformas de escritorio, utilizando prácticamente cualquier framework frontend existente. El núcleo está construido con Rust, y la CLI aprovecha Node.js haciendo de Tauri un enfoque genuinamente polifacético para crear y mantener grandes aplicaciones.

<iframe
    style="width: 100%; aspect-ratio: 16/9;"
    src="https://www.youtube-nocookie.com/embed/UxTJeEbZX-0?si=mwQUzXb6mmCg7aom"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>

## Seguridad Ante Todo

En el mundo actual, todo modelo honesto de amenaza asume que el dispositivo del usuario ya ha sido comprometido. Esto pone a los desarrolladores de aplicaciones en una situación complicada, porque si el dispositivo ya está en peligro, ¿cómo se puede confiar en el software?

Una defensa en profundidad es el enfoque que hemos adoptado. Queremos que seas capaz de tomar todas las precauciones posibles para minimizar la superficie que presentas a los atacantes. Tauri te permite elegir qué puntos finales de API enviar, si quieres o no un servidor localhost integrado en tu aplicación, e incluso aleatoriza los manejadores funcionales en tiempo de ejecución. Estas y otras técnicas forman una línea de base segura que te capacita a ti y a tus usuarios.

Ralentizar a los atacantes dificultando enormemente los ataques estáticos y aislando los sistemas entre sí es el nombre del juego. Y si vienes del ecosistema Electron, puedes estar tranquilo: por defecto, Tauri solo distribuye binarios, no archivos ASAR.

Al elegir construir Tauri con la seguridad como fuerza guía, te damos todas las oportunidades para adoptar una postura de seguridad proactiva.

## Políformismos, no Silos

La mayoría de frameworks contemporáneos utilizan un único paradigma lingüístico y, por tanto, están atrapados en una burbuja de conocimientos e idiomas. Esto puede funcionar bien para determinadas aplicaciones de nicho, pero también fomenta una especie de tribalismo.

Esto puede verse en la forma en que las comunidades de desarrollo de React, Angular y Vue se apiñan en sus pilas, generando en última instancia muy poca polinización cruzada.

Esta misma situación puede observarse en los campos de batalla Rust vs. Node vs. C++, donde los partidarios de la línea dura adoptan sus posturas y se niegan a colaborar entre comunidades.

Hoy en día, Tauri utiliza Rust para el backend - pero en un futuro no muy lejano, otros backends como Go, Nim, Python, Csharp, etc. serán posibles. Esto se debe a que estamos manteniendo los enlaces oficiales de Rust a la organización [webview](https://github.com/webview) y planeamos permitirte cambiar el backend según tus necesidades. Dado que nuestra API puede implementarse en cualquier lenguaje con interoperabilidad con C, la conformidad total está sólo a un PR de distancia.

## Código Abierto Honesto

Nada de esto tendría sentido sin una comunidad. Hoy en día, las comunidades de software son lugares increíbles donde la gente se ayuda mutuamente y hace cosas increíbles.

El código abierto significa cosas distintas para cada persona, pero la mayoría estará de acuerdo en que sirve para apoyar la libertad. Cuando el software no respeta tus derechos, puede parecer injusto y comprometer potencialmente tus libertades al funcionar de forma poco ética.

Por eso estamos orgullosos de que los defensores del FLOSS puedan crear aplicaciones con Tauri que sean "certificablemente" de código abierto y puedan incluirse en distribuciones GNU/Linux respaldadas por la FSF.

## El Futuro

El futuro de Tauri depende de tu implicación y tus contribuciones. Pruébalo, presenta problemas, únete a un grupo de trabajo o haz una donación - cada contribución es importante. En cualquier caso, no dudes en ponerte en contacto con nosotros.
