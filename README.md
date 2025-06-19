Dig Marketing - Formulario de Registro con Diseño Split y Tests Cypress
Este proyecto implementa un formulario de registro de usuario con un diseño moderno "split" (dividido), validaciones completas del lado del cliente y pruebas automatizadas con Cypress. El sistema presenta una experiencia visual atractiva con animaciones y efectos, mientras mantiene todas las funcionalidades de validación requeridas para el registro de clientes de servicios de marketing digital.
Demostración
Show Image
Características
Diseño Split Moderno

Diseño de dos paneles: Panel izquierdo para el formulario y panel derecho para imagen y testimonial
Paleta de colores corporativa: Tonos profesionales que reflejan la seriedad y confianza en servicios de marketing digital
Iconografía integrada: Iconos visuales para cada campo del formulario
Animaciones sutiles: Efectos de transición y hover para mejorar la experiencia
Adaptabilidad: Diseño responsive para diferentes tamaños de pantalla

Formulario de Registro de Clientes

Campos obligatorios:

Nombre completo
Correo electrónico (con validación de formato)
Contraseña (con requisitos de seguridad)
Confirmación de contraseña
Aceptación de términos y condiciones


Campos opcionales:

Fecha de nacimiento


Validaciones en tiempo real:

Efectos visuales de enfoque en los campos
Errores específicos para cada tipo de validación
Habilitación/deshabilitación automática del botón de envío
Verificación de coincidencia de contraseñas



Página de Confirmación de Registro

Animación de verificación exitosa
Mensaje de bienvenida personalizado al nuevo cliente
Tarjeta informativa con iconos descriptivos
Resumen de la información registrada (sin mostrar la contraseña)
Sección de "Próximos pasos" para guiar al cliente en su proceso de onboarding
Botones de acción para navegar hacia los servicios de marketing digital

Tests Automatizados con Cypress

Validación de carga correcta del formulario
Verificación de campos obligatorios
Pruebas de formato y validación de correo electrónico
Verificación de requisitos de seguridad de contraseña
Pruebas de flujo completo de registro
Validación de la navegación a la página de confirmación

Estructura del Proyecto
├── registro.html       # Página principal con el formulario de registro de clientes
├── confirmacion.html   # Página de confirmación tras registro exitoso
├── styles.css          # Estilos CSS avanzados con efectos visuales
├── script.js           # Lógica JavaScript con efectos de interacción
├── cypress/            # Directorio de pruebas Cypress
│   └── e2e/            # Tests end-to-end
│       └── form.cy.js  # Tests del formulario de registro
├── cypress.config.js   # Configuración de Cypress
└── package.json        # Dependencias del proyecto
Requisitos Técnicos
Validaciones Implementadas

Campos obligatorios: No pueden estar vacíos
Correo electrónico: Debe tener un formato válido (validado con regex)
Contraseña: Mínimo 8 caracteres, al menos una letra mayúscula, una minúscula y un número
Confirmación de contraseña: Debe coincidir con la contraseña
Términos y condiciones: Debe estar marcado para poder enviar el formulario

Efectos de Interacción Usuario

Transiciones suaves al enfocar campos
Animación de aparición en los mensajes de error
Iconos que cambian de color al interactuar con los campos
Efectos hover en botones y enlaces
Checkbox personalizado con animación

Instalación y Ejecución

Clonar el repositorio:
bashgit clone <url-del-repositorio>
cd <nombre-del-directorio>

Instalar dependencias:
bashnpm install

Ejecutar servidor local:
bash# Usando XAMPP:
# 1. Inicia Apache desde el panel de control de XAMPP
# 2. Coloca los archivos del proyecto en la carpeta htdocs de XAMPP
# 3. Accede desde el navegador a: http://localhost/[nombre-carpeta]/registro.html

Ejecutar pruebas de Cypress:
bash# Abrir la interfaz de Cypress
npx cypress open

# O ejecutar tests en modo headless
npx cypress run


Características Técnicas Avanzadas
CSS Avanzado

Variables CSS: Sistema de colores y valores consistente
Flexbox: Alineación avanzada de elementos
Transiciones: Efectos suaves para mejorar la experiencia
Media queries: Soporte responsivo para diferentes dispositivos
Pseudo-elementos: Efectos visuales personalizados como checkmark en checkbox

JavaScript Mejorado

Efectos visuales dinámicos: Cambios de color en iconos al enfocar
Animaciones de error: Transiciones suaves para mensajes de error
Gestión de estados visuales: Manipulación dinámica de clases y estilos
Validación en tiempo real: Feedback inmediato al usuario

Diseño de Página de Confirmación
La página de confirmación presenta varias mejoras orientadas al cliente de marketing digital:

Animación de éxito: Una animación CSS personalizada muestra una marca de verificación
Información estructurada: Diseño de tarjeta con secciones bien definidas
Iconografía informativa: Cada dato tiene un icono asociado para mejor comprensión
Guía de próximos pasos: Lista clara de acciones sugeridas para comenzar con los servicios de marketing
Botones de acción destacados: Diseño de botones que invita a conocer los servicios disponibles

Contexto del Proyecto
Dig Marketing es una empresa especializada en ofrecer servicios de marketing digital a otras empresas. Este formulario de registro está diseñado para facilitar el proceso de onboarding de nuevos clientes empresariales que buscan mejorar su presencia digital y estrategias de marketing.
Servicios que ofrece Dig Marketing:

Marketing Digital Integral: Estrategias completas de presencia online
Gestión de Redes Sociales: Administración profesional de perfiles corporativos
SEO y SEM: Optimización para motores de búsqueda y publicidad digital
Email Marketing: Campañas automatizadas de correo electrónico
Analítica Digital: Informes detallados y análisis de rendimiento
Desarrollo de Contenido: Creación de contenido atractivo y efectivo

Criterios Cumplidos
Este proyecto fue desarrollado siguiendo estos criterios:

Funcionalidad (40%)

Implementación robusta del formulario con validaciones completas
Navegación intuitiva entre páginas
Experiencia de registro completa y guiada para futuros clientes


Pruebas (40%)

Tests Cypress que verifican exhaustivamente todas las funcionalidades
Mantenimiento de selectores consistentes para compatibilidad de pruebas
Cobertura de casos de éxito y manejo de errores


Diseño y Experiencia de Usuario (10%)

Interfaz moderna con diseño split innovador
Efectos visuales que mejoran la experiencia sin entorpecer la usabilidad
Sistema visual coherente con identidad corporativa profesional


Código y Documentación (10%)

Estructura de código organizada y mantenible
Comentarios explicativos en las secciones complejas
Documentación completa de características e instalación



Próximas Mejoras

Integración con CRM para gestión automática de leads
Dashboard de cliente para seguimiento de campañas
Sistema de notificaciones para actualizaciones de proyectos
Formularios adicionales para solicitudes de presupuesto personalizadas
