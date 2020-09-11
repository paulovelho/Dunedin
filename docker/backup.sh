#!/bin/sh

# adapted from: https://pranavprakash.net/2017/02/04/automate-mongodb-backups-using-cron-and-shell-script/

BASEDIR=$(pwd)
BACKUPS_DIR="${BASEDIR}/database"


backup () {
	DB_CONTAINER="$1"

	TIMESTAMP=`date +%F-%H%M`
	BACKUP_NAME="${DB_CONTAINER}-${TIMESTAMP}"
	DUMP_NAME="${BACKUPS_DIR}/${BACKUP_NAME}.dump"
	TAR_NAME="${BACKUPS_DIR}/${BACKUP_NAME}.tgz"

	echo "Performing backup of ${DB_CONTAINER}"
	echo "--------------------------------------------"
	# Create backup directory
	if ! mkdir -p $BACKUPS_DIR; then
	  echo "Can't create backup directory in $BACKUPS_DIR. Go and fix it!" 1>&2
	  exit 1;
	fi;
	# Create dump
	docker exec $DB_CONTAINER sh -c 'mongodump --archive' > $DUMP_NAME

	tar -P -zcvf $TAR_NAME $DUMP_NAME

	rm $DUMP_NAME

}

backup "dunedin-mongo"

