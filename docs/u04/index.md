# U04. Big Data i dades

<div class="meta-unitat" markdown>
<div><span>Resultat d'aprenentatge</span><strong>RA5</strong></div>
<div><span>Criteris</span><strong>a — i</strong></div>
<div><span>Sessions</span><strong>2</strong></div>
<div><span>Activitats</span><strong>1</strong></div>
</div>

!!! abstract "Què sabràs fer en acabar"
    - Distingir dada d'informació i descriure el cicle de vida de la dada.
    - Explicar què caracteritza el Big Data i com es relaciona amb la IA.
    - Ordenar les etapes d'un projecte de ciència de dades.
    - Aplicar els principis bàsics del RGPD i de la seguretat de les dades en una empresa.

---

## 1. Dada, informació i coneixement

Són tres coses diferents, i confondre-les porta a projectes que acumulen dades sense
servir per a res.

| | Què és | Exemple a Tarongina |
| --- | --- | --- |
| **Dada** | Un fet aïllat, sense context. Per si sol no significa res | `23` |
| **Informació** | La dada processada i contextualitzada | «Hui fa 23 °C a la finca del Pla» |
| **Coneixement** | Informació interpretada que permet actuar | «Amb 23 °C i la humitat actual, aquesta setmana no cal regar» |

El valor no està a **tindre** dades, sinó a convertir-les en decisions. Una empresa pot
tindre milions de registres i decidir per intuïció; és el cas de Tarongina hui.

### El cicle de vida de la dada

``` mermaid
graph LR
  A[1. Captura] --> B[2. Emmagatzematge]
  B --> C[3. Processament<br>i neteja]
  C --> D[4. Anàlisi]
  D --> E[5. Visualització<br>i ús]
  E --> F[6. Arxivat<br>o eliminació]
```

| Fase | Què passa | A Tarongina |
| --- | --- | --- |
| **1. Captura** | La dada es genera o es recull | El sensor mesura la humitat; la bàscula pesa la partida |
| **2. Emmagatzematge** | Es guarda en un lloc accessible i segur | Base de dades, NAS, núvol |
| **3. Processament i neteja** | Es corregeixen errors, duplicats i buits | Dues finques amb el mateix nom, lectures impossibles |
| **4. Anàlisi** | Es busquen patrons i relacions | Relació entre reg, clima i calibre final |
| **5. Visualització i ús** | Es converteix en decisions | Quadre de comandament del gerent |
| **6. Arxivat o eliminació** | Es conserva o s'esborra segons la normativa | Les dades de persones sòcies tenen terminis legals |

!!! warning "La fase que tothom s'oblida"
    La **fase 6**. El RGPD no permet guardar dades personals indefinidament «per si de
    cas». Cal saber quant de temps es conserva cada cosa i què es fa després.

---

## 2. Big Data

Es parla de **Big Data** quan el volum, la velocitat o la varietat de les dades superen el
que es pot tractar amb les eines convencionals: un full de càlcul o una base de dades
relacional normal.

### Les característiques que el defineixen

<div class="graella" markdown>

<div class="targeta" markdown>
### Volum
Quantitat massiva de dades. No parlem de milers de files, sinó de milions o milers de
milions.
</div>

<div class="targeta" markdown>
### Velocitat
Les dades es generen i arriben contínuament, i sovint cal processar-les en temps real.
</div>

<div class="targeta" markdown>
### Varietat
Dades estructurades (taules), semiestructurades (JSON, logs) i no estructurades (imatges,
vídeo, text lliure).
</div>

<div class="targeta" markdown>
### Veracitat
Fins a quin punt són fiables. Un sensor mal calibrat genera volum, però no valor.
</div>

<div class="targeta targeta--fosca" markdown>
### Valor
La raó de tot plegat. Si les dades no serveixen per a decidir millor, només són cost
d'emmagatzematge.
</div>

</div>

!!! info "Una base de dades gran no és Big Data"
    L'ERP de Tarongina pot tindre milions de línies de factura i no ser Big Data: són
    dades estructurades, que arriben a poc a poc i caben en un sistema convencional. En
    canvi, **cent sensors enviant una lectura per segon durant tota la campanya** sí que
    plantegen un problema de volum i velocitat.

### Dades estructurades i no estructurades

| Tipus | Característiques | Exemple a Tarongina |
| --- | --- | --- |
| **Estructurades** | Encaixen en taules amb camps definits | Factures, liquidacions, pesos de partides |
| **Semiestructurades** | Tenen format però no esquema fix | Lectures dels sensors en JSON, registres del SCADA |
| **No estructurades** | Sense format predefinit | Fotos de la calibradora, correus dels clients, àudios |

S'estima que la major part de les dades que genera una empresa són **no estructurades**, i
són justament les més difícils d'aprofitar. Ací és on entra la IA.

### Com es relacionen Big Data, analítica i IA

``` mermaid
graph TB
  A[Big Data<br>recull i emmagatzema] --> B[Analítica de dades<br>descriu què ha passat]
  B --> C[Machine learning<br>prediu què passarà]
  C --> D[Deep learning<br>tracta imatge, veu i text]
  D --> E[Intel·ligència artificial<br>automatitza la decisió]
```

Cada capa necessita l'anterior. Per això no té sentit que una empresa vulga «posar IA» si
abans no ha resolt d'on trau les dades i com les neteja.

---

## 3. La ciència de dades

### Etapes d'un projecte

| # | Etapa | Què s'hi fa | Pes real |
| --- | --- | --- | --- |
| 1 | **Definició del problema** | Què volem respondre i per a què | Curta, però decisiva |
| 2 | **Recollida de dades** | D'on les traiem, amb quins permisos | Mitjana |
| 3 | **Neteja i preparació** | Duplicats, valors buits, errors, formats | **La més llarga: sovint el 60-80 %** |
| 4 | **Anàlisi exploratòria** | Entendre què hi ha abans de modelar | Mitjana |
| 5 | **Modelatge** | Entrenar i comparar models | Més curta del que sembla |
| 6 | **Avaluació** | Funciona prou bé? Respon la pregunta inicial? | Curta |
| 7 | **Visualització i comunicació** | Convertir-ho en decisions per a qui mana | Clau i sovint descuidada |
| 8 | **Posada en producció i manteniment** | Que funcione cada dia i no es degrade | Contínua |

!!! tip "La sorpresa de tot el que treballa amb dades"
    La part «interessant» (entrenar models) és la més curta. **La neteja de dades s'emporta
    la major part del temps.** Si Tarongina vol fer prediccions de collita, el primer
    problema no serà l'algorisme: serà que les finques estan escrites de cinc maneres
    diferents en el full de càlcul.

### Objectius de la ciència de dades en l'empresa

| Objectiu | Pregunta que respon | Exemple |
| --- | --- | --- |
| **Descriptiu** | Què ha passat? | Quantes tones es van collir per finca la campanya passada |
| **Diagnòstic** | Per què ha passat? | Per què la finca del Pla va tindre un calibre menor |
| **Predictiu** | Què passarà? | Quantes tones es colliran aquesta campanya |
| **Prescriptiu** | Què hauríem de fer? | Quan i quant regar per a maximitzar el calibre |

### Emmagatzematge de dades

| Model | Què és | Quan s'usa |
| --- | --- | --- |
| **Base de dades relacional** | Taules amb esquema fix i SQL | Dades transaccionals: factures, comandes |
| **Base de dades NoSQL** | Documents, clau-valor, grafs | Dades semiestructurades i molt variables |
| **Magatzem de dades** (*data warehouse*) | Dades ja netes i organitzades per a analitzar | Quadres de comandament i informes |
| **Llac de dades** (*data lake*) | Dades en brut de qualsevol format | Guardar-ho tot ara i decidir després què s'aprofita |

El **núvol** és avui l'opció habitual per a tots aquests models, perquè permet créixer
sense comprar maquinari. Ho veurem en detall a la [U05](../u05/index.md).

---

## 4. Seguretat i protecció de les dades

### Per què és crític

Les dades són un **actiu estratègic**: permeten decidir amb fonament i generen avantatge
competitiu. Però també són una **responsabilitat legal**, i perdre-les o filtrar-les té
conseqüències econòmiques i reputacionals.

A l'[Activitat 2](../u01/activitats.md#activitat-2-el-dia-que-es-va-parar-la-calibradora)
ja vau veure què li passa a Tarongina quan les dades desapareixen un dilluns al matí.

### Els tres pilars

| Pilar | Què garanteix | Exemple de mesura |
| --- | --- | --- |
| **Confidencialitat** | Només hi accedeix qui ha de fer-ho | Permisos per usuari, xifratge |
| **Integritat** | Les dades no s'alteren sense control | Registres d'auditoria, signatura, còpies |
| **Disponibilitat** | Estan accessibles quan fan falta | Còpies de seguretat, redundància |

En entorns **IT** la prioritat sol ser la confidencialitat; en entorns **OT**, la
disponibilitat. És la mateixa diferència que vam veure a la [U01](../u01/index.md).

### El RGPD en la pràctica

El **Reglament general de protecció de dades** (RGPD) regula el tractament de dades
personals a la Unió Europea. A l'Estat espanyol es complementa amb la **LOPDGDD**.

!!! question "Què és una dada personal?"
    Qualsevol informació que permeta **identificar una persona física**, directament o
    indirectament.

    A Tarongina **sí que ho són**: nom, DNI, compte bancari i telèfon de les persones
    sòcies; les dades del personal de campanya; els contactes dels clients.

    **No ho són**: la temperatura d'una cambra, el calibre mitjà d'una partida o les tones
    collides, sempre que no permeten identificar ningú.

Principis que cal respectar:

- **Licitud**: ha d'haver-hi una base legal per a tractar la dada (contracte, obligació
  legal, consentiment...).
- **Minimització**: només les dades necessàries per a la finalitat. No recollir «per si de
  cas».
- **Limitació de la finalitat**: no es poden fer servir per a una cosa diferent d'aquella
  per a la qual es van recollir.
- **Limitació del termini**: no es conserven indefinidament.
- **Integritat i confidencialitat**: mesures tècniques i organitzatives adequades.
- **Responsabilitat proactiva**: cal poder **demostrar** que es compleix.

Drets de les persones: accés, rectificació, supressió, oposició, limitació i portabilitat.

### Mesures bàsiques que hauria de tindre qualsevol empresa

<div class="graella" markdown>

<div class="targeta" markdown>
### Còpies de seguretat
**Regla 3-2-1**: tres còpies, en dos suports diferents, una fora de la ubicació i
desconnectada. I provar la restauració.
</div>

<div class="targeta" markdown>
### Control d'accés
Cada persona amb el seu usuari i només els permisos que necessita. Res de comptes
compartits.
</div>

<div class="targeta" markdown>
### Xifratge
Dades xifrades en repòs i en trànsit, especialment en portàtils i dispositius mòbils.
</div>

<div class="targeta" markdown>
### Segmentació de xarxa
Separar la xarxa d'oficines de la de planta. Un problema en una no ha d'arribar a l'altra.
</div>

<div class="targeta" markdown>
### Formació
La majoria d'incidents comencen amb una persona que obri el que no havia d'obrir.
</div>

<div class="targeta targeta--fosca" markdown>
### Pla de continuïtat
Què fem si demà no hi ha sistemes. Escrit, conegut i assajat abans que faça falta.
</div>

</div>

### Vocabulari

**KPI** (*key performance indicator*)
: Indicador clau de rendiment. Mesura el grau de compliment d'un objectiu.

**ETL** (*extract, transform, load*)
: Procés d'extreure dades de diverses fonts, transformar-les i carregar-les en un
  magatzem.

**Ransomware**
: Programa maliciós que xifra els fitxers i demana un rescat per a recuperar-los.

**Anonimització**
: Procés de transformar dades personals perquè ja no permeten identificar ningú. Una
  vegada anonimitzades, el RGPD deixa d'aplicar-s'hi.

---

## Idees clau

1. La **dada** és un fet aïllat; la **informació** és la dada amb context; el
   **coneixement** permet actuar.
2. El cicle de vida de la dada acaba en **arxivat o eliminació**, no en emmagatzematge
   etern.
3. El **Big Data** es defineix per volum, velocitat i varietat, i només val si aporta
   valor.
4. En un projecte de dades, **la neteja s'emporta la major part del temps**.
5. La seguretat es sosté en **confidencialitat, integritat i disponibilitat**, i el
   **RGPD** no és opcional.

## Per a ampliar

- [Agència Espanyola de Protecció de Dades](https://www.aepd.es/) — guies pràctiques per a pimes.
- [INCIBE](https://www.incibe.es/empresas) — recursos de ciberseguretat per a empreses.
- [Mapa de ciberamenaces de Kaspersky](https://cybermap.kaspersky.com/es)

[Activitats de la unitat :material-arrow-right:](activitats.md){ .md-button .md-button--primary }
[Qüestionari d'autoavaluació :material-arrow-right:](questionari.md){ .md-button }
