# -*- coding: utf-8 -*-
"""
Generador dels qüestionaris del mòdul.

Hi ha DOS bancs de preguntes separats i independents:

  scripts/banc_web.py     10 preguntes per unitat.
                          Autoavaluació del web. No puntua.
                          -> docs/assets/quizzes/uXX.json

  scripts/banc_aules.py   20 preguntes per unitat, diferents de les del web.
                          Qüestionaris avaluables d'Aules.
                          -> aules/gift/uXX.txt

La carpeta aules/ queda FORA de docs/, o siga que no es publica al web.

Ús:  python scripts/genera.py
"""

import json
import os
import re
import sys

ARREL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ARREL, "scripts"))

DIR_JSON = os.path.join(ARREL, "docs", "assets", "quizzes")
DIR_GIFT = os.path.join(ARREL, "aules", "gift")

NO_HO_SE = "No ho sé"
RETRO_NO_HO_SE = "Cap problema: torna als apunts de la unitat i prova-ho una altra vegada."


# --------------------------------------------------------------------------
# Utilitats GIFT
# --------------------------------------------------------------------------

def escapa(text):
    """Escapa els caràcters reservats del format GIFT."""
    for c in ["\\", "~", "=", "#", "{", "}", ":"]:
        text = text.replace(c, "\\" + c)
    return text


def titol(prefix, index, enunciat):
    """Títol curt i únic per a la pregunta dins del banc d'Aules."""
    net = re.sub(r"[^\w\s·àèéíòóúïüçÀÈÉÍÒÓÚÏÜÇ'-]", "", enunciat)
    return "%s-%02d %s" % (prefix, index, " ".join(net.split())[:58])


def bloc_gift(nom, enunciat, opcions):
    """opcions: llista de (text, retroalimentació, és_correcta)."""
    linies = ["::%s::%s{" % (escapa(nom), escapa(enunciat))]
    for text, retro, correcta in opcions:
        linies.append("%s%s#%s" % ("=" if correcta else "~", escapa(text), escapa(retro)))
    linies.append("}")
    return "\n".join(linies)


# --------------------------------------------------------------------------
# Normalització dels tipus de pregunta
# --------------------------------------------------------------------------

def normalitza(pregunta):
    """
    Converteix qualsevol tipus de pregunta a una estructura comuna:
        {"tipus": ..., "enunciat": ..., "opcions": [(text, retro, correcta), ...]}

    Tipus admesos en els bancs:
        ("mc",    enunciat, [(text, retro), ...])        primera opció = correcta
        ("vf",    afirmació, True/False, explicació)     surt com a tria Vertader/Fals
        ("curta", enunciat, [resposta, ...], explicació) resposta curta d'Aules
    """
    tipus = pregunta[0]

    if tipus == "mc":
        _, enunciat, opcions = pregunta
        return {
            "tipus": "mc",
            "enunciat": enunciat,
            "opcions": [(t, r, i == 0) for i, (t, r) in enumerate(opcions)],
        }

    if tipus == "vf":
        _, afirmacio, cert, explicacio = pregunta
        return {
            "tipus": "vf",
            "enunciat": afirmacio,
            "opcions": [
                ("Vertader", explicacio, bool(cert)),
                ("Fals", explicacio, not bool(cert)),
            ],
        }

    if tipus == "curta":
        _, enunciat, respostes, explicacio = pregunta
        return {
            "tipus": "curta",
            "enunciat": enunciat,
            "opcions": [(r, explicacio, True) for r in respostes],
        }

    raise ValueError("Tipus de pregunta desconegut: %r" % (tipus,))


# --------------------------------------------------------------------------
# Generació
# --------------------------------------------------------------------------

def genera_web(banc):
    """Qüestionaris d'autoavaluació del web, en JSON."""
    os.makedirs(DIR_JSON, exist_ok=True)
    total = 0

    for clau in sorted(banc):
        unitat = banc[clau]
        preguntes = []

        for i, p in enumerate(unitat["preguntes"], start=1):
            n = normalitza(p)
            if n["tipus"] == "curta":
                raise ValueError("El banc del web no admet respostes curtes (%s)" % clau)

            opcions = [
                {"text": t, "retro": r, "correcta": c}
                for t, r, c in n["opcions"]
            ]
            if n["tipus"] == "mc":
                opcions.append({"text": NO_HO_SE, "retro": RETRO_NO_HO_SE, "correcta": False})

            preguntes.append({
                "id": "%s-%02d" % (clau, i),
                "tipus": n["tipus"],
                "enunciat": n["enunciat"],
                "opcions": opcions,
            })

        desti = os.path.join(DIR_JSON, clau + ".json")
        with open(desti, "w", encoding="utf-8") as f:
            json.dump(
                {"titol": unitat["titol"], "ra": unitat["ra"], "preguntes": preguntes},
                f, ensure_ascii=False, indent=2,
            )
            f.write("\n")

        total += len(preguntes)
        print("  web   %s  %2d preguntes" % (clau, len(preguntes)))

    return total


def genera_aules(banc):
    """Qüestionaris avaluables d'Aules, en format GIFT."""
    os.makedirs(DIR_GIFT, exist_ok=True)
    total = 0
    tot = []

    for clau in sorted(banc):
        unitat = banc[clau]
        categoria = unitat["titol"].replace(".", "").replace(":", "")
        linies = [
            "// %s  ·  %s" % (unitat["titol"], unitat["ra"]),
            "// Generat per scripts/genera.py a partir de scripts/banc_aules.py.",
            "// No edites aquest fitxer a mà.",
            "",
            "$CATEGORY: $course$/top/Digitalitzacio/%s" % categoria,
            "",
        ]

        for i, p in enumerate(unitat["preguntes"], start=1):
            n = normalitza(p)
            nom = titol(clau.upper(), i, n["enunciat"])
            linies.append(bloc_gift(nom, n["enunciat"], n["opcions"]))
            linies.append("")

        text = "\n".join(linies)
        with open(os.path.join(DIR_GIFT, clau + ".txt"), "w", encoding="utf-8") as f:
            f.write(text)
        tot.append(text)

        total += len(unitat["preguntes"])
        print("  aules %s  %2d preguntes" % (clau, len(unitat["preguntes"])))

    with open(os.path.join(DIR_GIFT, "tot.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(tot))

    return total


def main():
    import banc_web

    print("Qüestionaris d'autoavaluació (web)")
    n_web = genera_web(banc_web.UNITATS)
    print("")
    print("Web:   %3d preguntes  ->  docs/assets/quizzes/" % n_web)

    # El banc d'Aules és opcional: conté les respostes dels qüestionaris que
    # puntuen i per això no forma part del repositori públic. Si el tens en
    # local, l'script també el genera.
    try:
        import banc_aules
    except ImportError:
        print("")
        print("scripts/banc_aules.py no hi és: no es generen els fitxers d'Aules.")
        print("És normal si has clonat el repositori públic.")
        return

    print("")
    print("Qüestionaris avaluables (Aules)")
    n_aules = genera_aules(banc_aules.UNITATS)
    print("")
    print("Aules: %3d preguntes  ->  aules/gift/" % n_aules)

    # Comprovació: cap enunciat repetit entre els dos bancs
    def enunciats(banc):
        return {
            normalitza(p)["enunciat"].strip().lower()
            for u in banc.values() for p in u["preguntes"]
        }

    repetits = enunciats(banc_web.UNITATS) & enunciats(banc_aules.UNITATS)
    if repetits:
        print("")
        print("AVÍS: %d enunciats es repeteixen en els dos bancs:" % len(repetits))
        for e in sorted(repetits):
            print("  ·", e[:90])
    else:
        print("Cap enunciat es repeteix entre els dos bancs.")


if __name__ == "__main__":
    main()
