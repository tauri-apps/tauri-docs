---
title: '@tauri-apps/plugin-nfc'
editUrl: false
prev: false
next: false
---

## Enumerations

### NFCTypeNameFormat

#### Enumeration Members

##### AbsoluteURI

```ts
AbsoluteURI: 3;
```

**Source**: [index.ts:84](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L84)

---

##### Empty

```ts
Empty: 0;
```

**Source**: [index.ts:81](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L81)

---

##### Media

```ts
Media: 2;
```

**Source**: [index.ts:83](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L83)

---

##### NfcExternal

```ts
NfcExternal: 4;
```

**Source**: [index.ts:85](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L85)

---

##### NfcWellKnown

```ts
NfcWellKnown: 1;
```

**Source**: [index.ts:82](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L82)

---

##### Unchanged

```ts
Unchanged: 6;
```

**Source**: [index.ts:87](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L87)

---

##### Unknown

```ts
Unknown: 5;
```

**Source**: [index.ts:86](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L86)

---

### TechKind

#### Enumeration Members

##### IsoDep

```ts
IsoDep: 0;
```

**Source**: [index.ts:17](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L17)

---

##### MifareClassic

```ts
MifareClassic: 1;
```

**Source**: [index.ts:18](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L18)

---

##### MifareUltralight

```ts
MifareUltralight: 2;
```

**Source**: [index.ts:19](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L19)

---

##### Ndef

```ts
Ndef: 3;
```

**Source**: [index.ts:20](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L20)

---

##### NdefFormatable

```ts
NdefFormatable: 4;
```

**Source**: [index.ts:21](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L21)

---

##### NfcA

```ts
NfcA: 5;
```

**Source**: [index.ts:22](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L22)

---

##### NfcB

```ts
NfcB: 6;
```

**Source**: [index.ts:23](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L23)

---

##### NfcBarcode

```ts
NfcBarcode: 7;
```

**Source**: [index.ts:24](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L24)

---

##### NfcF

```ts
NfcF: 8;
```

**Source**: [index.ts:25](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L25)

---

##### NfcV

```ts
NfcV: 9;
```

**Source**: [index.ts:26](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L26)

## Interfaces

### NFCRecord

#### Properties

| Property                                      | Type                                                                 |
| :-------------------------------------------- | :------------------------------------------------------------------- |
| <a id="format" name="format"></a> `format`    | [`NFCTypeNameFormat`](/references/javascript/nfc/#nfctypenameformat) |
| <a id="id" name="id"></a> `id`                | `number`[]                                                           |
| <a id="kind" name="kind"></a> `kind`          | `number`[]                                                           |
| <a id="payload" name="payload"></a> `payload` | `number`[]                                                           |

---

### ScanOptions

#### Properties

| Property                                                                  | Type      | Description                                                           |
| :------------------------------------------------------------------------ | :-------- | :-------------------------------------------------------------------- |
| <a id="keepsessionalive" name="keepsessionalive"></a> `keepSessionAlive`? | `boolean` | -                                                                     |
| <a id="message" name="message"></a> `message`?                            | `string`  | Message displayed in the UI. iOS only.                                |
| <a id="successmessage" name="successmessage"></a> `successMessage`?       | `string`  | Message displayed in the UI when the message has been read. iOS only. |

---

### Tag

#### Properties

| Property                                      | Type                                                   |
| :-------------------------------------------- | :----------------------------------------------------- |
| <a id="id" name="id"></a> `id`                | `number`[]                                             |
| <a id="kind" name="kind"></a> `kind`          | `string`[]                                             |
| <a id="records" name="records"></a> `records` | [`TagRecord`](/references/javascript/nfc/#tagrecord)[] |

---

### TagRecord

#### Properties

| Property                                      | Type                                                                 |
| :-------------------------------------------- | :------------------------------------------------------------------- |
| <a id="id" name="id"></a> `id`                | `number`[]                                                           |
| <a id="kind" name="kind"></a> `kind`          | `number`[]                                                           |
| <a id="payload" name="payload"></a> `payload` | `number`[]                                                           |
| <a id="tnf" name="tnf"></a> `tnf`             | [`NFCTypeNameFormat`](/references/javascript/nfc/#nfctypenameformat) |

---

### UriFilter

#### Properties

| Property                                                | Type     |
| :------------------------------------------------------ | :------- |
| <a id="host" name="host"></a> `host`?                   | `string` |
| <a id="pathprefix" name="pathprefix"></a> `pathPrefix`? | `string` |
| <a id="scheme" name="scheme"></a> `scheme`?             | `string` |

---

### WriteOptions

#### Properties

| Property                                                                                 | Type                                               | Description                                                              |
| :--------------------------------------------------------------------------------------- | :------------------------------------------------- | :----------------------------------------------------------------------- |
| <a id="kind" name="kind"></a> `kind`?                                                    | [`ScanKind`](/references/javascript/nfc/#scankind) | -                                                                        |
| <a id="message" name="message"></a> `message`?                                           | `string`                                           | Message displayed in the UI when reading the tag. iOS only.              |
| <a id="successmessage" name="successmessage"></a> `successMessage`?                      | `string`                                           | Message displayed in the UI when the message has been written. iOS only. |
| <a id="successfulreadmessage" name="successfulreadmessage"></a> `successfulReadMessage`? | `string`                                           | Message displayed in the UI when the tag has been read. iOS only.        |

## Type Aliases

### ScanKind

```ts
ScanKind: {mimeType: string; type: "tag"; uri: UriFilter;} | {mimeType: string; techLists: TechKind[][]; type: "ndef"; uri: UriFilter;}
```

**Source**: [index.ts:29](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L29)

## Variables

### RTD_TEXT

```ts
const RTD_TEXT: number[];
```

**Source**: [index.ts:7](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L7)

---

### RTD_URI

```ts
const RTD_URI: number[];
```

**Source**: [index.ts:8](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L8)

## Functions

### isAvailable()

```ts
isAvailable(): Promise< boolean >
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [index.ts:270](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L270)

---

### record()

```ts
record(
  format,
  kind,
  id,
  payload): NFCRecord
```

#### Parameters

| Parameter | Type                                                                 |
| :-------- | :------------------------------------------------------------------- |
| `format`  | [`NFCTypeNameFormat`](/references/javascript/nfc/#nfctypenameformat) |
| `kind`    | `string` \| `number`[]                                               |
| `id`      | `string` \| `number`[]                                               |
| `payload` | `string` \| `number`[]                                               |

#### Returns

[`NFCRecord`](/references/javascript/nfc/#nfcrecord)

**Source**: [index.ts:110](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L110)

---

### scan()

```ts
scan(kind, options?): Promise< Tag >
```

Scans an NFC tag.

```javascript
import { scan } from '@tauri-apps/plugin-nfc';
await scan({ type: 'tag' });
```

See \<https://developer.android.com/develop/connectivity/nfc/nfc#ndef\> for more information.

#### Parameters

| Parameter  | Type                                                     | Description |
| :--------- | :------------------------------------------------------- | :---------- |
| `kind`     | [`ScanKind`](/references/javascript/nfc/#scankind)       |             |
| `options`? | [`ScanOptions`](/references/javascript/nfc/#scanoptions) |             |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Tag`](/references/javascript/nfc/#tag) \>

**Source**: [index.ts:230](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L230)

---

### textRecord()

```ts
textRecord(
  text,
  id?,
  language? = "en"): NFCRecord
```

#### Parameters

| Parameter   | Type                   | Default value |
| :---------- | :--------------------- | :------------ |
| `text`      | `string`               | `undefined`   |
| `id`?       | `string` \| `number`[] | `undefined`   |
| `language`? | `string`               | `"en"`        |

#### Returns

[`NFCRecord`](/references/javascript/nfc/#nfcrecord)

**Source**: [index.ts:130](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L130)

---

### uriRecord()

```ts
uriRecord(uri, id?): NFCRecord
```

#### Parameters

| Parameter | Type                   |
| :-------- | :--------------------- |
| `uri`     | `string`               |
| `id`?     | `string` \| `number`[] |

#### Returns

[`NFCRecord`](/references/javascript/nfc/#nfcrecord)

**Source**: [index.ts:202](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L202)

---

### write()

```ts
write(records, options?): Promise< void >
```

Write to an NFC tag.

```javascript
import { uriRecord, write } from '@tauri-apps/plugin-nfc';
await write([uriRecord('https://tauri.app')], { kind: { type: 'ndef' } });
```

If you did not previously call [scan](/references/javascript/nfc/#scan) with [ScanOptions.keepSessionAlive](/references/javascript/nfc/#keepsessionalive) set to true,
it will first scan the tag then write to it.

#### Parameters

| Parameter  | Type                                                       | Description |
| :--------- | :--------------------------------------------------------- | :---------- |
| `records`  | [`NFCRecord`](/references/javascript/nfc/#nfcrecord)[]     |             |
| `options`? | [`WriteOptions`](/references/javascript/nfc/#writeoptions) |             |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:255](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/nfc/guest-js/index.ts#L255)
