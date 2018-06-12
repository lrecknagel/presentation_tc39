# import * from "future“;

---

## Hello

Lucas Recknagel
![lucas_recknagel_img](assets/image/me.jpg "Lucas Recknagel")

[Exellio GmbH](https://www.exellio.de/)

Backend Developer

---

## Todays topics

* ECMA International?!
* TC39 Overview
* Proposals
* Future of the future

---

## ECMA International (ecma)

- _European Computer Manufacturers Association_
- Founded in 1961 - Geneva
- Create / Develop:
  - Standards
  - Technical Reports

![ecma](assets/image/ecma-logo.svg "ECMA International")

Note:
European Computer Manufacturers Association => no longer (´94)

---

## ecma Standards

- ECMA-107 – FAT12/FAT16 file system
- ECMA-262 – ECMAScript __<= JS!!!__
- ECMA-404 – JSON
- ECMA-408 – Dart language

---

## ECMA-262

- v1 initial version
- v2 editorial changes
- v3 REGEX 🤯
- v4 abandoned 😭
- v5 JSON, more obj props
- v6 ES6 => ES2015 😍
- v7 `**` && `[].includes`
- v8 async / await, atomics

Note:
ES6 was renamed to ECMAScript 2015
v9 should be out in the next days ...

---

![tc30](assets/image/tc39s.png "TC39")

- TC39 => Technical Comitee 39
- _Creators / Curators_ of ECMA-262

Note:
So what is relation ECMA 262 to TC39

---

## TC39 [👉](https://tc39.github.io/beta/)

- consists of:
 - agendas
 - notes
 - proposals,
 - ecma262

Note:
hard to overvieweble collection of git repos

---

## Stages 🚀

- 0 (Strawman) - rough ideas, no criteria
- 1 (Proposal) - solve a existing issue
- 2 (Draft) - initial spec
- 3 (Candidate) - feedback, implementations
- 4 (Finished) - ready for inclusion

Note:
rocket for championing, min 18 month

---

# Proposals

---

![finally](assets/image/proposals/finally.jpg)

---

# Proposals
### Stage 1

---

## The Pipeline Operator `|>`

* function composition sugar 🍭
* consists of:
  * [👉](https://github.com/tc39/proposal-pipeline-operator) simple proposal
  * [👉](https://github.com/js-choi/proposal-smart-pipelines) smart proposal
  * [👉](https://github.com/valtech-nyc/proposal-fsharp-pipelines/blob/master/README.md) f# proposal

Note:
Firefox implements it, compile flag
simple: Stage-1, basics
smart: Stage-0, await, statement blocks, pipeline fns
f#: like simple

---

## The Pipeline Operator `|>`

![pipeline](assets/image/proposals/pipeline.jpg)

Note:
its not like that ...

---?code=src/pipeline_01.js&lang=js&title=Pipeline

@[1-3](basic fns)
@[5-9](current usage)
@[10-18](pipe it!)

Note:
How many of you heard of it

---?code=src/pipeline_02.js&lang=js&title=Pipeline

@[1-4](basic obj + fns)
@[6](current usage)
@[8-14](pipe it!)

---

## https://github.com/tc39/proposal-partial-application

Note:
Stage 1;

---

## https://github.com/tc39/proposal-pattern-matching

Note:
Stage 1;

---

## https://github.com/tc39/proposal-collection-methods

Note:
Stage 1;

---

## https://github.com/tc39/proposal-observable
(umfangreich)
Note:
Stage 1;

---

## Optional Chaining `?.`

* deep property extraction sugar 🍭
* [👉](https://github.com/tc39/proposal-optional-chaining) `...` details

---?code=src/ochain_01.js&lang=js&title=OptionalChaining

@[1-4](simple map)
@[6-7](current usage)
@[9-12](simple extraction)

---?code=src/ochain_02.js&lang=js&title=OptionalChaining

---?code=src/ochain_03.js&lang=js&title=OptionalChaining

@[8-9](result)
@[11-16](stacking)

---

# Proposals
### Stage 2

---

## `throw` expressions

* exceptions from expression context
* [👉](https://github.com/tc39/proposal-throw-expressions) `...` details

---?code=src/throw.js&lang=js&title=throw expressions

@[1-3](default parameter)
@[5-7](conditional)

---

## https://github.com/tc39/proposal-decorators

Note:
Stage 2;

---

# Proposals
### Stage 3

---

![smoosh](assets/image/proposals/smoosh.jpg)

---

# `[].flat(), [].flatMap()`

* reducing sugar 🍭
* [👉](https://github.com/tc39/proposal-flatMap) `...` details

---?code=src/flat.js&lang=js&title=ArrayFlat

@[1-3](flat)
@[4-6](flatMap)

---

![more](assets/image/proposals/more.jpeg)

---

# [👉](https://github.com/tc39/proposals) all proposals

---

# Future of the future

---

## Its up to you!

![future](assets/image/proposals/future.jpg)

---

# Enough Future - back to the now

---?image=assets/image/hire.png

---

### Thanks for listening

---

## Maybe useful links

* [TC39](https://tc39.github.io/beta/)
* [KANGAX](http://kangax.github.io/compat-table/esnext/)
* [node.green](node.green)

---

## Main Sources

* [The web](https://google.com)
* [ECMA](https://www.ecma-international.org/)
* [TC39](https://github.com/tc39)
* [Pipeline Image](https://www.plastics.gl/construction/mega-wastewater-treatment-plant/)
* [Pipeline Operator](https://github.com/tc39/proposal-pipeline-operator)

---