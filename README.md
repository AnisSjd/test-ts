Repo visant à représenter mon mon architecture de fichiers de manière simplifiée, pour résoudre mon problème de typescript.

=== Objectif ===
- lancer avec succès l'entrypoint avec un docker compose up

=== Règles ===
- Le contenu des fichiers TS ne doit pas être changé. En particulier, on ne renomme pas les imports (pas de "dist" ni de "src" dedans)
- on a droit de bouger des fichiers TS par exemple dans un éventuel dossier src, tant qu'on respecte la règle précédente
- on a droit d'adapter les commandes npm, tant qu'on a toujours un équivalent de nodemon dans "development" et de tsc dans "build".

=== Notes complémentaires ===
- Par rapport à l'architecture originale: ce qui s'appelait "services" est dorénavant dans "shared" et "lib".

- Ce qui a déjà été fait: pour l'instant, l'image docker bloque au npm run build.
