#!/bin/sh

CONFIG_FILE="$SNAP/mosquitto.conf"

rm -f $SNAP_COMMON/mosquitto.sock
# Launch the snap
$SNAP/usr/sbin/mosquitto -c $CONFIG_FILE $@
