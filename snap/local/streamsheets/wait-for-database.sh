#!/bin/sh

sleep 0.5

until [ -S $SNAP_COMMON/mongodb.sock ]; do
	sleep 0.5
done
