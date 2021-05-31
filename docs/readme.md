---
sidebar_position: 1
slug: intro
---

# Intro

Методология для проектирования *frontend проектов*, нацеленная [**на разделение приложения согласно бизнес-логике и областям ответственности.**][refs-splitting]

- Обеспечивает [**понятность, контролируемость и адаптивность**][refs-arch-req] архитектуры
- Основана на [**проверенных временем**][refs-motivation-why] практиках проектирования и концепциях
    > `SOLID`, `GRASP`, `DDD`, `Separation of Concerns`, `Vertical Slices`, `Public API`, `Isolation`
- Предлагает разделять проект согласно [**бизнес-юнитам**][ext-ubiq-lang]

:::note Примечание

Методология не привязана к конкретному стеку и применима *к любым фронтенд-проектам* в целом.

Но текущая версия приводит примеры и проработана на базе связки `JavaScript` + `React`

:::

![feature-sliced-banner](../assets/banner.jpg)

[Знакомство с методологией](get-started/quick-start) | [Фундаментальные концепции](concepts/architecture) | [Практические гайды по применению](guides/migration-from-v1) | [Справочный материал](reference/glossary) | [О методолологии](about/mission)
|---|---|---|---|---|

[refs-splitting]: /docs/concepts/app-splitting
[refs-arch-req]: https://feature-sliced.design/docs/concepts/architecture#требования
[refs-motivation-why]: https://feature-sliced.design/docs/get-started/motivation#-почему-не-хватает-существующих-решений

[ext-ubiq-lang]: https://thedomaindrivendesign.io/developing-the-ubiquitous-language