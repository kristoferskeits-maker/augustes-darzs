# AuGustes iedvesmas dārzs — mājaslapa

Vienkārša, statiska informatīva vietne, kas paredzēta publicēšanai ar **GitHub Pages**.

## Faili

| Fails | Ko dara |
|-------|---------|
| `index.html` | Visa lapa (teksts, sadaļas) |
| `styles.css` | Noformējums un krāsas |
| `script.js` | Sezonas statuss, mobilā izvēlne |
| `images/` | Fotogrāfijas un logo (skat. `images/README.txt`) |

## Kā rediģēt saturu

- **Teksts** (cenas, kontakti, FAQ) — atver `index.html`, atrodi vajadzīgo sadaļu (katrai ir komentārs, piem. `<!-- IEEJAS MAKSA -->`) un labo tekstu.
- **"Kas šobrīd notiek dārzā?"** — Lauras rediģējamā josla. Atrodi `index.html` sadaļu `<!-- ŠOBRĪD DĀRZĀ -->`, nomaini tekstu un datumu `Atjaunots: ...`. Vairāk nekā nekas nav jāmaina.
- **Sezonas statuss (hero pogā)** — `script.js` rindā `const OVERRIDE = "AUTO";`. Iespējamās vērtības:
  - `"AUTO"` — aprēķinās pēc datuma (atvērts ~23. jūlijs–15. oktobris). **Šobrīd iestatīts.**
  - `"open"` — vienmēr rāda "Šodien atvērts 11–17"
  - `"closed"` — vienmēr rāda "Ziemā slēgts · tiekamies vasarā"
- **FAQ** — jautājumi atrodas `index.html` sadaļā `<!-- FAQ -->`. Pirmie 6 redzami uzreiz, pārējie parādās pēc pogas "Skatīt visus jautājumus".
- **Foto** — ieliec attēlus mapē `images/` (skat. `images/README.txt`).

> **Piezīme:** pašreizējās fotogrāfijas ir pagaidu (bezmaksas no Unsplash), lai redzētu, kā lapa izskatās. Aizstāj tās ar īstajām dārza bildēm, saglabājot tos pašus failu nosaukumus.

## Kā publicēt ar GitHub Pages

1. Izveido GitHub kontu (ja vēl nav): https://github.com
2. Izveido jaunu *repository* (piem. `augustes-darzs`), public.
3. Augšupielādē visus failus (vai `git push`).
4. Repository → **Settings → Pages** → *Source: Deploy from a branch* → `main` / `root` → **Save**.
5. Pēc dažām minūtēm lapa būs pieejama: `https://<lietotājvārds>.github.io/augustes-darzs/`

Vēlāk var pieslēgt arī savu domēnu (piem. `augustesdarzs.lv`).

---

*Krāsas no logo: plūmju violets `#4A1F47`, rozā `#C96BA0`, maigi rozā `#F3EBF1`, gandrīz balts `#FAF7F4`.*
