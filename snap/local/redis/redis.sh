#!/bin/sh

CONFIG_FILE="$SNAP/redis.conf"

mkdir -p $SNAP_COMMON/redis

$SNAP/usr/bin/redis-server $CONFIG_FILE
