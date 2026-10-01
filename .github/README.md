# Personalizaciones de agentes

Este directorio contiene personalizaciones compartidas del repositorio para GitHub Copilot.

- `instructions/`: convenciones del proyecto aplicadas automáticamente a los archivos del workspace.
- `agents/`: perfiles seleccionables por responsabilidad. Usa **Frontend Developer** para UI, accesibilidad e i18n; **Release Engineering** para build, workflows y despliegue.
- `skills/`: procedimientos especializados que el agente carga cuando corresponden. La skill `frontend-design` contiene su propio `SKILL.md` y licencia.
- `workflows/`: automatizaciones de GitHub Actions; no son instrucciones del agente.

`AGENTS.md` en la raíz puede existir como guía local del workspace y está excluido de Git. Las reglas compartidas del proyecto deben vivir bajo `.github/`.
