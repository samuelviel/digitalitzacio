# U05. Computació en el núvol

<div class="meta-unitat" markdown>
<div><span>Resultat d'aprenentatge</span><strong>RA3</strong></div>
<div><span>Criteris</span><strong>a — e</strong></div>
<div><span>Sessions</span><strong>2</strong></div>
<div><span>Activitats</span><strong>1</strong></div>
</div>

!!! abstract "Què sabràs fer en acabar"
    - Diferenciar els models de servei IaaS, PaaS i SaaS, i els de desplegament.
    - Explicar les funcions principals del núvol i els seus avantatges.
    - Situar *edge*, *fog* i *mist* respecte del núvol i decidir on processar cada dada.
    - Valorar els inconvenients i els riscos d'una migració.

---

## 1. Què és el núvol

La **computació en el núvol** (*cloud computing*) consisteix a accedir a recursos
informàtics (emmagatzematge, processament i aplicacions) **a través de la xarxa i sota
demanda**, sense haver de posseir ni mantindre la infraestructura física.

La idea de fons és passar d'un model de **propietat** a un model de **servei**: en lloc de
comprar un servidor que ha de durar cinc anys, es lloga la capacitat que fa falta en cada
moment.

### Característiques essencials

<div class="graella" markdown>

<div class="targeta" markdown>
### Autoservei sota demanda
El client obté recursos quan els necessita, sense esperar que ningú els prepare.
</div>

<div class="targeta" markdown>
### Accés per xarxa
Des de qualsevol lloc i qualsevol dispositiu amb connexió.
</div>

<div class="targeta" markdown>
### Agrupació de recursos
La infraestructura es comparteix entre molts clients, de manera aïllada.
</div>

<div class="targeta" markdown>
### Elasticitat
Es creix i es decreix ràpidament segons la demanda real.
</div>

<div class="targeta targeta--fosca" markdown>
### Pagament per ús
Es paga pel que es consumeix, mesurat i facturat de manera transparent.
</div>

</div>

!!! example "Per què això interessa a Tarongina"
    La campanya va d'octubre a maig i concentra tota la càrrega de treball. Un servidor
    propi dimensionat per al pic de gener està **infrautilitzat set mesos a l'any**. Amb
    el núvol es paga el pic quan hi ha pic.

---

## 2. Models de servei

És el criteri que més entra en les proves: **qui gestiona què**.

| | **IaaS** | **PaaS** | **SaaS** |
| --- | --- | --- | --- |
| Què es lloga | Infraestructura | Plataforma | Aplicació |
| Gestiona el client | SO, entorn, aplicació i dades | Aplicació i dades | Només les dades i la configuració |
| Gestiona el proveïdor | Maquinari, virtualització i xarxa | També SO i entorn d'execució | Tot |
| Exemple | Màquines virtuals, emmagatzematge | Entorns d'execució i bases de dades gestionades | Correu, ofimàtica, CRM en línia |
| Exemple a Tarongina | Un servidor virtual per a l'ERP | Una base de dades gestionada per als sensors | Microsoft 365, la botiga en línia |

``` mermaid
graph TB
  subgraph SaaS
    S1[Aplicació] --- S2[Dades del client]
  end
  subgraph PaaS
    P1[Entorn d'execució] --- P2[Aplicació pròpia]
  end
  subgraph IaaS
    I1[Màquina virtual] --- I2[Sistema operatiu propi]
  end
```

!!! tip "Regla per a recordar-ho"
    Pensa en el transport. **IaaS** és llogar un cotxe: el condueixes tu. **PaaS** és un
    taxi: poses el destí i algú altre condueix. **SaaS** és l'autobús: la ruta i l'horari
    ja estan fets, tu només hi puges.

### Models de desplegament

No s'ha de confondre el **model de servei** (qui gestiona què) amb el **model de
desplegament** (on està i qui hi té accés).

| Model | Què és | Quan té sentit |
| --- | --- | --- |
| **Públic** | Infraestructura compartida d'un proveïdor | La majoria de casos: més barat i més flexible |
| **Privat** | Infraestructura d'ús exclusiu d'una organització | Requisits estrictes de control o normativa |
| **Híbrid** | Combinació de recursos propis i de núvol públic | Es manté en casa el més sensible i la resta va al núvol |
| **Comunitari** | Compartit entre organitzacions amb necessitats comunes | Cooperatives o administracions d'un mateix sector |

!!! info "El cas realista per a una cooperativa"
    L'**híbrid**. Les dades de les persones sòcies i la facturació poden quedar-se en un
    servidor propi, mentre que la botiga en línia, el correu i l'analítica de sensors
    aprofiten el núvol públic.

---

## 3. Funcions del núvol

| Funció | Què permet | Exemple a Tarongina |
| --- | --- | --- |
| **Emmagatzematge** | Guardar fitxers i dades amb redundància | Còpies de seguretat fora de la cooperativa |
| **Processament** | Executar càlculs pesats sota demanda | Entrenar el model de predicció de collita |
| **Execució d'aplicacions** | Serveis accessibles des de qualsevol lloc | ERP i botiga en línia |
| **Intercanvi d'informació** | Compartir dades amb tercers de manera controlada | Donar traçabilitat al client alemany |
| **Serveis gestionats** | Bases de dades, IA, missatgeria sense administrar-los | API de visió artificial per a la calibradora |

### Avantatges

- **Escalabilitat i elasticitat.** Es creix sense comprar maquinari.
- **Costos previsibles** i sense inversió inicial forta.
- **Accessibilitat** des de qualsevol lloc, útil per a la gent de camp i comercials.
- **Alta disponibilitat i recuperació** davant de desastres, amb rèpliques geogràfiques.
- **Actualització contínua** sense gestionar pedaços.
- **Serveis avançats a l'abast d'una pime**: analítica i IA que serien inassumibles amb
  mitjans propis.

### Inconvenients i riscos

!!! danger "Els quatre que cal conéixer"
    - **Dependència del proveïdor** (*vendor lock-in*): quan tot està muntat sobre els
      serveis d'un proveïdor, canviar és car i lent.
    - **Dependència de la connexió**: sense internet, no hi ha servei. En un magatzem
      rural això no és trivial.
    - **Costos que es disparen** si no es vigila el consum.
    - **Responsabilitat compartida**: el proveïdor assegura la infraestructura, però
      **les dades continuen sent responsabilitat de l'empresa**, també davant del RGPD.

Cal afegir la **ubicació de les dades**: si es tracten dades personals, importa en quin
país estan els servidors i quines garanties ofereix el proveïdor.

---

## 4. Edge, fog i mist

Portar-ho tot al núvol no sempre és la millor idea. Quan hi ha molts dispositius generant
dades contínuament, enviar-ho tot a un centre de dades llunyà és **car, lent i sovint
inútil**.

### Les capes

``` mermaid
graph LR
  A[Mist<br>al sensor] --> B[Edge<br>al costat del procés]
  B --> C[Fog<br>a la planta o la seu]
  C --> D[Núvol<br>centre de dades]
```

| Capa | On està | Què hi fa | Latència |
| --- | --- | --- | --- |
| **Mist** | Dins del propi sensor o dispositiu | Filtre bàsic: descartar lectures impossibles | Microsegons |
| **Edge** | Al costat del procés: una passarel·la, un PLC, un miniPC | Decisions immediates i preprocessament | Mil·lisegons |
| **Fog** | A la instal·lació: un servidor del magatzem | Agregació de diversos punts, control local | Desenes de mil·lisegons |
| **Núvol** | Centre de dades remot | Històric, analítica pesada, entrenament de models | Centenars de mil·lisegons o més |

### Quan processar en l'edge

<div class="graella" markdown>

<div class="targeta" markdown>
### Cal reaccionar ja
Si una cambra frigorífica puja de temperatura, l'alarma no pot esperar que responga un
servidor a l'altra punta d'Europa.
</div>

<div class="targeta" markdown>
### La connexió pot caure
El procés ha de continuar funcionant encara que es quede sense internet. Una finca no té
cobertura garantida.
</div>

<div class="targeta" markdown>
### Hi ha massa dades
Cent sensors a un hertz generen milions de lectures al dia. Enviar-ho tot costa diners i
no aporta res.
</div>

<div class="targeta targeta--fosca" markdown>
### Les dades són sensibles
De vegades convé processar-les localment i enviar només el resultat agregat.
</div>

</div>

!!! success "El repartiment raonable a Tarongina"
    - **Edge**: control de temperatura de les cambres i alarmes de reg. Decideixen en
      local i funcionen encara que caiga la línia.
    - **Fog**: un servidor al magatzem que agrega les dades de la línia d'envasat durant
      el torn.
    - **Núvol**: històric de campanyes, entrenament del model de predicció de collita,
      quadres de comandament i botiga en línia.

    La regla general: **filtrar i agregar a baix, analitzar a dalt**.

### Vocabulari

**Latència**
: Temps que passa entre que s'envia una petició i s'obté la resposta.

**Passarel·la** (*gateway*)
: Dispositiu que connecta els sensors amb la xarxa i que sovint fa de node *edge*.

**Vendor lock-in**
: Dependència d'un proveïdor concret que fa difícil o car canviar-ne.

**Responsabilitat compartida**
: Model segons el qual el proveïdor de núvol assegura la infraestructura i el client és
  responsable de la configuració, els accessos i les dades.

---

## Idees clau

1. El núvol és passar d'un model de **propietat** a un de **servei**, amb pagament per ús.
2. **IaaS, PaaS i SaaS** es distingeixen per **qui gestiona què**, no per la mida.
3. El model de **servei** i el de **desplegament** són dues classificacions diferents.
4. **Edge, fog i mist** són capes de processament acostades a l'origen de les dades.
5. La regla pràctica: **filtrar i agregar a baix, analitzar a dalt**. I la responsabilitat
   sobre les dades no es delega mai.

## Per a ampliar

- [Definició de cloud computing del NIST](https://csrc.nist.gov/publications/detail/sp/800-145/final) — el document que va fixar els models IaaS, PaaS i SaaS.
- [Guia de l'AEPD sobre encarregats del tractament](https://www.aepd.es/) — què cal exigir a un proveïdor de núvol.

[Activitats de la unitat :material-arrow-right:](activitats.md){ .md-button .md-button--primary }
[Qüestionari d'autoavaluació :material-arrow-right:](questionari.md){ .md-button }
