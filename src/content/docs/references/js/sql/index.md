---
title: '@tauri-apps/plugin-sql'
editUrl: false
prev: false
next: false
---

## Classes

### default

**Database**

The `Database` class serves as the primary interface for
communicating with the rust side of the sql plugin.

#### Constructors

##### constructor()

```ts
new default(path): default
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

###### Returns

[`default`](/references/js/sql/#default)

**Source**: [index.ts:29](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/sql/guest-js/index.ts#L29)

#### Properties

| Property                             | Type     |
| :----------------------------------- | :------- |
| <a id="path" name="path"></a> `path` | `string` |

#### Methods

##### close()

```ts
close(db?): Promise< boolean >
```

**close**

Closes the database connection pool.

###### Example

```ts
const success = await db.close();
```

###### Parameters

| Parameter | Type     | Description                                                                                                                |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| `db`?     | `string` | Optionally state the name of a database if you are managing more than one. Otherwise, all database pools will be in scope. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [index.ts:161](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/sql/guest-js/index.ts#L161)

---

##### execute()

```ts
execute(query, bindValues?): Promise< QueryResult >
```

**execute**

Passes a SQL expression to the database for execution.

###### Example

```ts
// for sqlite & postgres
// INSERT example
const result = await db.execute('INSERT into todos (id, title, status) VALUES ($1, $2, $3)', [
  todos.id,
  todos.title,
  todos.status,
]);
// UPDATE example
const result = await db.execute('UPDATE todos SET title = $1, completed = $2 WHERE id = $3', [
  todos.title,
  todos.status,
  todos.id,
]);

// for mysql
// INSERT example
const result = await db.execute('INSERT into todos (id, title, status) VALUES (?, ?, ?)', [
  todos.id,
  todos.title,
  todos.status,
]);
// UPDATE example
const result = await db.execute('UPDATE todos SET title = ?, completed = ? WHERE id = ?', [
  todos.title,
  todos.status,
  todos.id,
]);
```

###### Parameters

| Parameter     | Type        |
| :------------ | :---------- |
| `query`       | `string`    |
| `bindValues`? | `unknown`[] |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`QueryResult`](/references/js/sql/#queryresult) \>

**Source**: [index.ts:108](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/sql/guest-js/index.ts#L108)

---

##### select()

```ts
select<T>(query, bindValues?): Promise< T >
```

**select**

Passes in a SELECT query to the database for execution.

###### Example

```ts
// for sqlite & postgres
const result = await db.select('SELECT * from todos WHERE id = $1', id);

// for mysql
const result = await db.select('SELECT * from todos WHERE id = ?', id);
```

###### Type parameters

| Parameter |
| :-------- |
| `T`       |

###### Parameters

| Parameter     | Type        |
| :------------ | :---------- |
| `query`       | `string`    |
| `bindValues`? | `unknown`[] |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `T` \>

**Source**: [index.ts:140](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/sql/guest-js/index.ts#L140)

---

##### get()

```ts
static get(path): default
```

**get**

A static initializer which synchronously returns an instance of
the Database class while deferring the actual database connection
until the first invocation or selection on the database.

# Sqlite

The path is relative to `tauri::path::BaseDirectory::App` and must start with `sqlite:`.

###### Example

```ts
const db = Database.get('sqlite:test.db');
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

###### Returns

[`default`](/references/js/sql/#default)

**Source**: [index.ts:72](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/sql/guest-js/index.ts#L72)

---

##### load()

```ts
static load(path): Promise< default >
```

**load**

A static initializer which connects to the underlying database and
returns a `Database` instance once a connection to the database is established.

# Sqlite

The path is relative to `tauri::path::BaseDirectory::App` and must start with `sqlite:`.

###### Example

```ts
const db = await Database.load('sqlite:test.db');
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`default`](/references/js/sql/#default) \>

**Source**: [index.ts:48](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/sql/guest-js/index.ts#L48)

## Interfaces

### QueryResult

#### Properties

| Property                                                     | Type     | Description                                                                                                                                                                                                                                                                       |
| :----------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="lastinsertid" name="lastinsertid"></a> `lastInsertId` | `number` | The last inserted `id`.<br /><br />This value is always `0` when using the Postgres driver. If the<br />last inserted id is required on Postgres, the `select` function<br />must be used, with a `RETURNING` clause<br />(`INSERT INTO todos (title) VALUES ($1) RETURNING id`). |
| <a id="rowsaffected" name="rowsaffected"></a> `rowsAffected` | `number` | The number of rows affected by the query.                                                                                                                                                                                                                                         |
