---
title: '@tauri-apps/plugin-barcode-scanner'
editUrl: false
prev: false
next: false
---

## Enumerations

### Format

#### Enumeration Members

##### Aztec

```ts
Aztec: 'AZTEC';
```

**Source**: [index.ts:20](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L20)

---

##### Codabar

```ts
Codabar: 'CODABAR';
```

**Source**: [index.ts:18](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L18)

---

##### Code128

```ts
Code128: 'CODE_128';
```

**Source**: [index.ts:17](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L17)

---

##### Code39

```ts
Code39: 'CODE_39';
```

**Source**: [index.ts:15](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L15)

---

##### Code93

```ts
Code93: 'CODE_93';
```

**Source**: [index.ts:16](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L16)

---

##### DataMatrix

```ts
DataMatrix: 'DATA_MATRIX';
```

**Source**: [index.ts:21](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L21)

---

##### EAN13

```ts
EAN13: 'EAN_13';
```

**Source**: [index.ts:14](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L14)

---

##### EAN8

```ts
EAN8: 'EAN_8';
```

**Source**: [index.ts:13](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L13)

---

##### ITF

```ts
ITF: 'ITF';
```

**Source**: [index.ts:19](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L19)

---

##### PDF417

```ts
PDF417: 'PDF_417';
```

**Source**: [index.ts:22](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L22)

---

##### QRCode

```ts
QRCode: 'QR_CODE';
```

**Source**: [index.ts:10](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L10)

---

##### UPC_A

```ts
UPC_A: 'UPC_A';
```

**Source**: [index.ts:11](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L11)

---

##### UPC_E

```ts
UPC_E: 'UPC_E';
```

**Source**: [index.ts:12](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L12)

## Interfaces

### ScanOptions

#### Properties

| Property                                                               | Type                                                         |
| :--------------------------------------------------------------------- | :----------------------------------------------------------- |
| <a id="cameradirection" name="cameradirection"></a> `cameraDirection`? | `"back"` \| `"front"`                                        |
| <a id="formats" name="formats"></a> `formats`?                         | [`Format`](/references/javascript/barcode-scanner/#format)[] |
| <a id="windowed" name="windowed"></a> `windowed`?                      | `boolean`                                                    |

---

### Scanned

#### Properties

| Property                                      | Type                                                       |
| :-------------------------------------------- | :--------------------------------------------------------- |
| <a id="bounds" name="bounds"></a> `bounds`    | `unknown`                                                  |
| <a id="content" name="content"></a> `content` | `string`                                                   |
| <a id="format" name="format"></a> `format`    | [`Format`](/references/javascript/barcode-scanner/#format) |

## Type Aliases

### PermissionState

```ts
PermissionState: 'granted' | 'denied' | 'prompt';
```

**Source**: [index.ts:7](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L7)

## Functions

### cancel()

```ts
cancel(): Promise< void >
```

Cancel the current scan process.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:48](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L48)

---

### checkPermissions()

```ts
checkPermissions(): Promise< PermissionState >
```

Get permission state.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PermissionState`](/references/javascript/barcode-scanner/#permissionstate) \>

**Source**: [index.ts:55](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L55)

---

### openAppSettings()

```ts
openAppSettings(): Promise< void >
```

Open application settings. Useful if permission was denied and the user must manually enable it.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:73](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L73)

---

### requestPermissions()

```ts
requestPermissions(): Promise< PermissionState >
```

Request permissions to use the camera.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PermissionState`](/references/javascript/barcode-scanner/#permissionstate) \>

**Source**: [index.ts:64](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L64)

---

### scan()

```ts
scan(options?): Promise< Scanned >
```

Start scanning.

#### Parameters

| Parameter  | Type                                                                 | Description |
| :--------- | :------------------------------------------------------------------- | :---------- |
| `options`? | [`ScanOptions`](/references/javascript/barcode-scanner/#scanoptions) |             |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Scanned`](/references/javascript/barcode-scanner/#scanned) \>

**Source**: [index.ts:41](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/barcode-scanner/guest-js/index.ts#L41)
