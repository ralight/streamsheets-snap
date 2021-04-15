#!/bin/sh

CONFIG_FILE="$SNAP/nginx.conf"

mkdir -p $SNAP_DATA/nginx/body

$SNAP/usr/sbin/nginx -c $CONFIG_FILE
