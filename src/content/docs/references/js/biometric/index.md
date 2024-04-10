---
title: '@tauri-apps/plugin-biometric'
editUrl: false
prev: false
next: false
---

## Enumerations

### BiometryType

#### Enumeration Members

##### FaceID

```ts
FaceID: 2;
```

**Source**: [index.ts:12](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/biometric/guest-js/index.ts#L12)

---

##### Iris

```ts
Iris: 3;
```

**Source**: [index.ts:14](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/biometric/guest-js/index.ts#L14)

---

##### None

```ts
None: 0;
```

**Source**: [index.ts:8](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/biometric/guest-js/index.ts#L8)

---

##### TouchID

```ts
TouchID: 1;
```

**Source**: [index.ts:10](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/biometric/guest-js/index.ts#L10)

## Interfaces

### AuthOptions

#### Properties

| Property                                                                                 | Type      |
| :--------------------------------------------------------------------------------------- | :-------- |
| <a id="allowdevicecredential" name="allowdevicecredential"></a> `allowDeviceCredential`? | `boolean` |
| <a id="canceltitle" name="canceltitle"></a> `cancelTitle`?                               | `string`  |
| <a id="confirmationrequired" name="confirmationrequired"></a> `confirmationRequired`?    | `boolean` |
| <a id="fallbacktitle" name="fallbacktitle"></a> `fallbackTitle`?                         | `string`  |
| <a id="maxattemps" name="maxattemps"></a> `maxAttemps`?                                  | `number`  |
| <a id="subtitle" name="subtitle"></a> `subtitle`?                                        | `string`  |
| <a id="title" name="title"></a> `title`?                                                 | `string`  |

---

### Status

#### Properties

| Property                                                     | Type                                                                                                                                                                                                                                                |
| :----------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="biometrytype" name="biometrytype"></a> `biometryType` | [`BiometryType`](/references/js/biometric/#biometrytype)                                                                                                                                                                                            |
| <a id="error" name="error"></a> `error`?                     | `string`                                                                                                                                                                                                                                            |
| <a id="errorcode" name="errorcode"></a> `errorCode`?         | `"appCancel"` \| `"authenticationFailed"` \| `"invalidContext"` \| `"notInteractive"` \| `"passcodeNotSet"` \| `"systemCancel"` \| `"userCancel"` \| `"userFallback"` \| `"biometryLockout"` \| `"biometryNotAvailable"` \| `"biometryNotEnrolled"` |
| <a id="isavailable" name="isavailable"></a> `isAvailable`    | `boolean`                                                                                                                                                                                                                                           |

## Functions

### authenticate()

```ts
authenticate(reason, options?): Promise< void >
```

Prompts the user for authentication using the system interface (touchID, faceID or Android Iris).
Rejects if the authentication fails.

```javascript
import { authenticate } from '@tauri-apps/plugin-biometric';
await authenticate('Open your wallet');
```

#### Parameters

| Parameter  | Type                                                   | Description |
| :--------- | :----------------------------------------------------- | :---------- |
| `reason`   | `string`                                               |             |
| `options`? | [`AuthOptions`](/references/js/biometric/#authoptions) |             |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [index.ts:69](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/biometric/guest-js/index.ts#L69)

---

### checkStatus()

```ts
checkStatus(): Promise< Status >
```

Checks if the biometric authentication is available.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Status`](/references/js/biometric/#status) \>

a promise resolving to an object containing all the information about the status of the biometry.

**Source**: [index.ts:53](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/biometric/guest-js/index.ts#L53)
