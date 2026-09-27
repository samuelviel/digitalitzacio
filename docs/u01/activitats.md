# U01 · Activitats

## Activitat 0 · Punt de partida

<div class="meta-unitat" markdown>
<div><span>Modalitat</span><strong>Individual</strong></div>
<div><span>Durada</span><strong>15 – 20 min</strong></div>
<div><span>Qualificació</span><strong>No puntua</strong></div>
<div><span>Lliurament</span><strong>Aules</strong></div>
</div>

Activitat diagnòstica del primer dia. Serveix perquè el professorat conega d'on partiu i
puga adaptar el curs al grup. **Responeu amb sinceritat i sense consultar internet ni
eines d'IA**: no passa res si no sabeu alguna cosa.

1. **Qüestionari a Aules** (8 min). 12 preguntes sobre els continguts del curs. Si no
   sabeu la resposta, trieu «No ho sé»: ens ajuda molt més que endevinar.
2. **Autoavaluació** (3 min). Marqueu el vostre nivell en 12 conceptes del mòdul.
3. **Mini-cas de Tarongina** (5 min). Quins problemes té la cooperativa treballant amb
   paper? Quina solució digital proposaríeu?
4. **Tu i el mòdul** (2 min). Experiència prèvia i què us agradaria aprendre.

---

## Activitat 1 · Radiografia IT/OT de Tarongina

<div class="meta-unitat" markdown>
<div><span>Modalitat</span><strong>En parelles</strong></div>
<div><span>Durada</span><strong>30 min</strong></div>
<div><span>Criteris</span><strong>RA1 · c, d, e, f</strong></div>
<div><span>Lliurament</span><strong>Aules</strong></div>
</div>

La direcció de Tarongina us contracta per a fer-li una radiografia digital: **saber què
té, què està connectat i què no.**

### Els 16 sistemes de la cooperativa

| | | | |
| --- | --- | --- | --- |
| 1 | Sensors d'humitat del sòl en tres finques | 9 | Etiquetadora de caixes amb codi QR |
| 2 | Estació meteorològica connectada al mòbil | 10 | ERP de facturació i liquidacions |
| 3 | Quadern de tractaments del camp, en paper | 11 | Full de càlcul amb les comandes |
| 4 | Tractor amb GPS i guiatge automàtic | 12 | Correu electrònic corporatiu |
| 5 | Bàscula d'entrada amb impressora de tiquets | 13 | Web informativa de la cooperativa |
| 6 | Calibradora òptica | 14 | Servidor NAS amb les còpies de seguretat |
| 7 | Línia d'envasat governada per PLC | 15 | Wifi del magatzem, compartit |
| 8 | Cambres frigorífiques amb registre en paper | 16 | Càmera de visió artificial cap al núvol |

### Tasques

1. **Classifiqueu** (10 min). Repartiu els 16 sistemes en **IT**, **OT** o **dubtós**.
   Justifiqueu els dubtosos: per què costa decidir-se?
2. **Detecteu** (10 min). Busqueu **tres processos manuals o sistemes aïllats** i
   indiqueu quin problema causen.
3. **Proposeu** (10 min). Trieu **dos punts de connexió** entre IT i OT. Quines dades han
   de circular, en quin sentit, i què milloraria?

!!! tip "Pista"
    Hi ha quatre sistemes de la llista que no són ni clarament IT ni clarament OT. Són
    justament els més interessants: la convergència entre els dos móns passa per ahí.

---

## Activitat 2 · El dia que es va parar la calibradora

<div class="meta-unitat" markdown>
<div><span>Modalitat</span><strong>En parelles</strong></div>
<div><span>Durada</span><strong>30 min</strong></div>
<div><span>Criteris</span><strong>RA1 · c, f, g</strong></div>
<div><span>Lliurament</span><strong>Aules</strong></div>
</div>

Un dilluns d'abril, Tarongina va perdre un dia sencer de producció. **Ningú va tocar cap
màquina: tot va començar en un ordinador de l'oficina.**

### Cronologia de l'incident

| Hora | Dia | Què va passar |
| --- | --- | --- |
| 08:12 | Dilluns | Una administrativa rep un correu que sembla d'un client alemany habitual, amb un fitxer adjunt de comanda. L'obri. |
| 09:05 | Dilluns | Els fitxers compartits del servidor queden xifrats: comandes, factures, liquidacions i la carpeta de còpies de seguretat. |
| 10:30 | Dilluns | L'ordinador que envia les ordres d'envasat no pot llegir el full de comandes del dia. La calibradora continua funcionant, però ningú sap quins calibres cal preparar. |
| 11:15 | Dilluns | Es para la línia d'envasat. 40 persones esperant i 12 camions reservats per a la vesprada. |
| 12:00 | Dilluns | Es descobreix que l'única còpia de seguretat estava en el mateix servidor i també està xifrada. |
| 09:00 | Dimarts | Es reconstrueixen les comandes a partir dels correus d'una comercial i es factura a mà. Pèrdua estimada: **45.000 €**. |

Les cambres frigorífiques van continuar funcionant, però el registre de temperatura es
feia en paper: no es va poder certificar la cadena de fred de l'exportació.

### Tasques

1. **El camí de l'incident** (6 min). Reconstruïu la cadena: per on entra, què toca
   primer i com arriba fins a la línia d'envasat. En cada pas, què va fallar?
2. **IT o OT?** (6 min). Classifiqueu tot el que es va veure afectat i indiqueu el tipus
   de dany: pèrdua de dades, pèrdua de disponibilitat o aturada de la producció.
3. **Per què salta d'un món a l'altre?** (8 min). Trobeu **tres motius** pels quals un
   problema de l'oficina va poder parar el magatzem.
4. **Tres mesures** (8 min). Proposeu una mesura **organitzativa**, una de **tècnica** i
   una de **connexió IT-OT**, i digueu quin pas de la cadena talla cadascuna.

### Per a la posada en comú

- Qui és el responsable del que ha passat: l'oficina, el magatzem o ningú en concret?
- Si el servidor i les màquines estigueren en xarxes separades, s'hauria parat la línia?
- Per què una còpia de seguretat en el mateix lloc no és una còpia de seguretat?
- Què hauria passat si el registre de temperatura estiguera digitalitzat i connectat?

!!! example "Ampliació opcional"
    Busqueu un cas real d'una empresa que haja hagut de parar la producció per un
    incident informàtic i expliqueu en dues línies en què s'assembla al de Tarongina.

[Qüestionari d'autoavaluació :material-arrow-right:](questionari.md){ .md-button .md-button--primary }
