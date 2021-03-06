# 分析網軍！

## Setup

### pip

```sh
pip3 install -r requirements.txt
```

### docker

```sh
docker build -t saga-zombie .
```

## 資料庫架構

[點我](./Database%20structure.md)

## Dev

### db.SQLiteDBHandler.`SQLiteDBHandler()`

已經加入 lock 防止多執行序同時寫入資料庫造成錯誤。預設每插入 10000 比資料會寫入硬碟一次。

如果指定的資料庫檔案不存在的話會新建一個，並自動創造好表格。

建議使用 with as 語句來確保離開時會自動寫入硬碟。

```
with SQLiteDBHandler('test.db') as db:
	# do something here
```

#### HTTP API

##### `get_post_words_freq`

###### Args

* `post_id` (required)

###### Result

* list of words
  * `word` (ex. 科文哲)
  * `count` (ex. 10)

##### `get_words_freq`

###### Args

* `beginning_day` (optional, default `1`)
* `ending_day` (optional, default `0`)

###### Result

* `statastic` (list of pairs)
  * `word` (ex. 科文哲)
  * `count` (ex. 200)

##### `get_users_pushes_count`

###### Args

* `beginning_day` (optional, default `7`)
* `ending_day` (optional, default `0`)

###### Result

* list of pair
  * `username` (ex. aaab)
  * `count` (ex. 1600)

##### `get_users_posts_count`

###### Args

* `beginning_day` (optional, default `7`)
* `ending_day` (optional, default `0`)

###### Result

* list of pair
  * `username` (ex. aaabb)
  * `count` (ex. 100)

##### `get_user_pushes_words_freq`

###### Args

* `username` (required)

* `beginning_day` (optional, default `7`)

* `ending_day` (optional, default `0`)

###### Result

- list of pair
  - `word` (ex. 科文哲)
  - `count` (ex. 200)

##### `get_posts_by_username`

###### Args

- `username` (required)

- `beginning_day` (optional, default `7`)

- `ending_day` (optional, default `0`)

###### Result

* list of post info
  * `board`
  * `post_id`
  * `date_time`
  * `title`
  * `web_url`
  * `ip`

##### `get_pushes_by_username`

###### Args

- `username` (required)

- `beginning_day` (optional, default `7`)

- `ending_day` (optional, default `0`)

###### Result

* list of pushes info
  * `board`
  * `post_id`
  * `type`
  * `content`
  * `ip`
  * `date_time`

##### `get_post_word_freq`

###### Args

- `post_id` (required)

###### Result

- list of pair
  - `word` (ex. 科文哲)
  - `count` (ex. 200)

##### `get_post_by_post_id`

###### Args

* `board` (required)

* `post_id` (required)

###### Result

* `board`
* `author`
* `date_time`
* `title`
* `web_url`
* `ip`

##### `get_pushes`

###### Args

- `beginning_day` (optional, default `7`)
- `ending_day` (optional, default `0`)

###### Result

* list of pushes info
  * `board`
  * `post_id`
  * `type`
  * `author`
  * `ip`
  * `date_time`

##### `get_users_activities_hours`

###### Args

- `beginning_day` (optional, default `7`)
- `ending_day` (optional, default `0`)

###### Result

* `days_ago`
  * list of user -> hour

###### Ex

```
{
   "statistic" : {
      "3" : {
         "smallcar801" : 7,
         "jason985" : 5,
         "bqack" : 5,
         "cca1109" : 7,
         "aenneas" : 6,
         "ThreekRoger" : 7
      }
   }
}
```

