#!/bin/sh

source $SNAP/streamsheets_env.sh

cd $SNAP_COMMON
$SNAP/wait-for-database.sh && $SNAP/usr/bin/node $SNAP/packages/service-streams/start.js 2>&1 > $SNAP_COMMON/service-streams.log
