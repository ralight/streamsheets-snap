#!/bin/sh

CONFIG_FILE="$SNAP/mosquitto.conf"

# Launch the snap
$SNAP/usr/sbin/mosquitto -c $CONFIG_FILE $@
