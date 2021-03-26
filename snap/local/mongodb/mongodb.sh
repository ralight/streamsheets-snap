#!/bin/sh

CONFIG_FILE="$SNAP/mongodb.conf"

mkdir -p /var/snap/streamsheets/common/mongodb

$SNAP/usr/bin/mongod -f $CONFIG_FILE
