#!/bin/sh

CONFIG_FILE="$SNAP/mongodb.conf"

mkdir -p $SNAP_COMMON/mongodb
rm -f $SNAP_COMMON/mongodb.sock

$SNAP/usr/bin/mongod -f $CONFIG_FILE
