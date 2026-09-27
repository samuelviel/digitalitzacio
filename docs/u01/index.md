# U01. Digitalització en els sistemes productius

<div class="meta-unitat" markdown>
<div><span>Resultat d'aprenentatge</span><strong>RA1</strong></div>
<div><span>Criteris</span><strong>a — g</strong></div>
<div><span>Sessions</span><strong>4</strong></div>
<div><span>Activitats</span><strong>2</strong></div>
</div>

!!! abstract "Què sabràs fer en acabar"
    - Explicar què és la digitalització i distingir-la de la transformació digital.
    - Diferenciar un entorn IT d'un entorn OT i situar-hi qualsevol sistema d'una empresa.
    - Identificar els departaments que formen l'entorn IT i les tecnologies típiques de
      planta i de negoci.
    - Argumentar per què cal connectar els dos entorns i quins avantatges i riscos té.

---

## 1. Què és la digitalització

La **digitalització** és el procés de convertir la informació, els processos i els
recursos d'una organització d'un format no digital a un format digital, de manera que es
puguen emmagatzemar, processar i transmetre amb sistemes informàtics.

Dit d'una altra manera: el que canvia no són els aparells, sinó **com circula la
informació** dins de l'empresa.

<div class="graella" markdown>

<div class="targeta" markdown>
### En la teua vida
- Banca en línia en compte d'anar a l'oficina
- Mapes i GPS en compte de plànols de paper
- Cita mèdica des del mòbil
</div>

<div class="targeta" markdown>
### En una empresa
- Comandes que entren per una web, no per telèfon
- Sensors que envien dades sols
- Factura electrònica i signatura digital
</div>

</div>

### Els tres components clau

El currículum del mòdul assenyala tres components sobre els quals se sustenta tota la
digitalització moderna. Cadascun té la seua unitat en aquest curs:

| Component | Què aporta | On es veu |
| --- | --- | --- |
| **Núvol** | On s'executen i es guarden els serveis, sense dependre d'un servidor propi | [U05](../u05/index.md) |
| **Big Data** | Grans volums de dades variades que es generen contínuament i cal analitzar | [U04](../u04/index.md) |
| **Intel·ligència artificial** | Models que aprenen dels patrons de les dades i ajuden a decidir | [U03](../u03/index.md) |

Els tres estan encadenats: sense connectivitat no hi ha dades, sense dades no hi ha
analítica, i sense analítica no hi ha intel·ligència artificial que valga res.

---

## 2. Digitització, digitalització i transformació digital

Són tres nivells diferents i es confonen constantment. La diferència no és acadèmica:
determina si un projecte serveix d'alguna cosa o si només mou paperassa.

=== "1. Digitització"

    **Passar d'analògic a digital sense canviar res més.** El suport canvia, el procés no.

    > A Tarongina: escanejar els albarans d'entrada de fruita i guardar-los en PDF en una
    > carpeta del servidor.

    Segueix fent falta que algú òbriga el PDF, el llija i el tecleje en un altre lloc.

=== "2. Digitalització"

    **Canviar el procés perquè funcione amb mitjans digitals.** Desapareixen passos
    manuals i la informació flueix sola.

    > A Tarongina: registrar l'entrada de fruita amb una tauleta a la bàscula, que
    > actualitza l'ERP a l'instant i genera automàticament el tiquet de la persona sòcia.

    Ja no hi ha albarà de paper ni transcripció posterior.

=== "3. Transformació digital"

    **Canviar el model de negoci i la manera de treballar.** La tecnologia permet fer
    coses que abans senzillament no es podien fer.

    > A Tarongina: vendre directament al consumidor europeu amb traçabilitat de cada
    > caixa, del camp a la taula, i ajustar la producció a la demanda real.

    Canvien els clients, els ingressos, l'organització i la cultura de l'empresa.

### Comparativa

| Aspecte | Digitalització | Transformació digital |
| --- | --- | --- |
| **Enfocament** | Convertir elements i processos a digital | Canvi integral en com l'organització usa la tecnologia |
| **Abast** | Processos concrets | Cultura, processos, tecnologia i estratègia |
| **Objectiu** | Eficiència operativa | Innovació i nous models de negoci |
| **Canvi cultural** | Pot no existir | Fonamental |
| **Escala d'impacte** | Processos específics | Tota l'organització |
| **Horitzó** | Sovint és el pas previ | Procés a llarg termini i continu |

!!! warning "L'error més comú"
    Moltes empreses es queden en el primer nivell i creuen que ja estan digitalitzades.
    El símptoma clàssic: **escanejar una factura i tornar a teclejar-la a mà** en el
    programa de comptabilitat.

### El pla de digitalització

Abans de transformar res cal un **pla de digitalització**: un full de ruta estructurat
que prepara l'organització. Serveix per a:

- **Diagnosticar** on està l'empresa hui, en tecnologia i en cultura.
- **Fixar objectius** clars i mesurables.
- **Alinear** la digitalització amb l'estratègia del negoci.
- **Assignar recursos** i maximitzar el retorn de la inversió.
- **Gestionar el canvi** i acompanyar les persones.
- **Avaluar riscos**, especialment de seguretat i protecció de dades.

!!! info "Espanya Digital"
    L'agenda **Espanya Digital** és el full de ruta estatal per a la transformació digital
    del país, amb programes dirigits a autònoms, pimes i *startups* en connectivitat,
    ciberseguretat, digitalització i educació digital.
    [espanadigital.gob.es](https://espanadigital.gob.es/)

### Tipus de transformació digital

| Tipus | En què consisteix | Exemple a Tarongina |
| --- | --- | --- |
| **De processos** | Reenginyeria i optimització de fluxos de treball | Automatitzar l'entrada de fruita i la liquidació |
| **De model de negoci** | Redefinir la proposta de valor i com es generen ingressos | Passar de vendre a majoristes a vendre al consumidor final |
| **De domini empresarial** | Incorporar tecnologia pròpia del sector | Sensors i drons per a optimitzar el reg dels cultius |
| **De cultura** | Canviar com treballen i s'adapten les persones | Que el magatzem propose millores en lloc de resistir-s'hi |

---

## 3. Entorns IT i OT

Dins de qualsevol empresa productiva conviuen dos móns tecnològics que han crescut per
separat.

<div class="graella" markdown>

<div class="targeta" markdown>
### IT · *Information Technology*
<span class="etiqueta etiqueta--it">Tecnologia de la informació</span>

Tecnologies i sistemes per a **gestionar la informació i les dades** de l'organització.

- Servidors, xarxes i comunicacions
- ERP, CRM, bases de dades
- Desenvolupament i manteniment d'aplicacions
- Ciberseguretat de la informació
</div>

<div class="targeta" markdown>
### OT · *Operational Technology*
<span class="etiqueta etiqueta--ot">Tecnologia operativa</span>

Tecnologia per a **supervisar i controlar dispositius i processos físics**.

- Sensors i dispositius connectats
- Autòmats programables (PLC) i SCADA
- Robots, línies de producció, cambres
- Seguretat industrial i de les persones
</div>

</div>

### En què es diferencien

| | IT | OT |
| --- | --- | --- |
| **Objectiu** | Gestionar la informació del negoci | Controlar processos i màquines físiques |
| **Prioritat** | Confidencialitat i integritat de les dades | Disponibilitat i seguretat de les persones |
| **Temps de resposta** | Tolera latència | Sovint temps real |
| **Vida útil dels equips** | 3 – 5 anys | 10 – 20 anys o més |
| **Actualitzacions** | Freqüents, sovint automàtiques | Poc habituals: parar la producció costa diners |
| **Si falla** | Es perd productivitat i informació | Es para la producció i pot haver-hi risc físic |
| **Qui ho gestiona** | Departament d'informàtica | Manteniment, producció o enginyeria |

!!! tip "Regla pràctica per a classificar"
    Si una fallada fa que **es perda informació**, és IT.
    Si fa que **es pare una màquina** o hi haja risc per a les persones, és OT.

### Departaments que formen l'entorn IT

El currículum demana identificar-los explícitament (criteri 1d). En una empresa mitjana,
els habituals són:

| Departament | De què s'ocupa |
| --- | --- |
| **Informàtica (IT)** | Infraestructura, suport tècnic, xarxes i servidors |
| **Desenvolupament de programari** | Disseny, construcció i manteniment d'aplicacions |
| **Operacions de IT** | Administració diària de sistemes, disponibilitat i rendiment |
| **Ciberseguretat** | Identitats, control d'accés, amenaces i resposta a incidents |
| **Projectes tecnològics** | Implantacions, actualitzacions i migracions |
| **Suport tècnic (*help desk*)** | Atenció a usuaris interns i, de vegades, a clients |
| **Dades i analítica** | Bases de dades, anàlisi i informes |
| **Infraestructura** | Servidors, emmagatzematge, xarxes i maquinari |
| **Arquitectura empresarial** | Coherència global dels sistemes amb els objectius |
| **Innovació i estratègia** | Exploració i avaluació de tecnologies emergents |

En una pime com Tarongina tot això recau en una persona a mitja jornada. No vol dir que
les funcions no existisquen: vol dir que estan desateses.

### La convergència IT-OT

Tradicionalment els dos entorns funcionaven amb tecnologies, protocols i equips
diferents. Això s'està acabant.

<div class="graella" markdown>

<div class="targeta" markdown>
#### Mateixes xarxes
Les màquines ja usen xarxes IP, wifi i, cada vegada més, 5G.
</div>

<div class="targeta" markdown>
#### Mateixos sistemes
Darrere d'un SCADA hi ha Windows o Linux, com en qualsevol servidor.
</div>

<div class="targeta" markdown>
#### Mateixes dades
Els sensors de planta envien dades al núvol per a analitzar-les.
</div>

<div class="targeta" markdown>
#### Mateixos riscos
Si la planta es connecta, també es pot atacar des de fora.
</div>

</div>

**Què impulsa la convergència:**

- La necessitat de digitalitzar i optimitzar processos industrials en temps real.
- La proliferació de dispositius **IoT** que generen dades en els dos àmbits.
- La necessitat de **dades unificades** per a poder decidir amb una visió completa.

**Què s'hi guanya:** eficiència operativa, agilitat per a innovar i decisions
fonamentades.

!!! danger "I què s'hi arrisca"
    Quan els dos móns es connecten, també **es comparteixen els riscos**. Un programa
    maliciós que entra per un correu de l'oficina pot acabar parant una línia de
    producció. Per això la ciberseguretat ja no és només cosa d'informàtica.

    Casos reals: **Norsk Hydro** (2019), **Colonial Pipeline** (2021) i **JBS** (2021),
    tots amb producció aturada per incidents que van començar en l'entorn IT.

---

## 4. Tecnologies de digitalització en planta i en negoci

A l'hora de digitalitzar hi ha dos enfocaments amb objectius diferents, i per tant amb
tecnologies diferents.

=== "Digitalització en planta"

    **Enfocament operatiu.** Integra tecnologies digitals en els processos i operacions
    industrials. L'objectiu és millorar l'eficiència, la productivitat i la presa de
    decisions en producció.

    - **Automatització i control avançat**: automatitzar i monitorar processos en temps
      real, reduint errors i intervenció humana.
    - **Sensors i dispositius connectats**: recollir dades del procés per a optimitzar-lo.
    - **Bessons digitals**: rèpliques virtuals de processos i actius per a simular i
      analitzar abans de tocar res.
    - **Realitat augmentada i virtual**: visualització de processos, formació d'operaris i
      resolució d'incidències.
    - **Manteniment predictiu**: anticipar fallades en lloc de reparar-les.

    > A Tarongina: la calibradora, els PLC de la línia d'envasat, els sensors d'humitat
    > del sòl i els registres de les cambres frigorífiques.

=== "Digitalització en negoci"

    **Enfocament empresarial.** Aplica tecnologies digitals a les funcions de gestió:
    recursos humans, finances, logística i relació amb clients.

    - **Sistemes ERP**: unifiquen la gestió de processos empresarials.
    - **Analítica avançada i big data**: visions estratègiques a partir de les dades.
    - **IA i machine learning**: automatització, personalització i optimització.
    - **Blockchain**: seguretat i traçabilitat en transaccions i registres.
    - **Computació en el núvol**: emmagatzematge i accés des de qualsevol lloc.

    > A Tarongina: l'ERP de facturació i liquidacions, el full de càlcul de comandes, la
    > web corporativa i el correu.

!!! note "Una empresa pot anar molt desigual"
    Tarongina té una calibradora òptica moderna (planta molt tecnificada) i porta les
    comandes dels clients en un full de càlcul copiat a mà (negoci molt endarrerit). És
    el patró més habitual en el sector.

### Vocabulari

**PLC** (*programmable logic controller*)
: Controlador lògic programable. L'ordinador industrial que governa una màquina o una
  línia.

**SCADA** (*supervisory control and data acquisition*)
: Sistema de supervisió i adquisició de dades. La capa que vigila i coordina els PLC.

**DCS** (*distributed control system*)
: Sistema de control distribuït, habitual en plantes de procés continu.

**ERP** (*enterprise resource planning*)
: Sistema que integra la gestió de finances, inventari, producció i vendes.

**CRM** (*customer relationship management*)
: Sistema de gestió de la relació amb els clients.

**Bessó digital** (*digital twin*)
: Rèplica virtual d'un objecte, procés o sistema real, alimentada amb dades, que permet
  simular-ne el comportament.

---

## 5. La connexió IT-OT i la transformació integral

### Com es parlen els dos móns

En una empresa ben integrada la informació circula en dos sentits:

| Nivell | Sistemes | Funció |
| --- | --- | --- |
| **Negoci** | ERP, CRM, BI | Decideix què cal produir i quan |
| **Supervisió** | SCADA, MES | Tradueix les ordres i vigila el procés |
| **Planta** | Sensors, PLC, màquines | Executa i mesura el que passa de veritat |

Les **ordres baixen** (del negoci a la planta) i les **dades pugen** (de la planta al
negoci).

> **Exemple a Tarongina, si estiguera integrada:** una comanda de 3.000 caixes entra en
> l'ERP → el sistema de supervisió programa la línia d'envasat → en acabar, la producció
> real torna a l'ERP i s'emet la factura. Sense que ningú tecleje res.

!!! failure "Com funciona hui"
    La calibradora imprimeix un tiquet, algú el porta a l'oficina i el tecleja en
    l'ordinador. Cada còpia manual és un retard i una font d'errors.

### Avantatges de digitalitzar d'extrem a extrem

<div class="graella" markdown>

<div class="targeta" markdown>
#### Eficiència operativa
Automatització de processos, menys errors de transcripció i alliberament de recursos per
a tasques que sí que aporten valor.
</div>

<div class="targeta" markdown>
#### Decisions basades en dades
Informació real i actualitzada en lloc d'intuïcions. La banca ho fa servir per a predir
fraus; la logística, per a optimitzar rutes.
</div>

<div class="targeta" markdown>
#### Millor experiència del client
Personalització, canals digitals i sistemes CRM que milloren la captació i la
fidelització.
</div>

<div class="targeta" markdown>
#### Gestió eficient dels actius
Eines de gestió d'actius (**AMS**) que monitoren l'estat dels equips, allarguen la seua
vida útil i redueixen parades no planificades.
</div>

<div class="targeta" markdown>
#### Cadena de subministrament àgil
Visibilitat en temps real, planificació precisa i adaptació ràpida als canvis de demanda.
</div>

<div class="targeta" markdown>
#### Reducció de costos i residus
Manteniment predictiu i optimització de recursos: menys aigua, menys fitosanitaris, menys
parades imprevistes.
</div>

<div class="targeta" markdown>
#### Agilitat i adaptabilitat
Entorn favorable a la innovació i capacitat de canviar ràpidament davant de noves
tecnologies o demandes.
</div>

<div class="targeta targeta--fosca" markdown>
#### Seguretat millorada
La digitalització integral obliga a posar atenció en la ciberseguretat i a gestionar els
riscos de manera proactiva.
</div>

</div>

### I què costa

No tot són avantatges. Qualsevol projecte real es troba amb això:

- **Inversió inicial** i sistemes antics difícils de substituir.
- **Formació** de les persones i **resistència al canvi**.
- **Nous riscos de ciberseguretat** en connectar la planta.
- **Dependència** de proveïdors tecnològics.

Aquests quatre punts tornaran a aparéixer en el [projecte final](../projecte/index.md),
en la matriu de riscos i en el pla de gestió del canvi.

---

## Idees clau

1. Digitalitzar és canviar **com circula la informació**, no comprar aparells.
2. Els components clau són el **núvol**, el **Big Data** i la **intel·ligència artificial**.
3. **Digitització, digitalització i transformació digital** són tres nivells diferents.
4. **IT gestiona informació; OT controla màquines** i processos físics.
5. El valor real apareix quan **IT i OT es connecten** i la informació deixa de copiar-se
   a mà. Amb el valor, arriben també els riscos compartits.

## Per a ampliar

- [Espanya Digital](https://espanadigital.gob.es/) — agenda estatal de transformació digital.
- [Índex DESI](https://digital-strategy.ec.europa.eu/es/policies/desi) — indicadors de rendiment digital d'Europa.
- [Mapa de ciberamenaces de Kaspersky](https://cybermap.kaspersky.com/es) — atacs detectats en temps real.
- [Correos Market](https://www.correos.com/sostenibilidad/correos-market/) — cas de digitalització de productors locals.

[Activitats de la unitat :material-arrow-right:](activitats.md){ .md-button .md-button--primary }
[Qüestionari d'autoavaluació :material-arrow-right:](questionari.md){ .md-button }
