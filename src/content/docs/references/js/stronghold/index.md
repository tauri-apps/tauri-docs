---
title: '@tauri-apps/plugin-stronghold'
editUrl: false
prev: false
next: false
---

## Classes

### Client

#### Constructors

##### constructor()

```ts
new Client(path, name): Client
```

###### Parameters

| Parameter | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `path`    | `string`                                              |
| `name`    | [`ClientPath`](/references/js/stronghold/#clientpath) |

###### Returns

[`Client`](/references/js/stronghold/#client)

**Source**: [index.ts:275](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L275)

#### Properties

| Property                             | Type       |
| :----------------------------------- | :--------- |
| <a id="name" name="name"></a> `name` | `BytesDto` |
| <a id="path" name="path"></a> `path` | `string`   |

#### Methods

##### getStore()

```ts
getStore(): Store
```

###### Returns

[`Store`](/references/js/stronghold/#store)

**Source**: [index.ts:290](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L290)

---

##### getVault()

```ts
getVault(name): Vault
```

Get a vault by name.

###### Parameters

| Parameter | Type                                                | Description |
| :-------- | :-------------------------------------------------- | :---------- |
| `name`    | [`VaultPath`](/references/js/stronghold/#vaultpath) |             |

###### Returns

[`Vault`](/references/js/stronghold/#vault)

**Source**: [index.ts:286](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L286)

---

### Location

#### Constructors

##### constructor()

```ts
new Location(type, payload): Location
```

###### Parameters

| Parameter | Type                                                                                                                 |
| :-------- | :------------------------------------------------------------------------------------------------------------------- |
| `type`    | `string`                                                                                                             |
| `payload` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `unknown` \> |

###### Returns

[`Location`](/references/js/stronghold/#location)

**Source**: [index.ts:96](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L96)

#### Properties

| Property                                      | Type                                                                                                                 |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| <a id="payload" name="payload"></a> `payload` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `unknown` \> |
| <a id="type" name="type"></a> `type`          | `string`                                                                                                             |

#### Methods

##### counter()

```ts
static counter(vault, counter): Location
```

###### Parameters

| Parameter | Type                                                |
| :-------- | :-------------------------------------------------- |
| `vault`   | [`VaultPath`](/references/js/stronghold/#vaultpath) |
| `counter` | `number`                                            |

###### Returns

[`Location`](/references/js/stronghold/#location)

**Source**: [index.ts:108](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L108)

---

##### generic()

```ts
static generic(vault, record): Location
```

###### Parameters

| Parameter | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `vault`   | [`VaultPath`](/references/js/stronghold/#vaultpath)   |
| `record`  | [`RecordPath`](/references/js/stronghold/#recordpath) |

###### Returns

[`Location`](/references/js/stronghold/#location)

**Source**: [index.ts:101](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L101)

---

### Store

#### Constructors

##### constructor()

```ts
new Store(path, client): Store
```

###### Parameters

| Parameter | Type       |
| :-------- | :--------- |
| `path`    | `string`   |
| `client`  | `BytesDto` |

###### Returns

[`Store`](/references/js/stronghold/#store)

**Source**: [index.ts:299](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L299)

#### Properties

| Property                                   | Type       |
| :----------------------------------------- | :--------- |
| <a id="client" name="client"></a> `client` | `BytesDto` |
| <a id="path" name="path"></a> `path`       | `string`   |

#### Methods

##### get()

```ts
get(key): Promise< null | Uint8Array >
```

###### Parameters

| Parameter | Type                                              |
| :-------- | :------------------------------------------------ |
| `key`     | [`StoreKey`](/references/js/stronghold/#storekey) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

**Source**: [index.ts:304](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L304)

---

##### insert()

```ts
insert(
  key,
  value,
  lifetime?): Promise< void >
```

###### Parameters

| Parameter   | Type                                              |
| :---------- | :------------------------------------------------ |
| `key`       | [`StoreKey`](/references/js/stronghold/#storekey) |
| `value`     | `number`[]                                        |
| `lifetime`? | [`Duration`](/references/js/stronghold/#duration) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:312](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L312)

---

##### remove()

```ts
remove(key): Promise< null | Uint8Array >
```

###### Parameters

| Parameter | Type                                              |
| :-------- | :------------------------------------------------ |
| `key`     | [`StoreKey`](/references/js/stronghold/#storekey) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

**Source**: [index.ts:326](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L326)

---

### Stronghold

A representation of an access to a stronghold.

#### Constructors

##### constructor()

```ts
private new Stronghold(path): Stronghold
```

Initializes a stronghold.
If the snapshot path located at `path` exists, the password must match.

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `path`    | `string` |             |

###### Returns

[`Stronghold`](/references/js/stronghold/#stronghold)

**Source**: [index.ts:406](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L406)

#### Properties

| Property                             | Type     |
| :----------------------------------- | :------- |
| <a id="path" name="path"></a> `path` | `string` |

#### Methods

##### createClient()

```ts
createClient(client): Promise< Client >
```

###### Parameters

| Parameter | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `client`  | [`ClientPath`](/references/js/stronghold/#clientpath) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Client`](/references/js/stronghold/#client) \>

**Source**: [index.ts:438](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L438)

---

##### loadClient()

```ts
loadClient(client): Promise< Client >
```

###### Parameters

| Parameter | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `client`  | [`ClientPath`](/references/js/stronghold/#clientpath) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Client`](/references/js/stronghold/#client) \>

**Source**: [index.ts:431](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L431)

---

##### save()

```ts
save(): Promise< void >
```

Persists the stronghold state to the snapshot.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:449](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L449)

---

##### unload()

```ts
unload(): Promise< void >
```

Remove this instance from the cache.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:425](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L425)

---

##### load()

```ts
static load(path, password): Promise< Stronghold >
```

Load the snapshot if it exists (password must match), or start a fresh stronghold instance otherwise.

###### Parameters

| Parameter  | Type     | Description |
| :--------- | :------- | :---------- |
| `path`     | `string` | -           |
| `password` | `string` |             |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Stronghold`](/references/js/stronghold/#stronghold) \>

**Source**: [index.ts:415](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L415)

---

### Vault

A key-value storage that allows create, update and delete operations.
It does not allow reading the data, so one of the procedures must be used to manipulate
the stored data, allowing secure storage of secrets.

#### Extends

- `ProcedureExecutor`

#### Constructors

##### constructor()

```ts
new Vault(
  path,
  client,
  name): Vault
```

###### Parameters

| Parameter | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `path`    | `string`                                              |
| `client`  | [`ClientPath`](/references/js/stronghold/#clientpath) |
| `name`    | [`VaultPath`](/references/js/stronghold/#vaultpath)   |

###### Returns

[`Vault`](/references/js/stronghold/#vault)

###### Overrides

ProcedureExecutor.constructor

**Source**: [index.ts:350](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L350)

#### Properties

| Property                                                        | Type                                                                                                                 | Description     |
| :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------- |
| <a id="client" name="client"></a> `client`                      | `BytesDto`                                                                                                           | -               |
| <a id="name" name="name"></a> `name`                            | `BytesDto`                                                                                                           | The vault name. |
| <a id="path" name="path"></a> `path`                            | `string`                                                                                                             | The vault path. |
| <a id="procedureargs" name="procedureargs"></a> `procedureArgs` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, `unknown` \> | -               |

#### Methods

##### deriveSLIP10()

```ts
deriveSLIP10(
  chain,
  source,
  sourceLocation,
  outputLocation): Promise< Uint8Array >
```

Derive a SLIP10 private key using a seed or key.

###### Parameters

| Parameter        | Type                                              | Description                                                                                                     |
| :--------------- | :------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `chain`          | `number`[]                                        | The chain path.                                                                                                 |
| `source`         | `"Seed"` \| `"Key"`                               | The source type, either 'Seed' or 'Key'.                                                                        |
| `sourceLocation` | [`Location`](/references/js/stronghold/#location) | The source location, must be the `outputLocation` of a previous call to `generateSLIP10Seed` or `deriveSLIP10`. |
| `outputLocation` | [`Location`](/references/js/stronghold/#location) | Location of the record where the private key will be stored.                                                    |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

###### Inherited from

ProcedureExecutor.deriveSLIP10

**Source**: [index.ts:155](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L155)

---

##### generateBIP39()

```ts
generateBIP39(outputLocation, passphrase?): Promise< Uint8Array >
```

Generate a BIP39 seed.

###### Parameters

| Parameter        | Type                                              | Description                                                     |
| :--------------- | :------------------------------------------------ | :-------------------------------------------------------------- |
| `outputLocation` | [`Location`](/references/js/stronghold/#location) | The location of the record where the BIP39 seed will be stored. |
| `passphrase`?    | `string`                                          | The optional mnemonic passphrase.                               |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

###### Inherited from

ProcedureExecutor.generateBIP39

**Source**: [index.ts:210](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L210)

---

##### generateSLIP10Seed()

```ts
generateSLIP10Seed(outputLocation, sizeBytes?): Promise< Uint8Array >
```

Generate a SLIP10 seed for the given location.

###### Parameters

| Parameter        | Type                                              | Description                                           |
| :--------------- | :------------------------------------------------ | :---------------------------------------------------- |
| `outputLocation` | [`Location`](/references/js/stronghold/#location) | Location of the record where the seed will be stored. |
| `sizeBytes`?     | `number`                                          | The size in bytes of the SLIP10 seed.                 |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

###### Inherited from

ProcedureExecutor.generateSLIP10Seed

**Source**: [index.ts:130](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L130)

---

##### getEd25519PublicKey()

```ts
getEd25519PublicKey(privateKeyLocation): Promise< Uint8Array >
```

Gets the Ed25519 public key of a SLIP10 private key.

###### Since

2.0.0

###### Parameters

| Parameter            | Type                                              | Description                                                                                         |
| :------------------- | :------------------------------------------------ | :-------------------------------------------------------------------------------------------------- |
| `privateKeyLocation` | [`Location`](/references/js/stronghold/#location) | The location of the private key. Must be the `outputLocation` of a previous call to `deriveSLIP10`. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

A promise resolving to the public key hex string.

###### Inherited from

ProcedureExecutor.getEd25519PublicKey

**Source**: [index.ts:233](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L233)

---

##### insert()

```ts
insert(recordPath, secret): Promise< void >
```

Insert a record to this vault.

###### Parameters

| Parameter    | Type                                                  |
| :----------- | :---------------------------------------------------- |
| `recordPath` | [`RecordPath`](/references/js/stronghold/#recordpath) |
| `secret`     | `number`[]                                            |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:368](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L368)

---

##### recoverBIP39()

```ts
recoverBIP39(
  mnemonic,
  outputLocation,
  passphrase?): Promise< Uint8Array >
```

Store a BIP39 mnemonic.

###### Parameters

| Parameter        | Type                                              | Description                                                         |
| :--------------- | :------------------------------------------------ | :------------------------------------------------------------------ |
| `mnemonic`       | `string`                                          | The mnemonic string.                                                |
| `outputLocation` | [`Location`](/references/js/stronghold/#location) | The location of the record where the BIP39 mnemonic will be stored. |
| `passphrase`?    | `string`                                          | The optional mnemonic passphrase.                                   |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

###### Inherited from

ProcedureExecutor.recoverBIP39

**Source**: [index.ts:185](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L185)

---

##### remove()

```ts
remove(location): Promise< void >
```

Remove a record from the vault.

###### Parameters

| Parameter  | Type                                              | Description          |
| :--------- | :------------------------------------------------ | :------------------- |
| `location` | [`Location`](/references/js/stronghold/#location) | The record location. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:384](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L384)

---

##### signEd25519()

```ts
signEd25519(privateKeyLocation, msg): Promise< Uint8Array >
```

Creates a Ed25519 signature from a private key.

###### Since

2.0.0

###### Parameters

| Parameter            | Type                                              | Description                                                                                                                    |
| :------------------- | :------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| `privateKeyLocation` | [`Location`](/references/js/stronghold/#location) | The location of the record where the private key is stored. Must be the `outputLocation` of a previous call to `deriveSLIP10`. |
| `msg`                | `string`                                          | The message to sign.                                                                                                           |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

A promise resolving to the signature hex string.

###### Inherited from

ProcedureExecutor.signEd25519

**Source**: [index.ts:254](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L254)

## Interfaces

### AddressInfo

#### Properties

| Property                                   | Type                                                                                                                                                           |
| :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="peers" name="peers"></a> `peers`    | [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\< `string`, [`PeerAddress`](/references/js/stronghold/#peeraddress) \> |
| <a id="relays" name="relays"></a> `relays` | `string`[]                                                                                                                                                     |

---

### ClientAccess

#### Properties

| Property                                                                              | Type                                                                                                                                                        |
| :------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="clonevaultdefault" name="clonevaultdefault"></a> `cloneVaultDefault`?          | `boolean`                                                                                                                                                   |
| <a id="clonevaultexceptions" name="clonevaultexceptions"></a> `cloneVaultExceptions`? | [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\< [`VaultPath`](/references/js/stronghold/#vaultpath), `boolean` \> |
| <a id="readstore" name="readstore"></a> `readStore`?                                  | `boolean`                                                                                                                                                   |
| <a id="usevaultdefault" name="usevaultdefault"></a> `useVaultDefault`?                | `boolean`                                                                                                                                                   |
| <a id="usevaultexceptions" name="usevaultexceptions"></a> `useVaultExceptions`?       | [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\< [`VaultPath`](/references/js/stronghold/#vaultpath), `boolean` \> |
| <a id="writestore" name="writestore"></a> `writeStore`?                               | `boolean`                                                                                                                                                   |
| <a id="writevaultdefault" name="writevaultdefault"></a> `writeVaultDefault`?          | `boolean`                                                                                                                                                   |
| <a id="writevaultexceptions" name="writevaultexceptions"></a> `writeVaultExceptions`? | [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\< [`VaultPath`](/references/js/stronghold/#vaultpath), `boolean` \> |

---

### ConnectionLimits

#### Properties

| Property                                                                                    | Type     |
| :------------------------------------------------------------------------------------------ | :------- |
| <a id="maxestablishedincoming" name="maxestablishedincoming"></a> `maxEstablishedIncoming`? | `number` |
| <a id="maxestablishedoutgoing" name="maxestablishedoutgoing"></a> `maxEstablishedOutgoing`? | `number` |
| <a id="maxestablishedperpeer" name="maxestablishedperpeer"></a> `maxEstablishedPerPeer`?    | `number` |
| <a id="maxestablishedtotal" name="maxestablishedtotal"></a> `maxEstablishedTotal`?          | `number` |
| <a id="maxpendingincoming" name="maxpendingincoming"></a> `maxPendingIncoming`?             | `number` |
| <a id="maxpendingoutgoing" name="maxpendingoutgoing"></a> `maxPendingOutgoing`?             | `number` |

---

### Duration

A duration definition.

#### Properties

| Property                                | Type     | Description                                                                                                                                           |
| :-------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="nanos" name="nanos"></a> `nanos` | `number` | The fractional part of this Duration, in nanoseconds. Must be greater or equal to 0 and smaller than 1e+9 (the max number of nanoseoncds in a second) |
| <a id="secs" name="secs"></a> `secs`    | `number` | The number of whole seconds contained by this Duration.                                                                                               |

---

### NetworkConfig

#### Properties

| Property                                                                        | Type                                                                                                                                                           |
| :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="addresses" name="addresses"></a> `addresses`?                            | [`AddressInfo`](/references/js/stronghold/#addressinfo)                                                                                                        |
| <a id="connectiontimeout" name="connectiontimeout"></a> `connectionTimeout`?    | [`Duration`](/references/js/stronghold/#duration)                                                                                                              |
| <a id="connectionslimit" name="connectionslimit"></a> `connectionsLimit`?       | [`ConnectionLimits`](/references/js/stronghold/#connectionlimits)                                                                                              |
| <a id="enablemdns" name="enablemdns"></a> `enableMdns`?                         | `boolean`                                                                                                                                                      |
| <a id="enablerelay" name="enablerelay"></a> `enableRelay`?                      | `boolean`                                                                                                                                                      |
| <a id="peerpermissions" name="peerpermissions"></a> `peerPermissions`?          | [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\< `string`, [`Permissions`](/references/js/stronghold/#permissions) \> |
| <a id="permissionsdefault" name="permissionsdefault"></a> `permissionsDefault`? | [`Permissions`](/references/js/stronghold/#permissions)                                                                                                        |
| <a id="requesttimeout" name="requesttimeout"></a> `requestTimeout`?             | [`Duration`](/references/js/stronghold/#duration)                                                                                                              |

---

### PeerAddress

#### Properties

| Property                                                                       | Type       |
| :----------------------------------------------------------------------------- | :--------- |
| <a id="known" name="known"></a> `known`                                        | `string`[] |
| <a id="use_relay_fallback" name="use_relay_fallback"></a> `use_relay_fallback` | `boolean`  |

---

### Permissions

#### Properties

| Property                                                | Type                                                                                                                                                                                                        |
| :------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="default" name="default"></a> `default`?          | [`ClientAccess`](/references/js/stronghold/#clientaccess)                                                                                                                                                   |
| <a id="exceptions" name="exceptions"></a> `exceptions`? | [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\< [`VaultPath`](/references/js/stronghold/#vaultpath), [`ClientAccess`](/references/js/stronghold/#clientaccess) \> |

## Type Aliases

### ClientPath

```ts
ClientPath: string | Iterable<number> | ArrayLike<number> | ArrayBuffer;
```

**Source**: [index.ts:8](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L8)

---

### RecordPath

```ts
RecordPath: string | Iterable<number> | ArrayLike<number> | ArrayBuffer;
```

**Source**: [index.ts:18](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L18)

---

### StoreKey

```ts
StoreKey: string | Iterable<number> | ArrayLike<number> | ArrayBuffer;
```

**Source**: [index.ts:23](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L23)

---

### VaultPath

```ts
VaultPath: string | Iterable<number> | ArrayLike<number> | ArrayBuffer;
```

**Source**: [index.ts:13](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/stronghold/guest-js/index.ts#L13)
