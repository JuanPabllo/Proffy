<p align="center"><img align="center" src="./github/logo.svg"/></p>
<hr>

<p align="center">
<img src="https://img.shields.io/npm/v/typescript?color=purple&label=TypeScript&logo=Typescript&logoColor=blue&style=for-the-badge">
<img src="https://img.shields.io/npm/v/knex?color=purple&label=knex&logo=Knex&logoColor=Blue&style=for-the-badge"/>
<img src="https://img.shields.io/npm/v/express?color=purple&label=express&logo=express&logoColor=Blue&style=for-the-badge"/>
<img src="https://img.shields.io/npm/v/sqlite3?color=purple&label=sqlite3&logo=sqlite&logoColor=blue&style=for-the-badge"/>
<img src="https://img.shields.io/npm/l/1?color=purple&logo=License&logoColor=purple&style=for-the-badge"/>
</p>


# [API] Proffy 

The API is used to provide Data to a frontend application you can access [here](https://github.com/JuanPabllo/Proffy).


## :package: Installing

```
$ yarn
```

Or

```
$ npm install
```

## :wrench: Configuration

The project uses Sqlite3 to storage data, and a query builder called Knex.
> you cand find more about it at [Sqlite](https://www.sqlite.org/index.html) and [knex](http://knexjs.org/)

To create the Database and it's tables, you just have to write on terminal:



```
$ yarn knex:migrate
```

or if you use NPM you can write:

```
$ npx knex migrate:latest
```


## :page_facing_up: How to Use

Run the project:

```
$ yarn start
```
With NPM:
```
$ npm run start
```


## :globe_with_meridians: Routes

port: localhost:3333

|Route|Method|Request Type|Description
|:---|:---:|:---:|:---:
|`/connections`|GET|`week_day`, `from` and `to` query parameters.|Lists connections total.
|`/connections`|POST|Body with `user_id`.|Increase the number of connections.
|`/classes`|GET|`page` query parameter.|Lists classes available.
|`/classes`|POST|Body with class `subject`, `cost`, user `name`, `avatar`, `whatsapp`, `bio` and class schedule `schedule.week_day`, `schedule.from`, `schedule.to`.|Create new class availability.

## :building_construction: Requests

`- GET /connections` 

Add a query param to the route `user_id` passing a numeric Value relationated with a valid user

Example:
`http://localhost:3333/connections?`

`- POST /connections`

To insert connections send a body request passing a `user_id` 

Example: 

```json
{
  "user_id": 1
}
```

` -GET /classes`

Just pass a query parameter to the route passing `week_day`, `subject`, `time`

Example: `http://localhost:3333/classes?week_day=4&subject=Geografia&time=18%3A15`

` -POST /classes`

Pass a body request with the values in the example below:

```json
{
	"name": "Juan Pablo",
	"avatar": "https://avatars1.githubusercontent.com/u/59495901?s=460&u=78581ed6769f49a748a10da7cb03722587cc51be&v=4",
	"whatsapp": "99938347298",
	"bio": "Computer science student - IFMA. Currently focused on Front-end development. Passionate about doing things.",
	"subject": "Geografia",
	"cost": 120,
	"schedule": [
		{
			"week_day": 1,
			"from": "08:00",
			"to": "12:00"
		},
			{
			"week_day": 3,
			"from": "13:00",
			"to": "17:00"
		},
			{
			"week_day": 4,
			"from": "18:00",
			"to": "22:00"
		}
	]
}
```

<hr>


## :closed_book: License


<p align="center">Released in 2020. This project is under the<a href="https://github.com/Eryk-Luiz/Proffy-Api/blob/master/LICENSE"> MIT license</a> 🚀</p>

<p align="center"> Made with coffee and love by <a href="https://github.com/juanpabllo">Juan Pablo</a> 🚀</p>