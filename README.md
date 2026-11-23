# AuGustes iedvesmas dārzs — mājaslapa

Vienkārša, statiska informatīva vietne, kas publicēta ar **GitHub Pages**.

**Lapa tiešsaistē:** https://kristoferskeits-maker.github.io/augustes-darzs/

## Faili

| Fails | Ko dara |
|-------|---------|
| `index.html` | Visa lapa (teksts, sadaļas) |
| `styles.css` | Noformējums un krāsas |
| `script.js` | Sezonas statuss, BUJ atvēršana, mobilā izvēlne |
| `images/` | Fotogrāfijas un logo (skat. `images/README.txt`) |

Nav ne datubāzes, ne "build" soļa — ko ieraksti failā, tas parādās lapā.

## Kā rediģēt saturu

- **Teksts** (cenas, kontakti, jautājumi) — atver `index.html`, atrodi vajadzīgo
  sadaļu (katrai ir komentārs, piem. `<!-- IEEJAS MAKSA -->`) un labo tekstu.
- **"Kas šobrīd notiek dārzā?"** — Lauras rediģējamā josla. Atrodi sadaļu
  `<!-- KAS ŠOBRĪD NOTIEK DĀRZĀ -->`, nomaini tekstu un datumu `Atjaunots: ...`.
  Vairāk nekas nav jāmaina.
- **Sezonas statuss** (uzraksts hero daļā) — `script.js` rindā
  `const OVERRIDE = "AUTO";`. Iespējamās vērtības:
  - `"AUTO"` — aprēķinās pēc datuma: atvērts 23. jūlijs–15. oktobris,
    pārējā laikā "Ziemā slēgts". **Šobrīd iestatīts.**
  - `"open"` — vienmēr rāda "Šodien atvērts 11–17"
  - `"closed"` — vienmēr rāda "Ziemā slēgts · tiekamies vasarā"

  Sezonas datumus var mainīt turpat funkcijā `seasonStatus()`.
- **BUJ** — jautājumi atrodas `index.html` sadaļā `<!-- BUJ -->`. Pirmie 6
  redzami uzreiz, pārējie parādās pēc pogas "Skatīt visus jautājumus".
  Pievienojot jaunu jautājumu, nokopē veselu `<div class="faq-item">` bloku
  un nomaini numurus `buj-q…` / `buj-a…` uz jaunu, vēl neizmantotu numuru.
- **Foto** — skat. `images/README.txt`.

## Kā publicēt izmaiņas

Pēc jebkuras izmaiņas:

```bash
git add -A && git commit -m "Atjaunots saturs" && git push
```

Pēc ~1 minūtes izmaiņas ir redzamas tiešsaistē. GitHub Pages pārbūvē lapu
automātiski ikreiz, kad kaut kas tiek nosūtīts uz `main` zaru.

Lapas iestatījumi: repository → **Settings → Pages** → *Deploy from a branch* →
`main` / `root`. Vēlāk tur var pieslēgt arī savu domēnu (piem. `augustesdarzs.lv`).

---

*Krāsas: vīnsarkans `#551E2F`, akcents `#8E3148`, rozā `#C66F7E`,
paneļi `#FCEEF0`, fons `#FDF7F9`.*
*Burtveidoli: Cormorant Garamond (virsraksti), Nunito Sans (teksts),
Dancing Script (paraksts).*
