# U03. Intel·ligència artificial

<div class="meta-unitat" markdown>
<div><span>Resultat d'aprenentatge</span><strong>RA4</strong></div>
<div><span>Criteris</span><strong>a — f</strong></div>
<div><span>Sessions</span><strong>2</strong></div>
<div><span>Activitats</span><strong>1</strong></div>
</div>

!!! abstract "Què sabràs fer en acabar"
    - Distingir la intel·ligència artificial d'una automatització amb regles fixes.
    - Explicar la relació entre IA, *machine learning* i Big Data.
    - Identificar els sectors amb més implantació i els llenguatges i eines habituals.
    - Valorar què aporta la IA al sector informàtic i quins riscos comporta.

---

## 1. Què és i què no és la IA

La **intel·ligència artificial** és el conjunt de sistemes informàtics capaços de fer
tasques que normalment requeririen intel·ligència humana: reconéixer imatges, entendre
llenguatge, detectar patrons o prendre decisions en situacions que no estaven previstes
una per una.

La diferència essencial amb la informàtica de tota la vida és aquesta:

| | Programa clàssic | Sistema d'IA |
| --- | --- | --- |
| **Com se li diu què fer** | Algú escriu les regles | S'entrena amb exemples |
| **Davant d'un cas nou** | Falla si no estava previst | Generalitza a partir del que ha aprés |
| **El resultat** | Sempre el mateix | Probabilístic: pot equivocar-se |
| **Per a millorar-lo** | Es canvia el codi | Es reentrena amb més dades o millors |

!!! failure "No és IA"
    - Programar un correu perquè s'envie cada dilluns a les 9 h. És una **regla fixa**.
    - Un full de càlcul amb una fórmula, per complexa que siga.
    - Ordenar alfabèticament una llista de clients.

!!! success "Sí que és IA"
    - Detectar taronges amb defectes a partir de les imatges d'una càmera.
    - Preveure quantes tones es colliran a partir de l'històric i del clima.
    - Un assistent que respon dubtes de les persones sòcies en llenguatge natural.

### Machine learning i deep learning

``` mermaid
graph LR
  A[Intel·ligència artificial] --> B[Machine learning]
  B --> C[Deep learning]
```

**Machine learning** (aprenentatge automàtic)
: Tècnica que permet a un sistema **millorar a partir de dades**, sense programar cada
  cas. El model aprén dels exemples: se li mostren milers de fotos de taronges bones i
  defectuoses, i acaba distingint-les.

**Deep learning** (aprenentatge profund)
: Subconjunt del *machine learning* basat en xarxes neuronals amb moltes capes. És el que
  hi ha darrere del reconeixement d'imatges, la traducció automàtica i els models de
  llenguatge.

### Tipus d'aprenentatge

| Tipus | Com funciona | Exemple a Tarongina |
| --- | --- | --- |
| **Supervisat** | S'entrena amb exemples ja etiquetats | Fotos de fruita marcades com «bona» o «defectuosa» |
| **No supervisat** | Busca patrons sense etiquetes prèvies | Agrupar finques amb comportament de collita semblant |
| **Per reforç** | Aprén per assaig i error amb recompenses | Ajustar el reg per a maximitzar producció amb menys aigua |

---

## 2. IA, dades i rendibilitat

La IA no funciona en el buit: **necessita dades**, i moltes. Ací es tanca el cercle amb la
resta del mòdul.

``` mermaid
graph LR
  A[Sensors i sistemes<br>generen dades] --> B[Big Data<br>emmagatzema i organitza]
  B --> C[Analítica<br>troba patrons]
  C --> D[IA<br>prediu i decideix]
  D --> E[Rendibilitat<br>menys costos, millors decisions]
```

!!! warning "Regla d'or"
    **Sense dades no hi ha analítica, i sense analítica no hi ha IA que valga res.** Un
    model entrenat amb dades dolentes dona resultats dolents, per bo que siga
    l'algorisme. En anglés se'n diu *garbage in, garbage out*.

### On apareix el retorn econòmic

<div class="graella" markdown>

<div class="targeta" markdown>
### Automatització
Tasques repetitives que deixen de consumir hores de persones qualificades.
</div>

<div class="targeta" markdown>
### Optimització
Ajustar processos en temps real: reg, temperatura, rutes, torns de personal.
</div>

<div class="targeta" markdown>
### Predicció
Anticipar demanda, collita, avaries o impagaments abans que passen.
</div>

<div class="targeta targeta--fosca" markdown>
### Personalització
Oferir a cada client el que necessita, en el moment en què ho necessita.
</div>

</div>

> **Exemple complet a Tarongina.** El magatzem perd diners per fruita mal classificada i
> per previsions de collita poc fiables. Amb **visió artificial** es pot classificar cada
> peça en mil·lisegons amb menys error que l'ull humà després de set hores de torn; amb un
> model de **predicció** alimentat per l'històric de collites, les dades de l'estació
> meteorològica i els sensors d'humitat, es pot estimar la producció amb setmanes
> d'antelació i tancar contractes amb més seguretat.

---

## 3. Sectors, llenguatges i eines

### Sectors amb implantació més rellevant

| Sector | Aplicacions consolidades |
| --- | --- |
| **Banca i assegurances** | Detecció de frau, avaluació de risc, atenció automatitzada |
| **Salut** | Diagnòstic per imatge, salut predictiva, descobriment de fàrmacs |
| **Indústria** | Control de qualitat, manteniment predictiu, optimització de producció |
| **Comerç i logística** | Recomanació, previsió de demanda, optimització de rutes |
| **Agroalimentari** | Agricultura de precisió, classificació de producte, previsió de collita |
| **Tecnologia** | Assistents, generació de codi, cerca i traducció |

### Llenguatges de programació

**Python** és el llenguatge dominant, amb molta diferència. No perquè siga el més ràpid,
sinó perquè concentra l'ecosistema de biblioteques:

| Biblioteca | Per a què |
| --- | --- |
| **scikit-learn** | Machine learning clàssic: classificació, regressió, agrupament |
| **TensorFlow** i **PyTorch** | Xarxes neuronals i deep learning |
| **pandas** i **NumPy** | Manipulació i càlcul sobre dades |
| **Matplotlib** i **Plotly** | Visualització de resultats |
| **OpenCV** | Visió artificial |

Altres llenguatges presents en l'àmbit: **R** (estadística i investigació), **Julia**
(càlcul numèric d'alt rendiment), **Java** i **C++** (integració en sistemes de producció),
i **SQL**, que no és un llenguatge d'IA però és imprescindible per a arribar a les dades.

!!! tip "Per a la vostra eixida professional"
    Avui la majoria de pimes **no entrenen models propis**: consumeixen serveis d'IA ja
    entrenats a través d'API (visió, veu, llenguatge). El perfil que demanen les empreses
    no és tant «expert en machine learning» com **tècnic capaç d'integrar un servei d'IA
    en un sistema real, tractar-ne les dades i validar-ne els resultats**. Això entra de
    ple en el vostre cicle.

---

## 4. Impacte en el sector de la informàtica

### Què canvia en la vostra faena

<div class="graella" markdown>

<div class="targeta" markdown>
### Apareixen tasques noves
Integració de serveis d'IA, preparació i neteja de dades, avaluació de resultats,
monitoratge de models en producció.
</div>

<div class="targeta" markdown>
### Canvia el desenvolupament
Assistents de codi, generació de proves i documentació. La faena es desplaça cap a
dissenyar, revisar i validar.
</div>

<div class="targeta" markdown>
### Creix la responsabilitat
Algú ha de respondre quan un model s'equivoca. Fer-ho auditable i explicable és part de
la faena tècnica.
</div>

<div class="targeta targeta--fosca" markdown>
### Nous perfils
Enginyeria de dades, MLOps, integració de models i governança de la IA són rols que fa
deu anys no existien.
</div>

</div>

### Riscos i límits que cal conéixer

!!! danger "Biaix"
    Si les dades d'entrenament arrosseguen un biaix, **el model l'aprén i el repeteix a
    escala**. Un sistema de selecció de personal entrenat amb decisions històriques
    esbiaixades reproduirà eixes decisions.

!!! danger "Opacitat"
    En molts models no és senzill explicar **per què** han donat un resultat concret. En
    decisions que afecten persones (crèdits, feina, salut), això és un problema legal i
    ètic, no només tècnic.

!!! danger "Al·lucinacions i sobreconfiança"
    Els models de llenguatge generen respostes plausibles encara que siguen falses. Mai
    s'ha de donar per bona una dada generada per IA sense verificar-la.

!!! danger "Dependència i dades"
    Enviar dades de l'empresa a un servei extern té implicacions de confidencialitat i de
    RGPD. Abans d'integrar un servei d'IA cal saber **on van les dades i qui les guarda**.

### Marc legal

El **Reglament europeu d'intel·ligència artificial** (AI Act) classifica els sistemes d'IA
segons el seu risc i imposa obligacions creixents: des dels usos prohibits fins als
sistemes d'alt risc, que exigeixen documentació, supervisió humana i traçabilitat. Per als
usos habituals en una empresa com Tarongina (classificació de fruita, previsió de collita)
les obligacions són mínimes, però convé conéixer-ne l'existència.

### Vocabulari

**Visió artificial**
: Capacitat d'un sistema d'interpretar imatges o vídeo per a reconéixer objectes, persones
  o defectes.

**PLN** (processament del llenguatge natural)
: Àrea de la IA que permet a les màquines entendre i generar llenguatge humà.

**Model**
: El resultat d'entrenar un algorisme amb dades. És el que després «prediu».

**Entrenament**
: Procés d'ajustar un model perquè aprenga els patrons d'un conjunt de dades.

**Inferència**
: Utilitzar un model ja entrenat per a obtindre una predicció sobre un cas nou.

---

## Idees clau

1. La IA **aprén de dades**; una automatització amb regles fixes, no. Eixa és la
   diferència.
2. El *machine learning* és una part de la IA, i el *deep learning* una part del *machine
   learning*.
3. **Sense dades de qualitat no hi ha IA útil.** El coll d'ampolla sol ser la dada, no
   l'algorisme.
4. **Python** domina l'ecosistema, però el perfil més demandat és el d'integració de
   serveis d'IA, no el d'entrenar models des de zero.
5. Biaix, opacitat i confidencialitat de les dades són **problemes tècnics**, no només
   ètics.

## Per a ampliar

- [Estratègia Nacional d'Intel·ligència Artificial](https://avance.digital.gob.es/ca-es/paginas/inteligencia-artificial.aspx)
- [Reglament europeu d'IA](https://digital-strategy.ec.europa.eu/es/policies/regulatory-framework-ai)
- [Teachable Machine](https://teachablemachine.withgoogle.com/) — entrena un classificador d'imatges en cinc minuts, sense programar.

[Activitats de la unitat :material-arrow-right:](activitats.md){ .md-button .md-button--primary }
[Qüestionari d'autoavaluació :material-arrow-right:](questionari.md){ .md-button }
