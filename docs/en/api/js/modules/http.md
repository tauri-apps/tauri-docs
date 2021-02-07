---
id: "http"
title: "Module: http"
sidebar_label: "http"
custom_edit_url: null
hide_title: true
---

# Module: http

## Table of contents

### Enumerations

- [BodyType](../enums/http.bodytype.md)
- [ResponseType](../enums/http.responsetype.md)

### Interfaces

- [HttpOptions](../interfaces/http.httpoptions.md)

### Type aliases

- [Body](../types/http.body.md)
- [HttpVerb](../types/http.httpverb.md)
- [PartialOptions](../types/http.partialoptions.md)

## Properties

### default

• **default**: { `BodyType`: *typeof* [*BodyType*](../enums/http.bodytype.md) ; `ResponseType`: *typeof* [*ResponseType*](../enums/http.responsetype.md) ; `delete`: <T\>(`url`: *string*, `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> ; `get`: <T\>(`url`: *string*, `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> ; `patch`: <T\>(`url`: *string*, `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> ; `post`: <T\>(`url`: *string*, `body`: [*Body*](../types/http.body.md), `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> ; `put`: <T\>(`url`: *string*, `body`: [*Body*](../types/http.body.md), `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> ; `request`: <T\>(`options`: [*HttpOptions*](../interfaces/http.httpoptions.md)) => *Promise*<T\>  }

#### Type declaration:

Name | Type |
------ | ------ |
`BodyType` | *typeof* [*BodyType*](../enums/http.bodytype.md) |
`ResponseType` | *typeof* [*ResponseType*](../enums/http.responsetype.md) |
`delete` | <T\>(`url`: *string*, `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> |
`get` | <T\>(`url`: *string*, `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> |
`patch` | <T\>(`url`: *string*, `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> |
`post` | <T\>(`url`: *string*, `body`: [*Body*](../types/http.body.md), `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> |
`put` | <T\>(`url`: *string*, `body`: [*Body*](../types/http.body.md), `options`: [*PartialOptions*](../types/http.partialoptions.md)) => *Promise*<T\> |
`request` | <T\>(`options`: [*HttpOptions*](../interfaces/http.httpoptions.md)) => *Promise*<T\> |

Defined in: [bundle.ts:19](https://github.com/tauri-apps/tauri/blob/237b49b/cli/tauri.js/api-src/bundle.ts#L19)
