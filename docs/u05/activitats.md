# U05 · Activitats

## Activitat 7 · Arquitectura núvol-edge per a Tarongina

<div class="meta-unitat" markdown>
<div><span>Modalitat</span><strong>Equips de 3</strong></div>
<div><span>Durada</span><strong>1 sessió + treball a casa</strong></div>
<div><span>Criteris</span><strong>RA3 · a, b, c, d, e</strong></div>
<div><span>Lliurament</span><strong>Diagrama i justificació a Aules</strong></div>
</div>

El servidor NAS de l'oficina està al límit i la cooperativa vol instal·lar sensors en
totes les finques, no només en tres. El gerent pregunta: **«ho portem tot al núvol?»**

La vostra resposta ha de ser un diagrama d'arquitectura amb la justificació de cada
decisió.

### L'escenari

| Element | Situació prevista |
| --- | --- |
| **Sensors de camp** | 120 sensors repartits per 1.200 ha, una lectura cada 5 minuts |
| **Cobertura** | Bona a la seu; irregular en les finques, amb talls d'hores |
| **Cambres frigorífiques** | 6 cambres, lectura cada minut, alarma si supera el llindar |
| **Línia d'envasat** | PLC i SCADA que generen registres continus durant el torn |
| **ERP** | Facturació i liquidacions de 450 persones sòcies |
| **Botiga en línia** | Projecte nou, amb pics forts en campanya i Nadal |
| **Històric** | 12 anys de dades de collita en fulls de càlcul dispersos |
| **Model de predicció** | Entrenament mensual, càlcul pesat |
| **Pressupost IT** | Limitat. Una persona a mitja jornada |

### Tasques

1. **Classifiqueu cada càrrega** (12 min). Per a cadascun dels nou elements, decidiu on
   s'ha de processar i per què:

    | Element | Mist | Edge | Fog | Núvol | Per què |
    | --- | :---: | :---: | :---: | :---: | --- |
    | Sensors de camp | | | | | |
    | Cambres frigorífiques | | | | | |
    | Línia d'envasat | | | | | |
    | ERP | | | | | |
    | Botiga en línia | | | | | |
    | Històric de collites | | | | | |
    | Model de predicció | | | | | |

    !!! tip "Criteris per a decidir"
        Pregunteu-vos tres coses en cada cas: **quant pot esperar la resposta**, **què
        passa si cau la connexió** i **quantes dades es generen**.

2. **Model de servei** (8 min). Per a les càrregues que aneu al núvol, indiqueu si les
   contractaríeu com a **IaaS**, **PaaS** o **SaaS**, i justifiqueu-ho tenint en compte
   que la cooperativa té mitja jornada d'informàtic.

3. **El diagrama** (10 min). Dibuixeu l'arquitectura amb [draw.io](https://app.diagrams.net/).
   Ha de mostrar:

    - Les quatre capes (mist, edge, fog, núvol).
    - Quins elements hi ha en cadascuna.
    - **Les fletxes**, amb el sentit i el tipus de dada que circula.
    - Què passa quan cau la connexió: marqueu què continua funcionant.

4. **Riscos i costos** (5 min). Responeu breument:

    - Quin és el principal risc de la vostra arquitectura?
    - Què passaria si el proveïdor de núvol apujara els preus un 40 %?
    - Quines dades **no** eixirien de la cooperativa, i per què?

### Per a la posada en comú

- Hi ha equips que han posat les cambres frigorífiques al núvol i altres en l'edge. Qui té
  raó, i sota quines condicions?
- Quantes dades al dia generen 120 sensors a una lectura cada 5 minuts? Val la pena
  enviar-les totes?
- Si Tarongina tanca un contracte amb un proveïdor de núvol, de qui és la responsabilitat
  davant del RGPD sobre les dades de les persones sòcies?

### Criteris de valoració

| Aspecte | Què es mira |
| --- | --- |
| Criteri d'ubicació | Cada càrrega està on toca, i el motiu és tècnic |
| Models de servei | La tria d'IaaS, PaaS o SaaS s'ajusta als recursos reals |
| Diagrama | Llegible, amb capes i flux de dades clars |
| Resiliència | Es preveu què passa quan cau la connexió |
| Realisme | La proposta és assumible per a una cooperativa, no per a una multinacional |

!!! note "Aquesta activitat alimenta el projecte final"
    L'arquitectura que dissenyeu ací es pot reaprofitar directament en la fase 2 del
    [projecte de transformació digital](../projecte/index.md). Feu-la bé i tindreu mitja
    fase resolta.

[Qüestionari d'autoavaluació :material-arrow-right:](questionari.md){ .md-button .md-button--primary }
