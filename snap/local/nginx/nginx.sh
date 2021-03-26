#!/bin/sh

CONFIG_FILE="$SNAP/nginx.conf"

mkdir -p /var/snap/streamsheets/current/nginx/body

$SNAP/usr/sbin/nginx -c $CONFIG_FILE
