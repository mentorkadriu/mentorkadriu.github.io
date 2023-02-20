---
title: 'Nji udhëzues i plotë i useEffect'
excerpt: 'Si perdoret useEffect ne reactjs'
coverImage: ''
date: '2022-09-22T12:38:30.586Z'
author:
name: Mentor Kadriu
picture: ''
ogImage:
url: '' tags: ['useEffect', 'react', 'javascript', 'hooks']
---

Ky postim eshte marr nga: [https://overreacted.io/](https://overreacted.io/a-complete-guide-to-useeffect/)

Ti i ke shkru do komponenta me [Hooks](https://reactjs.org/docs/hooks-intro.html). Nashta edhe naj small app. Ne pergjithesi je i knaqur. Ndihesh rehat me API (e react) dhe i ke msu disa trika gjate kesaj kohe. Ti bile ke shkru edhe [_custom hooks_](https://reactjs.org/docs/hooks-custom.html), me _extract_ logjike qe perseritet (300 rresha shkun!), edhe je fry para kolegeve. "Bravo bre" ta kan kthy.

Por ndonjëherë kur përdorni `useEffect`, pjesët nuk përshtaten plotësisht së bashku. E ki një ndjenje se diçka spo din. Duket e ngjashme me _class lifecycles_ ... por a është me të vërtetë?

Ne fund e gjeni veten duke bërë pyetje si:

- 🤔 Qysh muj me repliku `componentDidMount` me `useEffect`?
- 🤔 Qysh me _fetch data_ brenda `useEffect`? Cka o `[]`?
- 🤔 A duhet me specifiku _functions_ si _dependency_ te _effect_ a jo?
- 🤔 Pse kanihere qelloj me ni _infinite refetching loop_?
- 🤔 Pse kanihere e kam _old state_ ose _old prop value_ brenda _effect_ tim?

## TLDR

Qe ni _TLDR_ e shpejt, ski nevoje me lexu krejt postin. Nese diqka s'tu doket ok, _scroll down_ deri sa te gjen diqka
relevante.

### Qysh muj me repliku `componentDidMount` me `useEffect`?

Edhe pse ti mundesh me perdor `useEffect(fn, [])`, nuk osht krejt i njejt. Ndryshe prej `componentDidMount`, `useEffect` i
kap _props_ dhe _state_. Keshtu qe edhe brenda _callbacks_, ti ke me pa _initial props and state_. Nese don me pa _latest_ diqka duhet me shkru me nje _ref_. Por zakonisht ka menyra me te thjeshta me strukturu kodin, keshtu qe nuk ke
nevoje me perdor _ref_. Mbaje ne mend qe _mental model_ per _effects_ osht i ndryshem prej `componentDidMount` edhe _other lifecycles_, mu mundu me i barazu ose me gjet ngjajshmeri veq ta pshtillin. Per me qene ma produktiv,
duhet mu mundu me "mendu me efekte", se _mental model_ i efekteve osht ma afer te zbatimit te sinkronizimit (_implementing synchronization_) sesa duke u ndikuar prej _lifecycle events_.

### Qysh me _fetch data_ brenda `useEffect`? Cka o `[]`?

[Ky postim](https://www.robinwieruch.de/react-hooks-fetch-data/) osht ni fillim i mire se qysh me bo _data fetching_
me `useEffect`. Sigurohu qe e ke lexu deri ne fund. `[]` nenkupton qe _effect_ nuk perdor asnje _value_ qe nuk merr
pjese ne _React data flow_, dhe per kete arsye eshte i sigurt te apkikohet vetem njeher. Po ashtu osht burim i zakonshëm
i _bugs_ kur vlerat ne te aktualisht perdoren (dmth: _props_ ose _state_ kur perdoren brenda `useEffect`). Ti duhet m'i
msu disa strategji (si fillim `useReducer` dhe `useCallback`), te cilat e largojn nevojen per _dependency_ sesa ne
menyre te gabuar mi shtu ato (_omitting it_).

### A duhet me specifiku _functions_ si _dependency_ te _effect_ a jo?

Rekomandohet me [_hoist functions_](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) per funksionet qe nuk
kan nevoje per _props_ ose _state_ te atij komponenti jasht komponentit, edhe mi shtu brenda veq qato funksione qe
perodren prej _effect_ ne qat _effect_. Nese edhe pas kesaj _effect_ juaj perfundon duke i perdor funksionet brenda _render scope_ ( perfshire edhe funksionet qe vjin nga _props_), atehere shtoni ato funksione brenda `useCallback`, dhe
keshtu mund ta perserisni procesin siq e shihni te nevojshme. Pse ka rendesi kjo? Se funksionet munden me "pa(shohin)" _values_ prej _props_ dhe _state_ -- keshtu qe mund te marrin pjese ne _data flow_.

### Pse kanihere qelloj me ni _infinite refetching loop_?

Kjo mundet me ndodh kur je tu bo _data fetching_ brenda ni _effect_, pa parametrin e dyt te _dependencies_. Pa te, _effects_ _run_ pas cdo _render_ -- dhe _setting the state_  do te _trigger the effects_ prap. Nji _infinite loop_ mundet
po ashtu me ndodh kur specifikon nje _value_ e cila ndrron gjithe dhe ndodhet po ashtu ne _dependency array_. Ti mundesh
me gjet cila, duke i hequr nje nga nje. Sidoqoft, heqja e nje _dependency_ qe ti e perdor (ose qorrazi e specifikon
me []) eshte zakonisht rregullimi i gabum. Në vend të kësaj, rregullo problemin në burimin e tij. P.sh. _functions_
mundet me bo kete problem, vendosja e tyre brenda _effects_, _hoisting_ i tyre, apo vendosja e tyre brenda `useCallback`
ndihmojne.
Për të shmangur rikrijimin e objekteve, `useMemo` mund të shërbejë për një qëllim të ngjashëm.

### Pse kanihere e kam _old state_ ose _old prop value_ brenda _effect_ tim?

Efektet gjithmonë "shohin" _props_ dhe _state_ prej _render_ në të cilin janë _defined_. Kjo ndihmon në parandalimin e
gabimeve, por në disa raste mund të jetë i bezdisshëm. Për ato raste, ju mund të ruani në mënyrë eksplicite një vlerë në
një referencë të ndryshueshme (artikulli i lidhur e shpjegon atë në fund). Nëse mendoni se po shihni disa _props_ ose _
state_ nga një _render_ i vjetër, por nuk e prisni atë, ndoshta ju mungojne disa _dependencies_. Provoni të përdorni [_lint rule_](https://github.com/facebook/react/issues/14920) për të trajnuar veten për t'i parë ato. Disa ditë dhe do të
jetë si një natyrë e dytë për ju. Shihni
gjithashtu [këtë përgjigje](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
në FAQ tonë.

---
Shpresoj qe kjo TLDR ke e dobishme.

---
