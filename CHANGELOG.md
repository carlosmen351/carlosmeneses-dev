# Changelog

Los cambios se agrupan por version semantica. La fecha indica la ultima modificacion documentada; los hashes identifican commits del historial.

## [2.0.0] - 2026-10-01

Version base: `v1.2.0`. Release mayor solicitada; el tag `v2.0.0` se publica junto con estos cambios.

### Added
- Pagina de contacto con formulario Formspree y proteccion anti-spam mediante honeypot (`578d678`, 2026-09-10; honeypot, 2026-10-01).
- Integraciones de Agnostic Design System y Financial Calculator con enlaces de produccion (`a766e5d`, `674ab6a`, 2026-08-11).
- Proyectos Global Logistics y catalogo ampliado, manteniendo los tres destacados en inicio (`490da88`, 2026-08-12; `bc49f5a`, 2026-09-10).
- Metadatos estaticos por ruta, sitemap, pagina 404 y cabeceras de seguridad para Vercel (`01bbf8c`, 2026-10-01).

### Changed
- Validacion automatica de reseñas mas tolerante ante errores de OpenAI y ejecucion diaria (`9ec6942`, `9d52178`, 2026-08-12).
- CV traducido completamente entre espanol e ingles y enlaces sociales limitados a GitHub y LinkedIn (2026-10-01).
- Instrucciones compartidas, perfiles de agentes y skill de frontend organizados en `.github/instructions/`, `.github/agents/` y `.github/skills/` (2026-10-01).
- Las exclusiones locales introducidas en `19547b8` se separan de las personalizaciones compartidas, ahora alojadas en `.github/` (2026-10-01).

## [1.2.0] - 2026-08-11

### Added
- Integracion del Agnostic Design System al portafolio con preview dedicado y enlace a produccion (`a766e5d`).

### Changed
- Correccion de indentacion en la configuracion de proyectos para mantener consistencia (`435e671`).

## Historial anterior

Los tags `v0.0.1-test`, `v0.0.2-test` y `v0.0.3-test` corresponden a iteraciones de CI y pruebas anteriores. El historial completo permanece en Git.
