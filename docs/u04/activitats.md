# U04 · Activitats

## Activitat 6 · El cicle de vida d'una caixa de taronges

<div class="meta-unitat" markdown>
<div><span>Modalitat</span><strong>En parelles</strong></div>
<div><span>Durada</span><strong>1 sessió</strong></div>
<div><span>Criteris</span><strong>RA5 · a, b, e, f, i</strong></div>
<div><span>Lliurament</span><strong>Diagrama i informe a Aules</strong></div>
</div>

Seguireu una caixa de taronges **des del sensor del camp fins al client alemany** i
documentareu totes les dades que genera pel camí: qui les crea, on es guarden, qui hi
accedeix i com es protegeixen.

### El recorregut

``` mermaid
graph LR
  A[Camp] --> B[Collita]
  B --> C[Bàscula]
  C --> D[Calibradora]
  D --> E[Envasat]
  E --> F[Cambra]
  F --> G[Expedició]
  G --> H[Client]
```

| Punt | Què passa | Dades que es generen |
| --- | --- | --- |
| **Camp** | Sensors de reg i estació meteorològica | Humitat, temperatura, pluja, tractaments |
| **Collita** | La quadrilla recull la fruita | Data, finca, quilos, persona sòcia |
| **Bàscula** | Entrada al magatzem | Pes brut, tara, hora, matrícula |
| **Calibradora** | Classificació per mida i color | Calibre, categoria, percentatge de destrí |
| **Envasat** | Confecció de la caixa | Lot, nombre de peces, format d'envàs |
| **Cambra** | Conservació en fred | Temperatura i humitat cada hora |
| **Expedició** | Càrrega del camió | Albarà, transportista, destinació |
| **Client** | Recepció a Alemanya | Incidències, devolucions, valoració |

### Tasques

1. **Dada o informació?** (8 min). Trieu **cinc** elements de la columna de la dreta i,
   per a cadascun, escriviu la dada en brut i la informació en què es converteix quan se
   li dona context.

    | Punt | Dada en brut | Informació |
    | --- | --- | --- |
    | Bàscula | `1240` | «La partida de Nerea Camps del 14 de gener pesa 1.240 kg» |

2. **El cicle de vida** (10 min). Trieu **una** d'aquestes dades i seguiu-la per les sis
   fases del cicle de vida:

    - La lectura d'humitat d'un sensor.
    - El pes d'una partida en la bàscula.
    - El registre de temperatura d'una cambra.

    | Fase | Què passa amb aquesta dada | On es guarda | Qui hi accedeix |
    | --- | --- | --- | --- |
    | Captura | | | |
    | Emmagatzematge | | | |
    | Processament i neteja | | | |
    | Anàlisi | | | |
    | Visualització i ús | | | |
    | Arxivat o eliminació | | | |

3. **Big Data?** (5 min). De totes les dades del recorregut, quines plantegen un problema
   real de **volum, velocitat o varietat**? Justifiqueu-ho. Quines caben perfectament en
   un full de càlcul?

4. **Dades personals** (7 min). Marqueu quines dades del recorregut estan subjectes al
   **RGPD** i completeu:

    | Dada personal | Per a què es necessita | Quant de temps es conservaria | Qui hi hauria de tindre accés |
    | --- | --- | --- | --- |
    | | | | |

5. **Punts febles** (5 min). Identifiqueu **tres moments** del recorregut on la dada es
   pot perdre, corrompre o filtrar, i proposeu una mesura per a cadascun.

!!! tip "Pista per a la tasca 5"
    Recordeu què va passar a l'[Activitat 2](../u01/activitats.md#activitat-2-el-dia-que-es-va-parar-la-calibradora).
    Hi ha almenys un punt del recorregut on la dada existeix **només en paper** i un altre
    on es tecleja a mà.

### Per a la posada en comú

- Quina dada del recorregut és més valuosa per a la cooperativa? I per al client alemany?
- Si un client demana la traçabilitat completa d'una caixa, quantes fonts diferents caldria
  consultar avui?
- La temperatura de la cambra, és una dada personal? I la matrícula del camió?

### Criteris de valoració

| Aspecte | Què es mira |
| --- | --- |
| Distinció dada/informació | Els exemples són correctes i propis |
| Cicle de vida | Les sis fases estan cobertes, també l'eliminació |
| Criteri sobre Big Data | Es distingeix «moltes dades» de Big Data real |
| RGPD | S'identifiquen bé les dades personals i els terminis |
| Diagrama | És llegible i reflecteix el flux real |

[Qüestionari d'autoavaluació :material-arrow-right:](questionari.md){ .md-button .md-button--primary }
