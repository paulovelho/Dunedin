# Dunedin API



## api commands
commands to be executed inside __dunedin-api__ container:
`docker exec -it dunedin-api /bin/sh`


## create base user:
`node importer/base-user`
user created:
```
{
	email: "dunedin@paulovelho.com",
	password: "123",
	active: true
}
```

## import gags from twitter
edit file `importer/twitter.js` to set the filename to be imported
run `node importer/twitter`


## import gags from kindle
edit file `importer/kindle.js` to set the filename to be imported
run `node importer/kindle`


### mongo connect:
```
show databases
use dunedin
show tables
db.Gags.drop()
```

