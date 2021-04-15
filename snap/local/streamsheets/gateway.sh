#!/bin/sh

source $SNAP/streamsheets_env.sh

cd $SNAP_COMMON
rm -f $SNAP_COMMON/gateway.sock
$SNAP/wait-for-database.sh && $SNAP/usr/bin/node $SNAP/packages/gateway/out/start.js 2>&1 > $SNAP_COMMON/gateway.log
