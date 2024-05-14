---
title: '@tauri-apps/plugin-authenticator'
editUrl: false
sidebar:
  label: 'authenticator'
---

## Classes

### Authenticator

#### Constructors

##### constructor()

```ts
new Authenticator(): Authenticator
```

###### Returns

[`Authenticator`](/references/javascript/authenticator/#authenticator)

#### Methods

##### init()

```ts
init(): Promise< void >
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:8](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/authenticator/guest-js/index.ts#L8)

---

##### register()

```ts
register(challenge, application): Promise< string >
```

###### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `challenge`   | `string` |
| `application` | `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [index.ts:12](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/authenticator/guest-js/index.ts#L12)

---

##### sign()

```ts
sign(
  challenge,
  application,
  keyHandle): Promise< string >
```

###### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `challenge`   | `string` |
| `application` | `string` |
| `keyHandle`   | `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [index.ts:34](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/authenticator/guest-js/index.ts#L34)

---

##### verifyRegistration()

```ts
verifyRegistration(
  challenge,
  application,
  registerData,
  clientData): Promise< string >
```

###### Parameters

| Parameter      | Type     |
| :------------- | :------- |
| `challenge`    | `string` |
| `application`  | `string` |
| `registerData` | `string` |
| `clientData`   | `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [index.ts:20](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/authenticator/guest-js/index.ts#L20)

---

##### verifySignature()

```ts
verifySignature(
  challenge,
  application,
  signData,
  clientData,
  keyHandle,
  pubkey): Promise< number >
```

###### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `challenge`   | `string` |
| `application` | `string` |
| `signData`    | `string` |
| `clientData`  | `string` |
| `keyHandle`   | `string` |
| `pubkey`      | `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `number` \>

**Source**: [index.ts:47](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/authenticator/guest-js/index.ts#L47)
