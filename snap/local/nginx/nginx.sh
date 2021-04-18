#!/bin/sh

CONFIG_FILE="$SNAP_DATA/nginx.conf"

mkdir -p $SNAP_DATA/nginx/body

$SNAP/usr/sbin/nginx -c $CONFIG_FILE
