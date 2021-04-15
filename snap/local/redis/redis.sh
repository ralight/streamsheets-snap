#!/bin/sh

CONFIG_FILE="$SNAP/redis.conf"

mkdir -p $SNAP_COMMON/redis
rm -f $SNAP_COMMON/redis.sock

$SNAP/usr/bin/redis-server $CONFIG_FILE
