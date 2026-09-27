# Digitalització aplicada als sectors productius

Material del mòdul professional **1665 · Digitalització aplicada als sectors productius**,
per als cicles formatius de grau superior de la família d'Informàtica i Comunicacions.

Curs 2026-2027 · Contingut en valencià.

El web inclou els continguts de les sis unitats, les activitats, qüestionaris
autoavaluables i tota la documentació del projecte final. Tot gira al voltant d'una
empresa fictícia, **Tarongina, Coop. V.**, una cooperativa citrícola valenciana.

## Publicar-ho a GitHub Pages

### 1. Crear el repositori

```bash
git init
git add .
git commit -m "Material del mòdul de Digitalització"
git branch -M main
git remote add origin https://github.com/EL-TEU-USUARI/digitalitzacio.git
git push -u origin main
```

### 2. Activar GitHub Pages

Al repositori de GitHub: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

### 3. Ajustar la URL

Edita `mkdocs.yml` i posa la teua adreça:

```yaml
site_url: https://EL-TEU-USUARI.github.io/digitalitzacio/
```

A partir d'ací, cada `git push` a `main` publica el web automàticament. El primer
desplegament tarda un parell de minuts.

## Treballar-hi en local

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt

mkdocs serve                     # http://127.0.0.1:8000
```

El servidor recarrega sol cada vegada que es guarda un fitxer.

Per a generar el web estàtic en la carpeta `site/`:

```bash
mkdocs build
```

## Els qüestionaris

Hi ha **dos bancs de preguntes separats i independents**:

| Banc | Preguntes | On va | Puntua | En aquest repositori |
| --- | --- | --- | --- | --- |
| `scripts/banc_web.py` | 10 per unitat | `docs/assets/quizzes/` | No | Sí |
| `scripts/banc_aules.py` | 20 per unitat | `aules/gift/` | Sí | **No** |

!!! El banc d'Aules conté les respostes correctes dels qüestionaris que puntuen, així que
està exclòs del repositori pel `.gitignore`. Va en el paquet `material-aules`. Per a
regenerar els fitxers GIFT, copia `banc_aules.py` dins de `scripts/` i executa el
generador; sense eixe fitxer, l'script només genera els qüestionaris del web.

Les preguntes dels dos bancs són diferents: l'autoavaluació del web serveix per a
preparar-se, i el qüestionari d'Aules per a avaluar.

Després de qualsevol canvi en un dels dos bancs:

```bash
python scripts/genera.py
```

L'script regenera els dos formats i avisa si algun enunciat s'ha repetit entre els bancs.
Els fitxers generats **no s'editen a mà**.

### Importar les preguntes a Aules

1. Al curs d'Aules: **Banc de preguntes → Importar**.
2. Format **GIFT**, i puja `aules/gift/uXX.txt`.
3. Es crearà la categoria `Digitalitzacio / UXX. …` amb les 20 preguntes.
4. Crea el qüestionari i tria-hi les preguntes d'eixa categoria.

Cada unitat porta 14 preguntes de resposta múltiple, 4 de vertader o fals i 2 de resposta
curta.

## Estructura

```
mkdocs.yml               Configuració, tema i menú
requirements.txt         Dependències
scripts/
  genera.py              Generador dels dos formats
  banc_web.py            Preguntes de l'autoavaluació del web
  banc_aules.py          Preguntes avaluables d'Aules
docs/                    El web que es publica
  index.md               Portada
  empresa.md             Tarongina, Coop. V.
  modul/                 Presentació, RA, metodologia, avaluació, calendari
  u01/ … u06/            Contingut + activitats + qüestionari de cada unitat
  projecte/              Guia, plantilla i rúbrica del projecte final
  recursos/              Eines, fonts i glossari
  assets/quizzes/        Qüestionaris del web (generats)
  javascripts/quiz.js    Motor dels qüestionaris
  stylesheets/extra.css  Paleta i components
aules/gift/              Preguntes per a Aules (generades, NO es publiquen)
```

## Unitats

| Unitat | Contingut | RA |
| --- | --- | --- |
| U01 | Digitalització en els sistemes productius | RA1 |
| U02 | Tecnologies habilitadores digitals | RA2 |
| U03 | Intel·ligència artificial | RA4 |
| U04 | Big Data i dades | RA5 |
| U05 | Computació en el núvol | RA3 |
| U06 | Projecte de transformació digital | RA6 |

## Què NO hi ha en aquest repositori

Perquè GitHub Pages siga gratuït el repositori ha de ser **públic**, o siga que tot el que
s'hi puja és visible per a qualsevol. Per això van a banda, en el paquet
`material-aules`:

- `scripts/banc_aules.py` i `aules/gift/` — les 120 preguntes avaluables, amb les
  respostes correctes marcades.
- Els fulls de les activitats en Word i les presentacions.

Tots dos estan al `.gitignore`. Si algun dia els necessites en el repositori, fes-lo
privat abans (Pages en repositoris privats requereix un pla de pagament).

## Crèdits i llicència

Els continguts prenen com a referència el material de **Ricardo Sánchez**, publicat a
[ricardoprofe.github.io/apunts_digitalitzacio_25_36](https://ricardoprofe.github.io/apunts_digitalitzacio_25_36/),
adaptat al cas de Tarongina i a la temporització d'aquest curs.

Material docent publicat sota llicència
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.ca).
